import React from 'react';
import '../style/Career.css';

const Results = ({ restartAssessment, answers }) => {
  const careerMatches = {
    "Technology and Innovation": ["Software Engineer", "Data Scientist", "AI Specialist"],
    "Arts and Creativity": ["Graphic Designer", "Writer", "Musician"],
    "Helping Others": ["Teacher", "Nurse", "Social Worker"],
    "Business and Finance": ["Financial Analyst", "Entrepreneur", "Marketing Manager"],
  };

  const getCareerMatches = () => {
    const matches = [];
    answers.forEach((answer) => {
      if (careerMatches[answer]) {
        matches.push(...careerMatches[answer]);
      }
    });
    return [...new Set(matches)]; // Remove duplicates
  };

  const userCareerMatches = getCareerMatches();

  return (
    <div className="careerassessment">
    <div className="results">
      <h2>Your Career Matches:</h2>
      {userCareerMatches.length > 0 ? (
        <ul>
          {userCareerMatches.map((career, index) => (
            <li key={index}>{career}</li>
          ))}
        </ul>
      ) : (
        <p>No specific career matches found. Try exploring different fields!</p>
      )}
      <button onClick={restartAssessment}>Restart Assessment</button>
      <button onClick={() => window.location.href = "/report"}>Career Report </button>
    </div>
    </div>
  );
};

export default Results;