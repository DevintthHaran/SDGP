import React, { useState } from "react";
import Product from "./Product";

const ProductList = ({ products, addToCart }) => {
  const [expandedProductId, setExpandedProductId] = useState(null); // Track expanded product

  const handleAccordionChange = (productId) => {
    setExpandedProductId((prevId) => (prevId === productId ? null : productId)); // Toggle logic
  };

  return (
    <div className="shop-page-stock">
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          addToCart={addToCart}
          expanded={expandedProductId === product.id} // Only expand the selected one
          handleAccordionChange={() => handleAccordionChange(product.id)}
        />
      ))}
    </div>
  );
};

export default ProductList;
