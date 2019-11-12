import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "../../components/checkout-item/checkout-item";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import "./checkout.scss";

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <ul className="checkout-header">
      <li className="header-block">Product</li>
      <li className="header-block">Description</li>
      <li className="header-block">Quantity</li>
      <li className="header-block">Price</li>
      <li className="header-block">Remove</li>
    </ul>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">
      <span>Total: ${total}</span>
    </div>
    <div className="test-warning">
      *Please use the following test credit card for
      payments* <br />
      4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
    </div>
    <StripeCheckoutButton price={total} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
