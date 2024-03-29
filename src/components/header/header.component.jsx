import React from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { auth } from "./../../firebase/firebase.utils";

import { ReactComponent as Logo } from "./../../assets/crown.svg";

//import "./header.styles.scss";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from "./header.styles";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "./../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "./../../redux/cart/cart.selector";
import { selectCurrentUser } from "./../../redux/user/user.selectors";

const HeaderComponent = ({ currentUser, hidden }) => {
  //console.log(currentUser);

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/contact">CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(HeaderComponent);
