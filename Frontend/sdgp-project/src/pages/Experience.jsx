import React, { useEffect, useState } from "react";
import "../style/experience.css";
import Header from "../components/Header";

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Step 1: New state to hold career assessment result
  const [careerAssessment, setCareerAssessment] = useState({
    career: "Software Engineer", // Example career
    description:
      "As a Software Engineer, you'll be responsible for designing, developing, and maintaining software applications. You'll work with cutting-edge technologies to create innovative solutions in industries such as technology, healthcare, and finance. Strong problem-solving skills, attention to detail, and proficiency in programming languages are essential for success in this role. With experience, there is potential for career growth into senior roles, including Software Architect or Engineering Manager.",
    areas: [
      {
        label: "Key Skills",
        details: "Programming, System Design, Problem Solving, Debugging",
      },
      {
        label: "Key Responsibilities",
        details:
          "Software Development, Code Review, Unit Testing, Collaboration",
      },
      {
        label: "Potential Career Growth",
        details:
          "Senior Software Engineer, Software Architect, Engineering Manager",
      },
    ],
  });

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("about");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const data = [
    { label: "Skills", percentage: "90%" },
    { label: "Strengths", percentage: "50%" },
    { label: "Weaknesses", percentage: "30%" },
    { label: "Values", percentage: "80%" },
    { label: "Interests", percentage: "70%" },
    { label: "Personality Traits", percentage: "75%" },
  ];

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

        {/* Step 2: Professional Career Report */}
        <div className="career-report">
          <h3>Your Ideal Career: {careerAssessment.career}</h3>
          <p>{careerAssessment.description}</p>

          {/* Areas to Display: Key Skills, Responsibilities, and Career Growth */}
          <div className="career-areas">
            {careerAssessment.areas.map((area, index) => (
              <div key={index} className="career-area">
                <h4>{area.label}:</h4>
                <p>{area.details}</p>
              </div>
            ))}
          </div>
        </div>

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
                    "--progress-width": isVisible ? item.percentage : "0%",
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
    </div>
  );
};

export default Experience;
