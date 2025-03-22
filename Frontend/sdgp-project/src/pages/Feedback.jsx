import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import Lottie from "lottie-react";
import animationData from "../Images/characterAnimation.json"; // Replace with your Lottie JSON file
import "../style/Feedback.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Feedback = () => {
  const [formData, setFormData] = useState({
    feedbackType: "",
    name: "",
    email: "",
    comment: "",
    rating: 0,
  });

  const [allFeedbacks, setAllFeedbacks] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRatingChange = (rating) => {
    setFormData({ ...formData, rating });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAllFeedbacks([...allFeedbacks, formData]);
    alert("Feedback submitted successfully!");
    setFormData({
      feedbackType: "",
      name: "",
      email: "",
      comment: "",
      rating: 0,
    });
  };

  return (
    <div>
      <Header />
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Feedback Form</h1>

        {/* Animation and Text Row */}
        <div className="animation-wrapper">
          <div className="animation-container">
            <Lottie animationData={animationData} loop={true} />
          </div>
          <span className="floating-text">We value your feedback!</span>
        </div>

        {/* Form Fields */}
        <select
          className="select-field"
          value={formData.feedbackType}
          onChange={handleChange}
          name="feedbackType"
          required
        >
          <option value="">Select Feedback Type</option>
          <option value="Customer Support">Customer Support</option>
          <option value="Product Quality">Product Quality</option>
        </select>

        <input
          className="input-field"
          value={formData.name}
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Enter your name"
          required
        />

        <input
        className="input-field"
          value={formData.email}
          onChange={handleChange}
          type="email"
          name="email"
          placeholder="Enter your email"
          required
        />

        <textarea
          value={formData.comment}
          onChange={handleChange}
          name="comment"
          rows={4}
          placeholder="Drop your valuable feedback..."
          required
        ></textarea>

        {/* Star Rating */}
        <div className="rating-container">
          <span className="rating-label">Rating:</span>
          <div className="stars">
            {[...Array(5)].map((_, index) => {
              const ratingValue = index + 1;
              return (
                <FaStar
                  key={index}
                  size={30}
                  color={ratingValue <= formData.rating ? "#F5A623" : "#CBD5E0"}
                  className="star-label"
                  onClick={() => handleRatingChange(ratingValue)}
                />
              );
            })}
          </div>
        </div>

        <button  className="feedback-button" type="submit">Submit Feedback</button>
      </form>
    </div>
    <Footer/>
    </div>
  );
};

export default Feedback;