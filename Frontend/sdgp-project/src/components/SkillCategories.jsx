import React, { useState } from 'react';
import "../style/Skill.css";

const SkillCategories = ({ onNext }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((cat) => cat !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <div className="skill-categories">
      <h2>Select Skill Categories</h2>
      {['Technical Skills', 'Soft Skills', 'Industry-Specific Skills'].map((category) => (
        <label key={category}>
          <input
            type="checkbox"
            checked={selectedCategories.includes(category)}
            onChange={() => handleCategoryChange(category)}
          />
          {category}
        </label>
      ))}
      <button onClick={() => onNext(selectedCategories)}>Next</button>
    </div>
  );
};

export default SkillCategories;