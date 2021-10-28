import React from "react";
import "./customBtn-style.scss";

function CustomBtn({ children, inverted, isGoogleSignIn, ...otherProps }) {
  return (
    <button
      className={`${inverted ? "inverted" : ""} ${
        isGoogleSignIn ? "google-sign-in" : ""
      } custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default CustomBtn;
