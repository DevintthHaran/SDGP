import React, { useState } from "react";
import ProgressTracker from "./ProgressTracker";
import "../style/Skill.css";

const AssessmentQuestions = ({ categories, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const questions = [
    {
      id: 1,
      text: "How would you rate your proficiency in [Skill]?",
      options: ["Beginner", "Intermediate", "Advanced"],
    },
    {
      id: 2,
      text: "How comfortable are you with teamwork?",
      options: ["Not Comfortable", "Somewhat Comfortable", "Very Comfortable"],
    },
    {
      id: 3,
      text: "How would you rate your problem-solving skills?",
      options: ["Beginner", "Intermediate", "Advanced"],
    },
    {
      id: 4,
      text: "How familiar are you with React?",
      options: ["Not Familiar", "Somewhat Familiar", "Very Familiar"],
    },
    {
      id: 5,
      text: "How would you rate your communication skills?",
      options: ["Beginner", "Intermediate", "Advanced"],
    },
    {
      id: 6,
      text: "How confident are you in managing projects?",
      options: ["Not Confident", "Somewhat Confident", "Very Confident"],
    },
    {
      id: 7,
      text: "How would you rate your time management skills?",
      options: ["Beginner", "Intermediate", "Advanced"],
    },
    {
      id: 8,
      text: "How would you rate your ability to learn new technologies?",
      options: ["Beginner", "Intermediate", "Advanced"],
    },
    {
      id: 9,
      text: "How would you rate your leadership skills?",
      options: ["Beginner", "Intermediate", "Advanced"],
    },
    {
      id: 10,
      text: "How would you rate your ability to work under pressure?",
      options: ["Beginner", "Intermediate", "Advanced"],
    },
    // Add more questions
  ];

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      onComplete(answers);
    }
  };

  return (
    <div className="assessment-questions">
      <h2>Question {currentQuestion + 1}</h2>
      <p>{questions[currentQuestion].text}</p>
      {questions[currentQuestion].options.map((option, index) => (
        <button key={index} onClick={() => handleAnswer(option)}>
          {option}
        </button>
      ))}
      <ProgressTracker current={answers.length} total={questions.length} />
    </div>
  );
};

export default AssessmentQuestions;
