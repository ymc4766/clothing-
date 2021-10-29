import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { selectCartItems } from "../../actions/selectors/cart-selector";
import CustomBtn from "../../Forms/Custom-Btn/CustomBtn";
import CartItem from "../cart-item/CartItem";
import { toggleCartHidden } from "../../actions/actions";
import "./dropdown-style.scss";

const CartdropDown = ({ cartItems, history, toggleCartHidden }) => {
  return (
    <div className="cart-dropdown" onClick={toggleCartHidden}>
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty">your cart is Empty </span>
        )}
      </div>

      <CustomBtn onClick={() => history.push("/checkout")}>
        Go to Check out
      </CustomBtn>
    </div>
  );
};

const mapStateToProps = (state) => {
  // halkan waxa u yeedhay cart-selector fn selectCartItem si
  //uu memoize u sameeyo cartCount ka iyo items ka s

  return { cartItems: selectCartItems(state) };
};

export default withRouter(
  connect(mapStateToProps, { toggleCartHidden })(CartdropDown)
);
