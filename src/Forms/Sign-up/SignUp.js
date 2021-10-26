import React from "react";
import { auth, createUserProfileDoc } from "../../Firebase/firebaseUtils";
import CustomBtn from "../Custom-Btn/CustomBtn";
import FormInput from "../Form-input/FormInput";
import "./signUp-style.scss";

class SignUp extends React.Component {
  state = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("password don't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDoc(user, { displayName });
      console.log("name ", displayName);
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (err) {
      console.log(err);
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <div className="sign-up">
        <h2 className="title">I do have not an account </h2>
        <span>Sign up with ur Email and password </span>

        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            label="name"
            value={displayName}
            inputChange={this.handleChange}
            required
          />
          <FormInput
            type="email"
            name="email"
            label="Email"
            inputChange={this.handleChange}
            value={email}
            required
          />
          <FormInput
            type="password"
            name="password"
            label="password"
            inputChange={this.handleChange}
            value={password}
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            label="confirm password"
            inputChange={this.handleChange}
            value={confirmPassword}
            required
          />

          <CustomBtn type="submit">Sign Up</CustomBtn>
        </form>
      </div>
    );
  }
}
export default SignUp;
