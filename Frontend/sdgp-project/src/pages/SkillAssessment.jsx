import React, { useState } from 'react';

import WelcomeSection from '../components/WelcomeSection';
import SkillCategories from '../components/SkillCategories';
import AssessmentQuestions from '../components/AssessmentQuestions';
import ResultsPage from '../components/ResultsPage';
import '../style/Skill.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SkillAssessment = () => {
  const [step, setStep] = useState(0);
  const [categories, setCategories] = useState([]);
  const [results, setResults] = useState(null);

  const handleStart = () => setStep(1);
  const handleCategorySelect = (selectedCategories) => {
    setCategories(selectedCategories);
    setStep(2);
  };
  const handleComplete = (answers) => {
    // Mock results for demonstration
    setResults({
      strengths: ['Communication', 'Problem Solving'],
      weaknesses: ['Data Analysis'],
      careers: ['Data Analyst', 'Project Manager'],
    });
    setStep(2);
  };

  return (
    <div>
      <Header />
      <div className="SkillAssessment">

        {step === 0 && <WelcomeSection onStart={handleStart} />}
        {step === 1 && <AssessmentQuestions categories={categories} onComplete={handleComplete} />}
        {step === 2 && <ResultsPage results={results} />}

      </div>
      <Footer />
    </div>
  );
};

export default SkillAssessment;