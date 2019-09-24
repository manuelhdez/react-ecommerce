import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CustomButton from "./../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

import { selectCartItems } from "./../../redux/cart/cart.selector";

import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItemsLocal }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItemsLocal.length > 0 ? (
          cartItemsLocal.map(item => <CartItem key={item.id} item={item} />)
        ) : (
          <span>No hay elementos en su carrito</span>
        )}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItemsLocal: selectCartItems
});

export default connect(mapStateToProps)(CartDropdown);
