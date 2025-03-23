import React, { useState, useEffect } from 'react';
import JobListings from './JobListings';

const JobPostingsPage = () => {
  const { jobTitle } = useParams();
  const [page, setPage] = useState(1);

  return (
    <div className="job-listings-page">
      <h2>Job Listings for "{jobTitle}"</h2>
      <JobListings jobTitle={jobTitle} page={page} />
      <button onClick={() => setPage(page + 1)}>Load More</button>
    </div>
  );
};

export default JobPostingsPage;
