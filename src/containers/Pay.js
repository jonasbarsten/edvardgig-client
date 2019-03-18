import React, { Component } from "react";
import { API, Auth } from "aws-amplify";
import { Elements, StripeProvider } from "react-stripe-elements";
import queryString from 'query-string'
import BillingForm from "../components/BillingForm";
import config from "../config";
import "./Pay.css";

const products = config.products;
let productArray = [];

products.map((product) => {
  productArray.push(product.name);
});

export default class Pay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
  }

  componentDidMount() {
    const queryParams = queryString.parse(this.props.location.search);

    if (!queryParams.product) {
      this.props.history.push("/dashboard");
    }

    if (productArray.indexOf(queryParams.product) === -1) {
      this.props.history.push("/dashboard");
    }

  }

  billUser(details) {
    return API.post("edvardgig", "/billing", {
      body: details
    });
  }

  handleFormSubmit = async (product, { token, error }) => {
    if (error) {
      alert(error);
      return;
    }

    this.setState({ isLoading: true });

    const userInfo = await Auth.currentUserInfo();

    try {
      await this.billUser({
        source: token.id,
        product,
        email: userInfo.attributes.email
      });

      alert("Your card has been charged successfully!");
      this.props.history.push("/dashboard");
    } catch (e) {
      alert(e);
      this.setState({ isLoading: false });
    }
  }

  render() {

    const queryParams = queryString.parse(this.props.location.search);
    const product = queryParams.product;

    let amount = 0;

    for (var i = 0; i < products.length; i++) {
      if (products[i].name === product) {
        amount = products[i].amount;
        break;
      }
    }

    return (
      <div className="Pay">
        <StripeProvider apiKey={config.STRIPE_KEY}>
          <Elements>
            <BillingForm
              loading={this.state.isLoading}
              onSubmit={this.handleFormSubmit}
              product={product}
              amount={amount}
            />
          </Elements>
        </StripeProvider>
      </div>
    );
  }
}