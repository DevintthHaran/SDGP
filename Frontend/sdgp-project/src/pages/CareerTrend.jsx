import React, { useState } from 'react';
import JobListings from '../components/JobListings';
import JobMarketTrends from '../components/JobMarketTrends';
import '../style/CareerTrend.css';

function CareerTrend() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSection, setActiveSection] = useState(null); // Controls visibility

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  console.log("App Rendered", activeSection); // Add this line for debugging

  return (
    <div className="trend">
    <div className="app">
      <h1 className="title">Professional Odyssey</h1>
      <div className="search-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Enter job title..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        <div className="button-group">
          <button onClick={() => setActiveSection('trends')}>Show Market Trends</button>
          <button onClick={() => setActiveSection('jobs')}>Search Jobs</button>
        </div>
      </div>

      {activeSection === 'trends' && <JobMarketTrends job={searchTerm} />}
      {activeSection === 'jobs' && <JobListings jobTitle={searchTerm} />}
    </div>
    </div>
  );
}

export default CareerTrend;
