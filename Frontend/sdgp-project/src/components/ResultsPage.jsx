import React from 'react';
import "../style/Skill.css";

const ResultsPage = ({ results }) => {
  return (
    <div className="results-page">
      <h1>Assessment Results</h1>
      <h2>Strengths:</h2>
      <ul>
        {results.strengths.map((strength, index) => (
          <li key={index}>{strength}</li>
        ))}
      </ul>
      <h2>Areas for Improvement:</h2>
      <ul>
        {results.weaknesses.map((weakness, index) => (
          <li key={index}>{weakness}</li>
        ))}
      </ul>
      <h2>Suggested Careers:</h2>
      <ul>
        {results.careers.map((career, index) => (
          <li key={index}>{career}</li>
        ))}
      </ul>
      <button onClick={() => window.location.reload()}>Restart Assessment</button>
    </div>
  );
};

export default ResultsPage;