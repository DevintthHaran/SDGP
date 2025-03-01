import React from 'react';
import '../style/Career.css';


const Intro = ({ startAssessment }) => {
  return (
    <div className="careerassessment">
    <div className="intro">
      <h2>Welcome to the Career Assessment!</h2>
      <p>
        Choosing the right career is one of the most important decisions in life. 
        This assessment will help you discover careers that match your interests, 
        skills, and personality.
      </p>
      <img
        src={require('../Images/career-image.jpg')}
        alt="Career"
        className="intro-image"
      />
      <p>
        Click the button below to start the assessment and find your ideal career path.
      </p>
      <button onClick={startAssessment}>Start Assessment</button>
    </div>
    </div>
  );
};

export default Intro;