// src/components/Navbar.js
import React from "react";
import "../style/ShopNavbar.css";
import 'boxicons/css/boxicons.min.css';

const ShopNavbar = ({ toggleCart }) => {
  return (
    <div className="shopNarBar">
    <header>
      <div className="nav container">
        <span></span>
        <i className="bx bxs-cart" id="cart-icon" onClick={toggleCart}></i>
      </div>
    </header>
    </div>
  );
};

export default ShopNavbar;
