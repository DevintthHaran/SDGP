import { useState, useEffect } from "react";
import "../style/Admin.css";
import Header from '../components/Header.jsx';

const Admin = () => {
  const [candidates, setCandidates] = useState([]);
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        console.log("Fetching pending candidates from backend...");
        const response = await fetch("http://localhost:8080/api/counselors?status=Pending");
        const data = await response.json();
        console.log("Fetched candidates: ", data);
        setCandidates(data);
      } catch (error) {
        console.error("Error fetching candidates:", error);
      }
    };

    fetchCandidates();
  }, []);

  // Handle Approve Action
  const handleApprove = async (id) => {
    console.log(`Approving candidate with id: ${id}`);
    const updatedCandidates = candidates.map(candidate =>
      candidate.id === id ? { ...candidate, status: "Approved", counselorId: `CNSLR-${id}` } : candidate
    );
    setCandidates(updatedCandidates);

    try {
      const response = await fetch(`http://localhost:8080/api/counselors/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "Approved", counselorId: `CNSLR-${id}` })
      });
      const updatedCandidate = await response.json();
      console.log("Updated candidate after approval:", updatedCandidate);
    } catch (error) {
      console.error("Error updating candidate status:", error);
    }
  };

  // Handle Reject Action (Delete candidate)
  const handleReject = async (id) => {
    console.log(`Rejecting candidate with id: ${id}`);
    setCandidates(prev => prev.filter(candidate => candidate.id !== id));

    try {
      await fetch(`http://localhost:8080/api/counselors/${id}`, { method: "DELETE" });
      console.log(`Candidate with id ${id} deleted`);
    } catch (error) {
      console.error("Error deleting candidate:", error);
    }
  };

  // Handle Candidate Row Click
  const handleSelectCandidate = (candidate) => {
    console.log("Selected candidate: ", candidate);
    setSelectedCandidate(candidate);
  };

  // Redirect to CV Link
  const handleViewCV = (fileUrl) => {
    if (fileUrl) {
      console.log(`Opening CV from URL: ${fileUrl}`);
      window.open(fileUrl, '_blank');
    } else {
      console.error("No CV link available");
    }
  };

  return (
    <div className="Admin">
      <Header />
      <div className="admin-dashboard">
        <h2 className="dashboard-title">CV Verification Portal</h2>
        <p className="dashboard-subtitle">Manage and verify candidate applications</p>

        <div className="admin-main-container">
          <div className="candidates-container">
            <h3>Candidates (Pending)</h3>
            {candidates.length === 0 ? (
              <p>No pending candidates available</p>
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
                    <button className="view-cv" onClick={(e) => {e.stopPropagation(); handleViewCV(candidate.fileUrl);}}>📄 View CV</button>
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
                <p>Email: <a href={`mailto:${selectedCandidate.email}`} className="email-link">{selectedCandidate.email}</a></p>
                <p>Status: {selectedCandidate.status}</p>
                <p>Position: {selectedCandidate.position}</p>
                <p>Contact: {selectedCandidate.contactNumber}</p>
                {/* <p>Google Meet Link: <a href={selectedCandidate.googleMeetLink} target="_blank" rel="noopener noreferrer">{selectedCandidate.googleMeetLink}</a></p> */}
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
