import React, { useState, useEffect } from 'react';

const JobListings = ({ jobTitle }) => {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("Fetching jobs with title:", jobTitle); // Debug log
    fetchJobs();
  }, [jobTitle]); // Use jobTitle for fetching

  const fetchJobs = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=30ee3876&app_key=a08cfac366f78e280f711da219f55093&results_per_page=10&what=${encodeURIComponent(jobTitle)}`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch job listings');
      }

      const data = await response.json();
      console.log("Job Listings:", data); // Log the job data for debugging

      setJobs(data.results || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="loading">Loading job listings...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="job-listings">
      {jobs.length > 0 ? (
        <ul>
          {jobs.map((job) => (
            <li key={job.id}>
              <a href={job.redirect_url} target="_blank" rel="noopener noreferrer">
                {job.title} - {job.location.display_name}
              </a>
              <p>{job.description ? job.description.substring(0, 150) : 'No description available'}...</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No job listings found.</p>
      )}
    </div>
  );
};

export default JobListings;
