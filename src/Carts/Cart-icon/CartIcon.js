import React, { useEffect } from "react";
// import { ReactComponent as ShoppingIcon } from "../assets/shoping-bag.svg";

import "./cartIcon-style.scss";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../actions/actions";
import { selectCartItemsCount } from "../../actions/selectors/cart-selector";

function CartIcon({ toggleCartHidden, itemCount }) {
  // toglleCartHidden is action passed in cartIcon to dhow cartDropdown
  // after that go to header.js pull the connect fn then cartreducer
  // then conditional render the cartDropdown and hidden object

  useEffect(() => {
    toggleCartHidden();
  }, [toggleCartHidden]);

  return (
    <div className="cart-icon br4" onClick={toggleCartHidden}>
      {/* <ShoppingCartIcon className="shopping-icon" /> */}
      <ShoppingCartIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
}

// const mapDispatchToProps = (dispatch) => ({
//   toggleCartHidden: () => dispatch(toggleCartHidden()),
// });

const mapStateToProps = (state) => ({
  // halkan state kaliyaa u yeedhaywithOut cart.cartItems ka wuxuu
  // uga reebay  i created seperate file does the counting cart-selector
  // si uu marka logout user ku yay iya mar kale number of count = items r'ndered
  // this is memoize stuff shit
  itemCount: selectCartItemsCount(state),
});

export default connect(mapStateToProps, { toggleCartHidden })(CartIcon);
