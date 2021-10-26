import React from "react";
import "./signIn-style.scss";
import FormInput from "../Form-input/FormInput";
import CustomBtn from "../Custom-Btn/CustomBtn";
import { signInWithGoogle } from "../../Firebase/firebaseUtils";

class SignIn extends React.Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit(e) {
    e.preventDefault();

    // this.setState({ email: "", password: "" });
  }

  render() {
    return (
      <div className="signin">
        <h2>I have already an account </h2>
        <span className="title">sign in with your email and password </span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            inputChange={this.handleChange}
            value={this.state.email}
            label="email"
            required
          />

          <FormInput
            type="password"
            name="password"
            inputChange={this.handleChange}
            value={this.state.password}
            label="password"
            required

            // onChange={(e) => this.setState({ password: e.target.value })}
          />
          <div className="buttons">
            <CustomBtn type="submit">Sign in</CustomBtn>
            <CustomBtn onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with google
            </CustomBtn>
            {/* <button>Submit </button> */}
          </div>
        </form>
      </div>
    );
  }
}
export default SignIn;
