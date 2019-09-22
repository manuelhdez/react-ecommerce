import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { auth } from "./../../firebase/firebase.utils";

import { ReactComponent as Logo } from "./../../assets/crown.svg";

import "./header.styles.scss";

const HeaderComponent = ({ currentUser }) => {
  //console.log(currentUser);

  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(HeaderComponent);
