import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "../style/Feedback.css";

const Feedback = () => {
  const [formData, setFormData] = useState({
    feedbackType: "",
    name: "",
    email: "",
    comment: "",
    rating: 0,
  });
  const [allfeedbacks, setAllFeedBacks] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRatingChange = (rating) => {
    setFormData({ ...formData, rating });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newfeedback = [...allfeedbacks, formData];
    setAllFeedBacks(newfeedback);
    alert("Feedback submitted successfully!");
    setFormData({
      feedbackType: "",
      name: "",
      email: "",
      comment: "",
      rating: 0,
    });
  };

  const groupFeedBackByType = () => {
    const groupFeedBack = {};
    allfeedbacks.forEach((feedback) => {
      const type = feedback.feedbackType;

      if (!groupFeedBack[type]) {
        groupFeedBack[type] = { totalRating: 0, count: 0 };
      }
      groupFeedBack[type].totalRating += +feedback.rating;
      groupFeedBack[type].count += 1;
    });
    return groupFeedBack;
  };

  const groupedFeedback = groupFeedBackByType();

  return (
    <div className="FeedbackForm">
    <div className="container mx-auto bg-white shadow-lg mt-5 flex items-center flex-col gap-10 justify-center">
      <form onSubmit={handleSubmit} className="flex w-full max-w-lg items-center justify-center flex-col">
        <h1 className="text-4xl font-bold capitalize">Feedback Form</h1>
        <select
          value={formData.feedbackType}
          onChange={handleChange}
          name="feedbackType"
          className="w-full bg-gray-200 mt-5 mb-4 px-4 py-2 rounded-md border border-gray-400"
        >
          <option value="">Select Feedback Type</option>
          <option value="Customer Support">Customer Support</option>
          <option value="Product Quality">Product Quality</option>
        </select>
        <input
          value={formData.name}
          onChange={handleChange}
          type="text"
          name="name"
          className="w-full mt-5 mb-4 bg-gray-200 px-4 py-2 rounded-md border border-gray-400"
          placeholder="Enter your name"
        />
        <input
          value={formData.email}
          onChange={handleChange}
          type="email"
          name="email"
          className="w-full mt-5 mb-4 bg-gray-200 px-4 py-2 rounded-md border border-gray-400"
          placeholder="Enter your email"
        />
        <textarea
          value={formData.comment}
          onChange={handleChange}
          name="comment"
          rows={4}
          className="w-full mt-5 mb-4 bg-gray-200 px-4 py-2 rounded-md border border-gray-400"
          placeholder="Drop your valuable feedback..."
        ></textarea>

        {/* Star Rating with Label on the Left */}
        <div className="rating-container">
          <span className="rating-label">Rating:</span>
          <div className="stars">
            {[...Array(5)].map((star, index) => {
              const ratingValue = index + 1;
              return (
                <FaStar
                  key={index}
                  size={30}
                  color={ratingValue <= formData.rating ? "#ffc107" : "#e4e5e9"}
                  className="cursor-pointer"
                  onClick={() => handleRatingChange(ratingValue)}
                />
              );
            })}
          </div>
        </div>

        <button className="px-6 mt-4 w-full py-2 bg-blue-600 hover:bg-indigo-600 rounded border-none outline-none text-white">
          Submit
        </button>
      </form>

      <div className="w-full lg:w-[70%] bg-indigo-600 p-10 rounded-md shadow-md">
        <h1 className="text-4xl text-white text-center mb-4">
          Total feedbacks: {allfeedbacks.length}
        </h1>
        <div className="w-full bg-white p-5 rounded-md shadow-md mb-5">
          <div className="flex flex-wrap justify-between">
            {Object.keys(groupedFeedback).length > 0
              ? Object.keys(groupedFeedback).map((type) => {
                  return (
                    <div key={type} className="card p-4 bg-gray-100 mb-4 w-[45%]">
                      <h3 className="font-bold text-xl">{type}</h3>
                      <h4>
                        Average Rating: {(
                          groupedFeedback[type].totalRating /
                          groupedFeedback[type].count
                        ).toFixed(1)}
                      </h4>
                      <h4>
                        Total feedback: <span>{groupedFeedback[type].count}</span>
                      </h4>
                    </div>
                  );
                })
              : ""}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Feedback;
