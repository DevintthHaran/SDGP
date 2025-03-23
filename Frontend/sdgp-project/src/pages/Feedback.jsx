import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import Lottie from "lottie-react";
import animationData from "../Images/characterAnimation.json";
import  submitFeedback  from "../services/api"; 
import Header from "../components/Header";
import Footer from "../components/Footer";

import "../style/Feedback.css";

const Feedback = () => {
  const [formData, setFormData] = useState({
    feedbackType: "",
    name: "",
    email: "",
    message: "",
    rating: 0,
  });

  const [allFeedbacks, setAllFeedbacks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRatingChange = (rating) => {
    setFormData({ ...formData, rating });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      // Call API and handle response
      const response = await submitFeedback(formData);
      console.log('Server response:', response); // For debugging

      // Update UI on success
      setAllFeedbacks([...allFeedbacks, formData]);
      setError({ type: 'success', message: 'Feedback submitted successfully!' });
      
      // Reset form
      setFormData({
        feedbackType: "",
        name: "",
        email: "",
        message: "",
        rating: 0,
      });

    } catch (error) {
      console.error('Submission error:', error);
      setError({ 
        type: 'error', 
        message: error.message || "Failed to submit feedback. Please try again later."
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Header />
      <div className="feedback">
      <div className="container">
        <form className="feedback-form"onSubmit={handleSubmit}>
          <h1>Feedback Form</h1>

          {error && (
            <div className={`message ${error.type}`}>
              <p>{error.message}</p>
            </div>
          )}

          <div className="animation-wrapper">
            <div className="animation-container">
              <Lottie animationData={animationData} loop={true} />
            </div>
            <span className="floating-text">We value your feedback!</span>
          </div>

          <select
            value={formData.feedbackType}
            onChange={handleChange}
            name="feedbackType"
            required
            disabled={isLoading}
          >
            <option value="">Select Feedback Type</option>
            <option value="Customer Support">Customer Support</option>
            <option value="Product Quality">Product Quality</option>
          </select>

          <input className="feedback-input"
            value={formData.name}
            onChange={handleChange}
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            disabled={isLoading}
          />

          <input className="feedback-input"
            value={formData.email}
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            disabled={isLoading}
          />

          <textarea
            value={formData.message}
            onChange={handleChange}
            name="message"
            rows={4}
            placeholder="Drop your valuable feedback..."
            required
            disabled={isLoading}
          ></textarea>

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
                    onClick={() => !isLoading && handleRatingChange(ratingValue)}
                    style={{ cursor: isLoading ? 'not-allowed' : 'pointer' }}
                  />
                );
              })}
            </div>
          </div>

          <button type="submit" className="feedback-btn" disabled={isLoading}>
            {isLoading ? "Submitting..." : "Submit Feedback"}
          </button>
        </form>
      </div>
      <Footer />
    </div>
    </div>
  );
};

export default Feedback;