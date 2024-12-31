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
    return <div>Your cart is empty.</div>;
  }

  return (
    <fieldset id="finalset">
      <legend>Order Summary</legend>
      <div>
        {cartData.map((item, index) => (
          <div key={index}>
            <img src={item.image} alt={item.name} />
            <div>{item.name}</div>
            <div>Rs. {item.price}</div>
            <div>Quantity: {item.quantity}</div>
          </div>
        ))}
      </div>
      <div className="stock">
        <div>Total Rs. </div>
        <div>{totalAmount}</div>
      </div>
      <button onClick={handlePlaceOrder} id="PlaceOrder">Place Order</button>
      <button onClick={() => window.location.href = '/shop'} id="Exit">Exit</button>
    </fieldset>
  );
};

export default OrderSummary;
