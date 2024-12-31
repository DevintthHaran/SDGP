import React from "react";
import "../style/Meeting.css";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    title: "IT",
    image: "path-to-it-image.jpg",
    link: "/it-meeting",
  },
  {
    title: "Science",
    image: "path-to-science-image.jpg",
    link: "/science-meeting",
  },
  {
    title: "Business",
    image: "path-to-business-image.jpg",
    link: "/business-meeting",
  },
  {
    title: "O Level",
    image: "path-to-olevel-image.jpg",
    link: "/olevel-meeting",
  },
  {
    title: "A Level",
    image: "path-to-alevel-image.jpg",
    link: "/alevel-meeting",
  },
];

const Meeting = () => {
  const navigate = useNavigate();

  return (
    <div className="category-container">
      {categories.map((category, index) => (
        <div className="category-box" key={index}>
          <h3 className="category-title">{category.title}</h3>
          <img src={category.image} alt={category.title} className="category-image" />
          <button
            className="schedule-button"
            onClick={() => navigate(category.link)}
          >
            Schedule Meeting
          </button>
        </div>
      ))}
    </div>
  );
};

export default Meeting;