// src/components/ProductList.js
import React from "react";
import Product from "./Product";
//import "./ProductList.css";

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="shop-page-stock">
      {products.map((product, index) => (
        <Product key={index} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;
