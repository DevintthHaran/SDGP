import { useState, useEffect } from "react";
import "../style/Admin.css";
import Header from '../components/Header.jsx';

const Admin = () => {
  const [candidates, setCandidates] = useState([]);
  const [selectedCandidate, setSelectedCandidate] = useState(null); // State to track selected candidate

  useEffect(() => {
    fetch("http://localhost:8080/api/counselors")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched Data: ", data); // Check fetched data
        setCandidates(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Handle Approve Action
  const handleApprove = (id) => {
    const updatedCandidates = candidates.map(candidate => 
      candidate.id === id ? { ...candidate, status: "Approved" } : candidate
    );
    setCandidates(updatedCandidates);
  };

  // Handle Reject Action
  const handleReject = (id) => {
    const updatedCandidates = candidates.map(candidate => 
      candidate.id === id ? { ...candidate, status: "Rejected" } : candidate
    );
    setCandidates(updatedCandidates);
  };

  // Handle Candidate Row Click
  const handleSelectCandidate = (candidate) => {
    setSelectedCandidate(candidate);
  };

  // Calculate Pending, Approved, and Rejected counts
  const pendingCount = candidates.filter(candidate => candidate.status === "Pending").length;
  const approvedCount = candidates.filter(candidate => candidate.status === "Approved").length;
  const rejectedCount = candidates.filter(candidate => candidate.status === "Rejected").length;

  return (
    <div className="Admin">
      <Header />
      <div className="admin-dashboard">
        <h2 className="dashboard-title">CV Verification Portal</h2>
        <p className="dashboard-subtitle">Manage and verify candidate applications</p>

        <div className="stats-container">
          <div className="stat-box">
            <h3>Pending Review</h3>
            <p>{pendingCount}</p>
          </div>
          <div className="stat-box">
            <h3>Approved</h3>
            <p>{approvedCount}</p>
          </div>
          <div className="stat-box">
            <h3>Rejected</h3>
            <p>{rejectedCount}</p>
          </div>
        </div>

        <div className="admin-main-container">
          <div className="candidates-container">
            <h3>Candidates</h3>
            {candidates.length === 0 ? (
              <p>No candidates available</p>  // This will show if there's no data
            ) : (
              candidates.map((candidate) => (
                <div
                  key={candidate.id}
                  className="candidate-card"
                  onClick={() => handleSelectCandidate(candidate)} // Select candidate on row click
                >
                  <div className="candidate-info">
                    <span className="profile-icon">👤</span>
                    <div>
                      <h4>{candidate.firstName} {candidate.lastName}</h4>
                      <p>{candidate.email}</p>
                    </div>
                  </div>
                  <div className="candidate-actions">
                    <span className={`status ${candidate.status.toLowerCase()}`}>{candidate.status}</span>
                    <button className="view-cv">📄 View CV</button>
                    <button className="approve" onClick={(e) => {e.stopPropagation(); handleApprove(candidate.id);}}>✔</button>
                    <button className="reject" onClick={(e) => {e.stopPropagation(); handleReject(candidate.id);}}>✖</button>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="candidate-details">
            <h3>Candidate Details</h3>
            {selectedCandidate ? (
              <div>
                <h4>{selectedCandidate.firstName} {selectedCandidate.lastName}</h4>
                <p>Email: {selectedCandidate.email}</p>
                <p>Status: {selectedCandidate.status}</p>
                {/* Add any other details you want to display */}
              </div>
            ) : (
              <p>Select a candidate to view details</p> // Show when no candidate is selected
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;

