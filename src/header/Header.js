import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { auth } from "../Firebase/firebaseUtils";
import { connect } from "react-redux";
import CartIcon from "../Carts/Cart-icon/CartIcon";
import CartdropDown from "../Carts/cart-dropDown/CartdropDown";
import { selectCartHidden } from "../actions/selectors/cart-selector";

function Header({ currentUser, hidden }) {
  return (
    <div className="header">
      <Link to="/" className="logo__container">
        YMc
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          Shop
        </Link>
        <Link to="" className="option">
          Contact Us
        </Link>

        {currentUser ? (
          <div className="">
            <span className="option" onClick={() => auth.signOut()}>
              Sign Out
            </span>

            <span
              className="option"
              style={{
                color: "gray",
                fontFamily: "montserrat",
                fontSize: "22px",
                fontWeight: "470",
              }}
            >
              {currentUser.displayName}
            </span>
          </div>
        ) : (
          <Link className="option" to="/signin">
            SignIn
          </Link>
        )}

        <CartIcon />
      </div>
      {hidden ? null : <CartdropDown />}
    </div>
  );
}

const mapStateToProps = (state) => {
  // this is normal way then i used user-selector stuff memoize stuff
  // return { hidden: state.cart.hidden };
  return { hidden: selectCartHidden(state) };
};

export default connect(mapStateToProps, {})(Header);
