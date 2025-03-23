import React, { useState, useEffect } from "react";
import ProgressTracker from "./ProgressTracker";
import "../style/Skill.css";

const AssessmentQuestions = ({ categories, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState([]); // List to store questions
  const [answers, setAnswers] = useState([]); // List to store answers
  const [previousQuestion, setPreviousQuestion] = useState("Select the skill category that best describes your expertise:");
  const [previousMcq, setPreviousMcq] = useState(["Technical Skills", "Soft Skills", "Industry-Specific Skills", "Creative Skills", "Managerial/Leadership Skills"]);
  const [category, setCategory] = useState("");
  const [initial, setInitial] = useState(true);
  const [loading, setLoading] = useState(false); // Add loading state


  const questionsList = [
    {
      id: 1,
      text: "Select the skill category that best describes your expertise:",
      options: ["Technical Skills", "Soft Skills", "Industry-Specific Skills", "Creative Skills", "Managerial/Leadership Skills"], // Always available
    },
  ];

  const handleAnswer = async (answer) => {
    try {
      // Add the current question and answer to their respective lists
      const updatedQuestions = [...questions, previousQuestion];
      const updatedAnswers = [...answers, answer];

      // Update the state with the new question and answer
      setQuestions(updatedQuestions);
      setAnswers(updatedAnswers);


      // If we have 10 answers, complete the quiz
      if (updatedAnswers.length >= 10) {
        console.log(updatedQuestions);
        console.log(updatedAnswers);
        localStorage.setItem("questions", JSON.stringify(updatedQuestions));
        localStorage.setItem("answers", JSON.stringify(updatedAnswers));
        onComplete(updatedQuestions, updatedAnswers); // Send both questions and answers to onComplete function
        return;
      }

      setLoading(true); // Show loading state while waiting for new question and MCQs

      if (initial) {
        setCategory(answer);
        setInitial(false);
      }

      const selectedCategory = initial ? answer : category;

      // Fetch new question
      const response = await fetch(
        `http://localhost:8080/generate-skill-question?Category=${encodeURIComponent(selectedCategory)}&question=${encodeURIComponent(previousQuestion)}&answer=${encodeURIComponent(answer)}`
      );

      // If the response is plain text, use .text() instead of .json()
      const data = await response.text(); // Use .text() to handle plain text response

      // Check if the response is valid text, not empty or invalid
      if (!response.ok || !data || typeof data !== "string") {
        console.error("Invalid response from API:", data);
        setLoading(false);
        return;
      }

      console.log("New Question from API:", data);
      setPreviousQuestion(data); // Set the received plain text as the new question

      // Wait 5 seconds before fetching MCQs
      await new Promise((resolve) => setTimeout(resolve, 5000)); // Adjust the delay as needed

      // Fetch new MCQs based on the updated question
      const mcqResponse = await fetch(
        `http://localhost:8080/generate-skill-mcq?question=${encodeURIComponent(data)}`
      );
      const mcqData = await mcqResponse.json();

      if (!mcqResponse.ok || !mcqData || !Array.isArray(mcqData) || mcqData.length === 0) {
        console.error("Error fetching MCQs or empty list:", mcqData);
        setPreviousMcq(["Retry", "Check API"]); // Fallback to retry options
        setLoading(false); // Ensure loading state is turned off
        return;
      }

      console.log("MCQ Options:", mcqData);
      setPreviousMcq(mcqData); // Update MCQ choices
      setCurrentQuestion((prev) => prev + 1); // Move to the next question
      setLoading(false); // End loading state
    } catch (error) {
      console.error("Error:", error);
      setPreviousMcq(["Retry", "Check API"]); // Prevent infinite loading
      setLoading(false); // Ensure loading state is turned off
    }
  };

  return (
    <div className="assessment-questions">
      <h2>Question {currentQuestion + 1}</h2>
      <p>{previousQuestion}</p>

      {loading ? (
        <p>⏳ Loading new options...</p> // Show loading message during delay
      ) : previousMcq.length > 0 ? (
        previousMcq.map((option, index) => (
          <button key={index} onClick={() => handleAnswer(option)}>
            {option}
          </button>
        ))
      ) : (
        <p>⚠️ No options available. Please wait or retry.</p>
      )}

      <ProgressTracker current={answers.length} total={10} />
    </div>
  );
};

export default AssessmentQuestions;
