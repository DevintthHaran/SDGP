import React, { useEffect, useState } from "react";
import "../style/Booking.css"; // External CSS file
import Header from '../components/Header.jsx';

const OLevelMeeting = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/counselors/olevel")
      .then((response) => response.json())
      .then((data) => setPeople(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <Header/>
    <div className="booking-container">
      <div className="booking-content">
        <h2 className="booking-header">Available Career Guidance Sessions</h2>
        <ul className="booking-list">
          {people.length > 0 ? (
            people.map((person, index) => (
              <li key={index} className="booking-card">
                <div className="booking-card-content">
                  <h3 className="booking-card-name">
                    {person.firstName} {person.lastName}
                  </h3>
                  <p className="booking-card-description">
                    Book a session with {person.firstName} for career guidance.
                  </p>
                  <a
                    href={person.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="booking-button"
                  >
                    Book Now
                  </a>
                </div>
              </li>
            ))
          ) : (
            <p className="loading-text">Loading...</p>
          )}
        </ul>
      </div>
    </div>
    </div>
  );
};

export default OLevelMeeting;
