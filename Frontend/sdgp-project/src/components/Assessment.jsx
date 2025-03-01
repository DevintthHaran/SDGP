import React, { useState } from 'react';
import '../style/Career.css';

const Assessment = ({ onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const questions = [
    {
      question: "What are your primary interests?",
      options: ["Technology and Cybersecurity", "Healthcare & Biotechnology", "Data Science & Artificial Intelligence", "Business and Finance"],
    },
    {
      question: "Do you prefer working in a team or independently?",
      options: ["Team", "Independently", "Both", "Not Sure"],
    },
    {
      question: "What is your preferred work environment?",
      options: ["Office", "Remote", "Outdoors", "Flexible"],
    },
    {
      question: "How do you handle challenges?",
      options: ["Analyze and Solve", "Seek Help", "Avoid Them", "Stay Calm and Adapt"],
    },
    {
      question: "What motivates you the most?",
      options: ["Money", "Recognition", "Helping Others", "Learning New Things"],
    },
    {
      question: "Which subject did you enjoy the most in school?",
      options: ["Math and Science", "Arts and Literature", "Social Studies", "Physical Education"],
    },
    {
      question: "How do you describe your communication skills?",
      options: ["Excellent", "Good", "Average", "Needs Improvement"],
    },
    {
      question: "What type of tasks do you enjoy the most?",
      options: ["Problem-Solving", "Creative Tasks", "Organizing and Planning", "Helping Others"],
    },
    {
      question: "How do you prefer to learn new things?",
      options: ["Reading", "Hands-On Practice", "Watching Videos", "Taking Courses"],
    },
    {
      question: "What is your long-term career goal?",
      options: ["Leadership Role", "Creative Freedom", "Financial Stability", "Making a Difference"],
    },
  ];

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      onComplete();
    }
  };

  return (
    <div className="careerassessment">
    <div className="assessment">
      <h2>Question {currentQuestion + 1}</h2>
      <p>{questions[currentQuestion].question}</p>
      <div className="options">
        {questions[currentQuestion].options.map((option, index) => (
          <button key={index} onClick={() => handleAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
      <div className="progress-bar">
        <div
          style={{
            width: `${((answers.length) / questions.length) * 100}%`,
            height: "10px",
            backgroundColor: "#61dafb",
          }}
        ></div>
      </div>
      <p>Progress: {answers.length} of {questions.length} questions answered</p>
    </div>
    </div>
  );
};

export default Assessment;