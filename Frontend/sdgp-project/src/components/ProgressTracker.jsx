import React from 'react';
import "../style/Skill.css";

const ProgressTracker = ({ current, total }) => {
  const progress = (current / total) * 100;

  return (
    <div className="progress-tracker">
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      <p>{current}/{total} questions completed</p>
    </div>
  );
};

export default ProgressTracker;