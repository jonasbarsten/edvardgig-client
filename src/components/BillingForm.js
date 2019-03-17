import React, { Component } from "react";
import { FormGroup, Input, Label } from "reactstrap";
import { CardElement, injectStripe } from "react-stripe-elements";
import { Text } from 'tabler-react';
import LoaderButton from "./LoaderButton";
import "./BillingForm.css";

class BillingForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      // storage: "",
      isProcessing: false,
      isCardComplete: false
    };
  }

  validateForm() {
    return (
      this.state.name !== "" &&
      this.state.product !== "" &&
      this.state.isCardComplete
    );
  }

  handleFieldChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleCardFieldChange = event => {
    this.setState({
      isCardComplete: event.complete
    });
  }

  handleSubmitClick = async event => {
    event.preventDefault();

    const { name } = this.state;

    this.setState({ isProcessing: true });

    const { token, error } = await this.props.stripe.createToken({ name });

    this.setState({ isProcessing: false });

    // this.props.onSubmit(this.state.storage, { token, error });
    this.props.onSubmit(this.props.product, { token, error });
  }

  render() {
    const loading = this.state.isProcessing || this.props.loading;

    return (
      <div className="BillingForm">
        <h1>{this.props.product} <Text.Small muted>${this.props.amount}</Text.Small></h1>
        <hr />
        <form onSubmit={this.handleSubmitClick}>
          <FormGroup>
            <Label>Cardholder&apos;s name</Label>
            <Input
              id="name"
              type="text"
              value={this.state.name}
              onChange={this.handleFieldChange}
              placeholder="Name on the card"
            />
          </FormGroup>
          <Label>Credit Card Info</Label>
          <CardElement
            className="card-field"
            onChange={this.handleCardFieldChange}
            style={{
              base: { fontSize: "18px", fontFamily: '"Open Sans", sans-serif' }
            }}
          />
          <LoaderButton
            block
            type="submit"
            text="Purchase"
            isLoading={loading}
            loadingText="Purchasing…"
            disabled={!this.validateForm()}
          />
        </form>
      </div>
    );
  }
}

export default injectStripe(BillingForm);