import React, { useState, useEffect } from 'react';
import "../style/Skill.css";

const WelcomeSection = ({ onStart }) => {
  const [accessible, setAccessible] = useState(0);

  useEffect(() => {
    const userEmail = localStorage.getItem("EmailId");

    if (userEmail) {
      fetch(`http://localhost:8080/api/users/accessibility/${userEmail}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.accessible !== undefined) {
            setAccessible(data.accessible);
          }
        })
        .catch((error) => console.error("Error fetching accessibility:", error));
    }
  }, []);

  const handleStartAssessment = () => {
    if (accessible > 0) {
      localStorage.removeItem("question");
      localStorage.removeItem("answers");
      const userEmail = localStorage.getItem("EmailId");
      const updatedAccessible = accessible - 1;

      fetch("http://localhost:8080/api/users/accessibility", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: userEmail, accessible: updatedAccessible }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.message === "Accessibility updated successfully") {
            setAccessible(updatedAccessible);
            onStart(); // Proceed with assessment
          }
        })
        .catch((error) => console.error("Error updating accessibility:", error));
    }
  };

  return (
    <div className="welcome-section">
      <div className="welcome-content">
        <h1>Welcome to the Skill Assessment!</h1>
        <img
          src={require('../Images/skill.jpg')}
          alt="Career"
          className="intro-image"
        />
        <p>
          Discover your strengths, identify areas for improvement, and unlock your career potential.
          This skill assessment will help you understand your proficiency in various areas and provide
          personalized recommendations to guide your career journey.
        </p>
        <p>
          Take the first step towards a brighter future. Click the button below to begin!
        </p>
        <p><strong>Available Attempts: {accessible}</strong></p>
        <button onClick={handleStartAssessment} disabled={accessible <= 0}>
          {accessible > 0 ? "Start Assessment" : "No Attempts Left"}
        </button>
      </div>
    </div>
  );
};

export default WelcomeSection;