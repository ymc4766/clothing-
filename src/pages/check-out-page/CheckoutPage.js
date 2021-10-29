import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../actions/selectors/cart-selector";
import CheckoutItem from "./check-out-item/CheckoutItem";
import StripeCheckoutButton from "../../stripe-checkout-button/StripeCheckoutButton";

import "./checkout-style.scss";

function CheckoutPage({ cartItems, total }) {
  return (
    <div className="checkout">
      <h1> CheckOut</h1>
      <div className="checkout__header">
        <div className="checkout__block ">
          <span>Product</span>
        </div>
        <div className="checkout__block ">
          <span>description</span>
        </div>
        <div className="checkout__block ">
          <span>quantity </span>
        </div>
        <div className="checkout__block ">
          <span>price</span>
        </div>
        <div className="checkout__block ">
          <span>X</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span> ToTal : ${total}</span>
      </div>
      <StripeCheckoutButton price={total} />
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
