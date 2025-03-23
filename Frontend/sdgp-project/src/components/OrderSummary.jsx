import React, { useEffect, useState } from 'react';

const OrderSummary = ({ handlePlaceOrder, setCartData }) => {
  const [cartData, setLocalCartData] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (storedCartItems) {
      setLocalCartData(storedCartItems);
      setCartData(storedCartItems); // Pass cart data to parent
    }
  }, [setCartData]);

  const totalAmount = cartData.reduce((total, item) => total + item.price * item.quantity, 0);

  if (!cartData || cartData.length === 0) {
    return <div className="order">Your cart is empty.</div>;
  }

  return (
    <div className="order-container">
      <fieldset id="finalset">
        <legend className='order-legend'>Order Summary</legend>
        <div>
          {cartData.map((item, index) => (
            <div key={index} className="order-item">
              <img src={item.image} alt={item.name} className="order-item-image" />
              <div className="order-item-name">{item.name}</div>
              <div className="order-item-price">Rs. {item.price}</div>
              <div className="order-item-quantity">Quantity: {item.quantity}</div>
            </div>
          ))}
        </div>
        <div className="stock">
          <div>Total Rs. {totalAmount}</div>
        </div>
        <button className='submit' onClick={handlePlaceOrder} id="PlaceOrder">Place Order</button>
        <button className="reset" onClick={() => window.location.href = '/shop'} id="Exit">Exit</button>
      </fieldset>
    </div>
  );
};

export default OrderSummary;
