import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./App.css";

import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import Registration from "./pages/registration/registration";
import CheckoutPage from "./pages/checkout/checkout";

import Header from "./components/header/header";

import { selectCurrentUser } from "./redux/user/user.selectors";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    // this.unsubscribeFromAuth = auth.onAuthStateChanged(
    //   async userAuth => {
    //     if (userAuth) {
    //       const userRef = await createUserProfileDocument(userAuth);
    //       userRef.onSnapshot(snapShot => {
    //         setCurrentUser({
    //           id: snapShot.id,
    //           ...snapShot.data()
    //         });
    //       });
    //     }
    //     setCurrentUser(userAuth);
    //   }
    // );
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <Registration />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(App);
