import React, { useState } from 'react';
import Intro from '../components/Intro';
import Assessment from '../components/Assessment';
import Results from '../components/Results';
import '../style/Career.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function CareerAssessment() {
  const [showIntro, setShowIntro] = useState(true);
  const [showAssessment, setShowAssessment] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState([]);

  const startAssessment = () => {
    setShowIntro(false);
    setShowAssessment(true);
    setAnswers([]); // Reset answers when starting a new assessment
  };

  const handleAssessmentCompletion = () => {
    setShowAssessment(false);
    setShowResults(true);
  };

  const restartAssessment = () => {
    setShowResults(false);
    setShowIntro(true);
  };

  return (
    <div>
      <Header />
      <div >
        {showIntro && <Intro startAssessment={startAssessment} />}
        {showAssessment && (
          <Assessment onComplete={handleAssessmentCompletion} setAnswers={setAnswers} />
        )}
        {showResults && <Results restartAssessment={restartAssessment} answers={answers} />}

      </div>
      <Footer/>
    </div>
  );
}

export default CareerAssessment;