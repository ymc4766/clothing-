import React from "react";
import { connect } from "react-redux";
import "./checkout-style.scss";
import {
  deleteItemFromCart,
  addItem,
  removeItem,
} from "../../../actions/actions";

function CheckoutItem({ deleteItem, cartItem, addItem, removeItem }) {
  const { imageUrl, name, quantity, price } = cartItem;
  return (
    <div className="checkout__item">
      <div className="image-container">
        <img src={imageUrl} alt="" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className=" remove-button" onClick={() => deleteItem(cartItem)}>
        <i class="material-icons red">delete</i>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  deleteItem: (item) => dispatch(deleteItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
