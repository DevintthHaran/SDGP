import React, { useEffect, useState } from "react";
import "../style/experience.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [report, setReport] = useState(""); // To store the generated report
  const [keyresponse,setKeyResponse]=useState("");
  const [potentialresponse,setPotentialResponse]=useState("");
  const [rating,setRating]=useState([]);
  const [careerAssessment, setCareerAssessment] = useState({
    career: "Software Engineer", // Example career
    description: "Loading report...", // Placeholder while the report is being fetched
    areas: [
      {
        label: "Key Responsibilities",
        details:
          "Loading key responsibilities...",
      },
      {
        label: "Potential Career Growth",
        details:
          "Loading potential career growth...",
      },
    ],
  });

  // UseEffect to retrieve questions and answers from localStorage
  useEffect(() => {
    const storedQuestions = JSON.parse(localStorage.getItem("questions")) || [];
    const storedAnswers = JSON.parse(localStorage.getItem("answers")) || [];

    setQuestions(storedQuestions);
    setAnswers(storedAnswers);

    if (storedQuestions.length > 0 && storedAnswers.length > 0) {
      fetchCareerReport(storedQuestions, storedAnswers);
    }
  }, []); // Empty dependency array means this effect runs once when the component is mounted

  // Fetch career report after questions and answers are retrieved
  const fetchCareerReport = async (questions, answers) => {
    try {
      const response = await fetch(
        `http://localhost:8080/generate-career-report?questions=${encodeURIComponent(questions)}&answers=${encodeURIComponent(answers)}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch career report");
      }

      const data = await response.text();
      
      if (data) {
        setReport(data); 
        console.log("Career Report Generated:", data); 
      }

      const keyresponse=await fetch(
        `http://localhost:8080/career-key-response?questions=${encodeURIComponent(questions)}&answers=${encodeURIComponent(answers)}`
      );

      const keydata=await keyresponse.text();
      if (keydata) {
        setKeyResponse(keydata); // Set the fetched report data
        console.log("Career KeyResponsible Generated:", keydata); // Log the raw string response
      }
      const potentialresponse=await fetch(
        `http://localhost:8080/potential-growth?questions=${encodeURIComponent(questions)}&answers=${encodeURIComponent(answers)}`
      );

      const potentialdata=await potentialresponse.text();
      if (potentialdata) {
        setPotentialResponse(potentialdata); // Set the fetched report data
        console.log("Career Potential Responsible Generated:", potentialdata); // Log the raw string response
      }

      const ratingresponse=await fetch(
        `http://localhost:8080/career-rating?questions=${encodeURIComponent(questions)}&answers=${encodeURIComponent(answers)}`
      );

      const ratingdata=await ratingresponse.json();
      if (ratingdata) {
        setRating(ratingdata); // Set the fetched report data
        console.log("Career Rating Responsible Generated:", ratingdata); // Log the raw string response
      }

    } catch (error) {
      console.error("Error generating report:", error);
    }
  };

  // Update careerAssessment when the report is fetched
  useEffect(() => {
    if (report) {
      setCareerAssessment((prevAssessment) => ({
        ...prevAssessment,
        description: report, // Set the description to the fetched report
      }));
    }
  }, [report]); // This runs whenever report changes

  useEffect(() => {
    if (keyresponse) {
      setCareerAssessment((prevAssessment) => ({
        ...prevAssessment,
        areas: prevAssessment.areas.map((area) =>
          area.label === "Key Responsibilities"
            ? { ...area, details: keyresponse }
            : area
        ),
      }));
    }
  }, [keyresponse]);


  useEffect(() => {
    if (potentialresponse) {
      setCareerAssessment((prevAssessment) => ({
        ...prevAssessment,
        areas: prevAssessment.areas.map((area) =>
          area.label === "Potential Career Growth"
            ? { ...area, details: potentialresponse }
            : area
        ),
      }));
    }
  }, [potentialresponse]);
  

  const [data, setData] = useState([
    { label: "Skills", percentage: "0%" },
    { label: "Strengths", percentage: "0%" },
    { label: "Weaknesses", percentage: "0%" },
    { label: "Values", percentage: "0%" },
    { label: "Interests", percentage: "0%" },
    { label: "Personality Traits", percentage: "0%" },
  ]);

  useEffect(() => {
    if (rating.length === data.length) {
      setData((prevData) =>
        prevData.map((item, index) => ({
          ...item,
          percentage: `${rating[index]}%`,
        }))
      );
    }
  }, [rating]);
  

  return (
    <div>
      <Header />
      <section
        className={`experience-section ${isVisible ? "visible" : ""}`}
        id="about"
      >
        <div className="container">
          <div className="section_title center">
            <h2>Here's Your Career Report</h2>
          </div>

          {/* Professional Career Report */}
          <div className="career-report">
            <h3>Your Ideal Career: {careerAssessment.career}</h3>
            <p>{careerAssessment.description}</p>

            <div className="career-areas">
              {careerAssessment.areas.map((area, index) => (
                <div key={index} className="career-area">
                  <h4>{area.label}:</h4>
                  <p>{area.details}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Items */}
          <div className="experience-items">
            {data.map((item, index) => (
              <div className="experience-item" key={index}>
                <div className="experience-info">
                  <p>{item.label}</p>
                  <p>{item.percentage}</p>
                </div>
                <div className="progress-line" data-percent={item.percentage}>
                  <span
                    style={{
                      "--progress-width": isVisible ? item.percentage : item.percentage,
                    }}
                  ></span>
                </div>
              </div>
            ))}
          </div>

          {/* Big Smiley Face */}
          <div className="smiley-container">
            <span className="smiley">😊</span>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Experience;
