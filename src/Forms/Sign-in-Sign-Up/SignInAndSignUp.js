import React from "react";
import SignIn from "../Sign-in/SignIn";
import SignUp from "../Sign-up/SignUp";
import "./SignIn-SignUp.style.scss";

function SignInAndSignUp() {
  return (
    <div className="sign-in-sign-up">
      {/* hi there SignInAndSignUp */}
      <SignIn />
      <SignUp />
    </div>
  );
}

export default SignInAndSignUp;
