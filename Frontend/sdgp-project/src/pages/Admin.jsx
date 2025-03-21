import { useState, useEffect } from "react";
import "../style/Admin.css";
import Header from '../components/Header.jsx';

const Admin = () => {
  const [candidates, setCandidates] = useState([]);
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/counselors")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched Data: ", data); 
        setCandidates(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Handle Approve Action
  const handleApprove = (id) => {
    const updatedCandidates = candidates.map(candidate => 
      candidate.id === id ? { ...candidate, status: "Approved", counselorId: `CNSLR-${id}` } : candidate
    );
    setCandidates(updatedCandidates);

    // Send update to the backend (Assign Counselor ID)
    fetch(`http://localhost:8080/api/counselors/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ status: "Approved", counselorId: `CNSLR-${id}` })
    })
    .then(response => response.json())
    .catch(error => console.error("Error updating candidate status:", error));
  };

  // Handle Reject Action (Delete candidate)
  const handleReject = (id) => {
    const updatedCandidates = candidates.filter(candidate => candidate.id !== id);
    setCandidates(updatedCandidates);

    // Send request to backend to delete candidate
    fetch(`http://localhost:8080/api/counselors/${id}`, {
      method: "DELETE",
    })
    .then(() => console.log(`Candidate ${id} deleted`))
    .catch(error => console.error("Error deleting candidate:", error));
  };

  // Handle Candidate Row Click
  const handleSelectCandidate = (candidate) => {
    setSelectedCandidate(candidate);
  };

  // Redirect to CV Link
  const handleViewCV = (fileUrl) => {
    window.open(fileUrl, '_blank');
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
              <p>No candidates available</p>
            ) : (
              candidates.map((candidate) => (
                <div
                  key={candidate.id}
                  className="candidate-card"
                  onClick={() => handleSelectCandidate(candidate)} 
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
                    <button className="view-cv" onClick={() => handleViewCV(candidate.fileUrl)}>📄 View CV</button>
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
                <p>Position: {selectedCandidate.position}</p>
                <p>Contact: {selectedCandidate.contactNumber}</p>
                <p>Google Meet Link: <a href={selectedCandidate.googleMeetLink} target="_blank" rel="noopener noreferrer">{selectedCandidate.googleMeetLink}</a></p>
                {/* Add any other details you want to display */}
              </div>
            ) : (
              <p>Select a candidate to view details</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
