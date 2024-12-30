// src/components/Product.js
import React from "react";
import "../style/Product.css";

const Product = ({ product, addToCart }) => {
  return (
    <div className="item">
      <img className="itemImg" src={product.image} alt={product.name} />
      <h3 className="itemName">{product.name}</h3>
      <p>{product.description}</p>
      <h5 className="itemPrice">${product.price.toFixed(2)}</h5>
      <button className="addcart" onClick={() => addToCart(product)}>
        Add to cart
      </button>
    </div>
  );
};

export default Product;
