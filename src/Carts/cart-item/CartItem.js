import React from "react";
import "./CartItem-style.scss";

function CartItem({ item: { imageUrl, name, price, quantity } }) {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="" />
      <div className="item-details">
        <span className="name"> {name}</span>
        <span className="price">
          {quantity} * ${price}
        </span>
      </div>
    </div>
  );
}

export default CartItem;
