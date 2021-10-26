import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import { auth, createUserProfileDoc } from "./Firebase/firebaseUtils";
import SignInAndSignUp from "./Forms/Sign-in-Sign-Up/SignInAndSignUp";
import Header from "./header/Header";
import Hompage from "./pages/Hompage/Hompage";
import ShopPage from "./pages/Shop/ShopPage";

class App extends React.Component {
  state = {
    currentUser: null,
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDoc(userAuth);

        userRef.onSnapshot((snapshot) => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
          console.log("currentUSer", this.state);
        });
      }
      this.setState({ currentUser: userAuth });
      console.log("user", userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Header currentUser={this.state.currentUser} />
          <div>
            <Route path="/" exact component={Hompage} />
            <Route path="/shop" exact component={ShopPage} />
            <Route path="/signin" exact component={SignInAndSignUp} />
          </div>
        </BrowserRouter>
        {/* <Hompage /> */}
      </div>
    );
  }
}

export default App;
