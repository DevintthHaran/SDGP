/* global payhere */
import React, { useState, useEffect } from 'react';
import BillingAddress from '../components/BillingAddress';
import ContactDetails from '../components/ContactDetails';
import OrderSummary from '../components/OrderSummary';
import "../style/Order.css";
import md5 from 'crypto-js/md5';

const Order = () => {
  const [isBillingValid, setIsBillingValid] = useState(false);
  const [isContactValid, setIsContactValid] = useState(false);

  const [billingDetails, setBillingDetails] = useState({});
  const [contactDetails, setContactDetails] = useState({});
  const [cartData, setCartData] = useState([]);
  const [orderCount, setOrderCount] = useState(1);

  // Load order count from localStorage if it exists
  useEffect(() => {
    const storedCount = localStorage.getItem('orderCount');
    if (storedCount) {
      setOrderCount(Number(storedCount));
    }
  }, []);

  // Save order count to localStorage when it updates
  useEffect(() => {
    localStorage.setItem('orderCount', orderCount);
  }, [orderCount]);

  const handleFormSubmit = (formName) => {
    switch (formName) {
      case 'billing':
        setIsBillingValid(true);
        break;
      case 'contact':
        setIsContactValid(true);
        break;
      default:
        break;
    }
    alert(`${formName} submitted!`);
  };

  const handlePlaceOrder = () => {
    if (isBillingValid && isContactValid) {
      initiatePayment();
    } else {
      alert('Please complete all required fields before placing the order.');
    }
  };

  const initiatePayment = () => {
    const totalAmount = cartData.reduce((total, item) => total + item.price * item.quantity, 0);

    // Generate the hash (same as the server-side method)
    const merchantId = "1229176";  //Merchant ID
    const orderId = `Order${orderCount}`; // Use incrementing order ID
    const currency = "LKR";
    const amount = totalAmount;

    const merchantSecret = "Mzc0OTk2OTcxMTE2OTk1MDg0MTkyNjMzMTA2NDk3NDAzNjg4MDY2";  // My Merchant Secret
    const formattedAmount = amount.toFixed(2);
    const hash = md5(merchantId + orderId + formattedAmount + currency + md5(merchantSecret).toString().toUpperCase()).toString().toUpperCase();

    // Create the payment object
    const payment = {
      sandbox: true,
      merchant_id: merchantId,
      return_url: "http://localhost:3000/shop", 
      cancel_url: "http://localhost:3000/order",
      notify_url: "http://localhost:8080/api/notify",
      order_id: orderId,
      items: cartData
        .map(item => `${item.name} (Qty: ${item.quantity})`)
        .join(', '), // Format with quantity for each item
      amount: totalAmount, // Dynamic total amount
      currency: currency,
      first_name: contactDetails.firstname,
      last_name: contactDetails.surname,
      email: contactDetails.email,
      phone: contactDetails.phone,
      address: billingDetails.address1,
      city: billingDetails.city,
      country: billingDetails.country,
      hash: hash // Add the generated hash to the payment data
    };

    payhere.onCompleted = (orderId) => {
      console.log("Payment completed. Order ID:", orderId);
      //alert("Payment successful!");
      setOrderCount(prev => prev + 1); // Increment order count after successful payment
      // Redirect to the shop page
      window.location.href = "/shop";
    };

    payhere.onDismissed = () => {
      console.log("Payment dismissed");
      alert("Payment canceled.");
    };

    payhere.onError = (error) => {
      console.error("Payment error:", error);
      alert("Payment failed! Please try again.");
    };

    // Start the payment
    payhere.startPayment(payment);
  };

  return (
    <div className="Order">
      <BillingAddress handleFormSubmit={handleFormSubmit} setBillingDetails={setBillingDetails} />
      <ContactDetails handleFormSubmit={handleFormSubmit} setContactDetails={setContactDetails} />
      <OrderSummary handlePlaceOrder={handlePlaceOrder} setCartData={setCartData} />
    </div>
  );
};

export default Order;
