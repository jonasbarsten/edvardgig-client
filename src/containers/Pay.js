import React, { Component } from "react";
import { API, Auth } from "aws-amplify";
import { Elements, StripeProvider } from "react-stripe-elements";
import queryString from 'query-string'
import BillingForm from "../components/BillingForm";
import config from "../config";
import "./Pay.css";

const validProducts = config.products;
const prices = [
  {product: 'SYNC', amount: '99'},
  {product: 'MIDI', amount: '49'},
  {product: 'dLive', amount: '29'},
  {product: 'SPD-SX', amount: '49'},
  {product: 'VIDEO', amount: '49'},
  {product: 'Program Change', amount: '49'}
];

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

    if (validProducts.indexOf(queryParams.product) === -1) {
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

    for (var i = 0; i < prices.length; i++) {
      if (prices[i].product === product) {
        amount = prices[i].amount;
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