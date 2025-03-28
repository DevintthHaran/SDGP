/* global payhere */
import React, { useState, useEffect } from "react";
import md5 from "crypto-js/md5";
import "../style/Subscription.css"; 
import Header from "../components/Header";
import Footer from "../components/Footer";

const Subscription = () => {
  const plans = [
    {
      name: "Silver Plan",
      price: 3000,
      recurrence: "1 Month",
      id: "silver",
      featureA: "+3 skill assessment",
      featureB: "Free career assessment",
      featureC: "Free job assessment",
      accessibility: 3,
    },
    {
      name: "Gold Plan",
      price: 4000,
      recurrence: "1 Month",
      id: "gold",
      featureA: "+4 skill assessment",
      featureB: "Free career assessment",
      featureC: "Free job assessment",
      accessibility: 4,
    },
    {
      name: "Platinum Plan",
      price: 5000,
      recurrence: "1 Month",
      id: "platinum",
      featureA: "+5 skill assessment",
      featureB: "Free career assessment",
      featureC: "Free job assessment",
      accessibility: 5,
    },
  ];

  const [activeSubscriptions, setActiveSubscriptions] = useState([]);
  const [accessible, setAccessible] = useState(0); // Default accessibility value

  // Check subscription state on component mount
  useEffect(() => {
    const storedSubscriptions = JSON.parse(localStorage.getItem("activeSubscriptions")) || [];
    const now = new Date();
    const validSubscriptions = storedSubscriptions.filter((sub) => new Date(sub.expirationDate) > now);
    setActiveSubscriptions(validSubscriptions);

    // Restore accessible value
    const storedAccessible = parseInt(localStorage.getItem("accessible"), 10) || 0;
    setAccessible(storedAccessible);

    const userEmail = localStorage.getItem("EmailId");
  if (userEmail) {
    fetch(`http://localhost:8080/api/users/accessibility/${userEmail}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.accessible !== undefined) {
          setAccessible(data.accessible);
        }
      })
      .catch((error) => console.error("Error fetching accessibility:", error));}

    // Clean up expired subscriptions
    const updatedSubscriptions = storedSubscriptions.filter(
      (sub) => new Date(sub.expirationDate) > now
    );
    localStorage.setItem("activeSubscriptions", JSON.stringify(updatedSubscriptions));
  }, []);

  const initiateSubscription = (plan) => {
    const merchantId = "1229176";
    const subscriptionId = `Sub${plan.id}${Date.now()}`; // Unique ID for the subscription
    const currency = "LKR";
    const amount = plan.price;

    const merchantSecret = "Mzc0OTk2OTcxMTE2OTk1MDg0MTkyNjMzMTA2NDk3NDAzNjg4MDY2";
    const formattedAmount = amount.toFixed(2);
    const hash = md5(
      merchantId +
        subscriptionId +
        formattedAmount +
        currency +
        md5(merchantSecret).toString().toUpperCase()
    )
      .toString()
      .toUpperCase();

    const subscription = {
      sandbox: true,
      merchant_id: merchantId,
      return_url: "http://localhost:3000/subscription-success",
      cancel_url: "http://localhost:3000/subscription-cancel",
      notify_url: "http://localhost:8080/api/subscription-notify",
      order_id: subscriptionId,
      items: plan.name,
      amount: plan.price,
      currency: currency,
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      country: "",
      recurrence: plan.recurrence,
      duration: "1 Month",
      hash: hash,
    };

    payhere.onCompleted = (subscriptionId) => {
      console.log(`Subscription completed for ${plan.name}. Subscription ID:`, subscriptionId);
      alert(`${plan.name} subscription successful!`);

      // Set expiration date for 1 month from now
      const expirationDate = new Date();
      expirationDate.setMonth(expirationDate.getMonth() + 1);

      const newSubscription = {
        planId: plan.id,
        name: plan.name,
        expirationDate: expirationDate.toISOString(),
      };

      const updatedSubscriptions = [...activeSubscriptions, newSubscription];
      setActiveSubscriptions(updatedSubscriptions);
      localStorage.setItem("activeSubscriptions", JSON.stringify(updatedSubscriptions));

      // Increment accessible by the plan's accessibility value
      const updatedAccessible = accessible + plan.accessibility;
      setAccessible(updatedAccessible);
      localStorage.setItem("accessible", updatedAccessible.toString());

      const userEmail = localStorage.getItem("EmailId");
  if (userEmail) {
    fetch("http://localhost:8080/api/users/accessibility", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: userEmail, accessible: updatedAccessible }),
    })
    .then((response) => response.json())
    .then((data) => console.log("Accessibility updated:", data))
    .catch((error) => console.error("Error updating accessibility:", error));
  }
    };



    payhere.onDismissed = () => {
      console.log(`Subscription for ${plan.name} dismissed`);
      alert(`${plan.name} subscription canceled.`);
    };

    payhere.onError = (error) => {
      console.error(`Subscription error for ${plan.name}:`, error);
      alert(`${plan.name} subscription failed! Please try again.`);
    };

    payhere.startPayment(subscription);
  };

  const isSubscribed = (planId) => {
    return activeSubscriptions.some((sub) => sub.planId === planId);
  };

  return (
    <div>
      <Header/>
    <div className="subscription-page">
      <h1>Choose Your Plan</h1>
      <div className="plans-container">
        {plans.map((plan) => (
          <div key={plan.id} className="subscription-box">
            <h2>{plan.name}</h2>
            <p>Price: {plan.price} LKR / {plan.recurrence}</p>
            <ul>
              <li>{plan.featureA}</li>
              <li>{plan.featureB}</li>
              <li>{plan.featureC}</li>
            </ul>
            {isSubscribed(plan.id) ? (
              <p>Your subscription for {plan.name} is active. Thank you!</p>
            ) : (
              <button onClick={() => initiateSubscription(plan)}>Subscribe Now</button>
            )}
          </div>
        ))}
      </div>
      <div className="accessibility-status">
        <h2>Total Accessibility: {accessible}</h2>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Subscription;