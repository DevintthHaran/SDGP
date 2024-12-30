// src/components/Cart.js
import React from "react";
import "../style/Cart.css";

const Cart = ({ cartItems, removeFromCart, updateQuantity, cartOpen, toggleCart, buyNow }) => {
  const calculateTotal = () =>
    cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className={`cart ${cartOpen ? "active" : ""}`}> {/* Updated to use cartOpen */}
      <h2 className="cart-title">Your Cart</h2>
      <div className="cart-content">
        {cartItems.length ? (
          cartItems.map((item, index) => (
            <div className="cart-box" key={index}>
              <img src={item.image} alt={item.name} className="cart-img" />
              <div className="detail-box">
                <div className="cart-product-title">{item.name}</div>
                <div className="cart-price">${item.price.toFixed(2)}</div>
                <input
                  type="number"
                  value={item.quantity}
                  className="cart-quantity"
                  min="1"
                  onChange={(e) => updateQuantity(index, parseInt(e.target.value))}
                />
              </div>
              <i className="bx bxs-trash-alt cart-remove" onClick={() => removeFromCart(index)}></i>
            </div>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
      <div className="total">
        <div className="total-display">Total</div>
        <div className="total-price">${calculateTotal().toFixed(2)}</div>
      </div>
      <button type="button" className="buy-now" onClick={buyNow}>
        Buy Now
      </button>
      <i className="bx bx-exit" id="exit-cart" onClick={toggleCart}></i> {/* No change */}
    </div>
  );
};

export default Cart;
