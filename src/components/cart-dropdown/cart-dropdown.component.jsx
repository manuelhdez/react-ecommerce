import React from "react";
import { connect } from "react-redux";

import CustomButton from "./../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItemsLocal }) => {
  console.log({ cartItemsLocal });
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItemsLocal.length > 0 ? (
          cartItemsLocal.map(item => <CartItem key={item.id} item={item} />)
        ) : (
          <span>No hay elementos en su carrito</span>
        )}
      </div>
      <CustomButton>CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = ({ cart }) => {
  return {
    cartItemsLocal: cart.cartItems
  };
};

export default connect(mapStateToProps)(CartDropdown);
