import React from "react";
import { connect } from "react-redux";

import { toggleCartHidden } from "./../../redux/cart/cart.actions";
import { selectCartItemsCount } from "./../../redux/cart/cart.selector";

import { ReactComponent as ShoppingIcon } from "./../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";

const CartIcon = ({ itemCount, toggleCartHiddenLocal }) => {
  console.log(itemCount);
  return (
    <div className="cart-icon" onClick={toggleCartHiddenLocal}>
      <ShoppingIcon />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapStateToProps = state => {
  console.log("llamado");
  return {
    itemCount: selectCartItemsCount(state)
  };
};

const mapDispatchToProps = dispatch => ({
  toggleCartHiddenLocal: () => dispatch(toggleCartHidden())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
