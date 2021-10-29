import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import "./App.css";
import { auth, createUserProfileDoc } from "./Firebase/firebaseUtils";
import SignInAndSignUp from "./Forms/Sign-in-Sign-Up/SignInAndSignUp";
import Header from "./header/Header";
import Hompage from "./pages/Hompage/Hompage";
import ShopPage from "./pages/Shop/ShopPage";
import { signIn } from "./actions/actions";
import { selectCurrentUser } from "./actions/selectors/user-selector";

import CheckoutPage from "./pages/check-out-page/CheckoutPage";

class App extends React.Component {
  // state = {
  //   currentUser: null,
  // };

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { signIn } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDoc(userAuth);

        userRef.onSnapshot((snapshot) => {
          signIn({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      }
      signIn(userAuth);
      // console.log("curr", userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    // console.log("curr", this.props.currentUser);
    return (
      <div className="app">
        <BrowserRouter>
          <Header currentUser={this.props.currentUser} />
          <div>
            <Route path="/" exact component={Hompage} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/checkout" exact component={CheckoutPage} />
            <Route
              path="/signin"
              exact
              render={() =>
                this.props.currentUser ? (
                  <Redirect to="/" />
                ) : (
                  <SignInAndSignUp />
                )
              }
            />
          </div>
        </BrowserRouter>
        {/* <Hompage /> */}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  // i used memoize stuff so still works fine
  // still not used createStructuredSelector({})
  // return { currentUser: state.auth.currentUser };
  return { currentUser: selectCurrentUser(state) };
};

// const mapDispatchToProps = (dispatch) => ({
//   currentUser: (user) => dispatch(setCurrentUser(user)),
// });

export default connect(mapStateToProps, { signIn })(App);
