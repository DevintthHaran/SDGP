import React from "react";
import "../style/Meeting.css";
import { useNavigate } from "react-router-dom";

import IT from "../Images/IT.png";
import Science from "../Images/Science.png";
import Business from "../Images/Business.png";
import OLevel from "../Images/O Level.png";
import ALevel from "../Images/A Level.png";
import Header from "../components/Header";
import Footer from "../components/Footer";

const categories = [
  {
    title: "IT",
    image: IT,
    link: "/it-meeting",
  },
  {
    title: "Science",
    image: Science,
    link: "/science-meeting",
  },
  {
    title: "Business",
    image: Business,
    link: "/business-meeting",
  },
  {
    title: "O Level",
    image: OLevel,
    link: "/olevel-meeting",
  },
  {
    title: "A Level",
    image: ALevel,
    link: "/alevel-meeting",
  },
];

const Meeting = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
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
      <Footer/>
    </div>
  );
};

export default Meeting;