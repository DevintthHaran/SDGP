// src/components/Navbar.js
import React from "react";
import "../style/ShopNavbar.css";
import 'boxicons/css/boxicons.min.css';
import '../style/Header.css';

const ShopNavbar = ({ toggleCart }) => {
  return (
    <header>
      <div className="nav container">
        <span>Shopping</span>
        <i className="bx bxs-cart" id="cart-icon" onClick={toggleCart}></i>
      </div>
    </header>
  );
};

export default ShopNavbar;
