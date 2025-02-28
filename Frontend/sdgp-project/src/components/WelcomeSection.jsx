import React from 'react';
import "../style/Skill.css";

const WelcomeSection = ({ onStart }) => {
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
        <button onClick={onStart}>Start Assessment</button>
      </div>
    </div>
  );
};

export default WelcomeSection;