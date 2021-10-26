import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { auth } from "../Firebase/firebaseUtils";

function Header({ currentUser }) {
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

            <span className="option grey">{currentUser.displayName}</span>
          </div>
        ) : (
          <Link className="option" to="/signin">
            SignIn
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
