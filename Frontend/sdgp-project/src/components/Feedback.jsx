import React, { useState } from "react";

const Feedback = () => {
  const [formData, setFormData] = useState({
    feedbackType: "",
    name: "",
    email: "",
    comment: "",
    rating: "",
  });
  const [allfeedbacks, setAllFeedBacks] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
      rating: "",
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
    <div className="container mx-auto bg-white shadow-lg mt-5 flex items-center flex-col gap-10 justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-lg items-center justify-center flex-col"
      >
        <h1 className="text-4xl font-bold capitalize">Feedback form</h1>
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
        <select
          value={formData.rating}
          name="rating"
          onChange={handleChange}
          className="w-full bg-gray-200 mt-5 mb-4 px-4 py-2 rounded-md border border-gray-400"
        >
          <option value="">Choose Rating</option>
          <option value="1">1. Poor ⭐</option>
          <option value="2">2. Fair ⭐⭐</option>
          <option value="3">3. Good⭐⭐⭐</option>
          <option value="4">4. Very Good ⭐⭐⭐⭐</option>
          <option value="5">5. Excellent ⭐⭐⭐⭐⭐</option>
        </select>
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
                    <div
                      key={type}
                      className="card p-4 bg-gray-100 mb-4 w-[45%]"
                    >
                      <h3 className="font-bold text-xl">{type}</h3>
                      <h4>
                        Average Rating:{" "}
                        {(
                          groupedFeedback[type].totalRating /
                          groupedFeedback[type].count
                        ).toFixed(1)}
                      </h4>
                      <h4>
                        Total feedback:{" "}
                        <span>{groupedFeedback[type].count}</span>
                      </h4>
                    </div>
                  );
                })
              : ""}
          </div>
        </div>
        <div className="w-full bg-white p-5 rounded-md shadow-md">
          {allfeedbacks.map((feedback, index) => {
            return (
              <div
                key={index}
                className="flex p-4 rounded-md bg-gray-100 shadow-md flex-col items-start justify-between mb-5"
              >
                <h2>
                  <span className="font-bold">Feedback Type: </span>
                  {feedback.feedbackType}
                </h2>
                <h2>
                  <span className="font-bold">Name: </span>
                  {feedback.name}
                </h2>
                <h2>
                  <span className="font-bold">Email: </span>
                  {feedback.email}
                </h2>
                <h2>
                  <span className="font-bold">Comment: </span>
                  {feedback.comment}
                </h2>
                <p>
                  <span className="font-bold">Rating: </span>
                  {feedback.rating}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Feedback;
