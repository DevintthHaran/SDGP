import React from 'react';
import "../style/Skill.css";

const ResultsPage = ({ results }) => {
  return (
    <div className="results-page">
      <h2>Finally...!!! Click here to Generate Report</h2>
      <button onClick={() => window.location.href = "/report"}>Generate Career Report</button>
    </div>
  );
};

export default ResultsPage;