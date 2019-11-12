import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";

import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { signOutStart } from "../../redux/user/user.actions";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./header.scss";

const Header = ({ currentUser, hidden, signOutStart }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <ul className="options">
      <li>
        <Link className="option" to="/shop">
          SHOP
        </Link>
      </li>
      <li>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
      </li>
      {currentUser ? (
        <div className="option" onClick={signOutStart}>
          SIGN OUT
        </div>
      ) : (
        <li>
          {" "}
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        </li>
      )}
      <CartIcon />
    </ul>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  //autopass state in the function down
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
