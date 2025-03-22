import { useState } from "react";
import "../style/Admin.css";
import Header from '../components/Header.jsx';
import Footer from "../components/Footer.jsx";

const Admin = () => {
  const [candidates, setCandidates] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", status: "Pending" },
  ]);

  return (
    <div className="Admin">
        <Header/>
        <div className="admin-dashboard">
            <h2 className="dashboard-title">CV Verification Portal</h2>
            <p className="dashboard-subtitle">Manage and verify candidate applications</p>

            {/* Stats Section */}
            <div className="stats-container">
                <div className="stat-box">
                <h3>Pending Review</h3>
                <p>1</p>
                </div>
                <div className="stat-box">
                <h3>Approved</h3>
                <p>0</p>
                </div>
                <div className="stat-box">
                <h3>Rejected</h3>
                <p>0</p>
                </div>
            </div>

            {/* Two-Column Layout for Candidates List & Candidate Details */}
            <div className="admin-main-container">
                {/* Left Side (Candidates List - 75% Width) */}
                <div className="candidates-container">
                <h3>Candidates</h3>
                {candidates.map((candidate) => (
                    <div key={candidate.id} className="candidate-card">
                    <div className="candidate-info">
                        <span className="profile-icon">👤</span>
                        <div>
                        <h4>{candidate.name}</h4>
                        <p>{candidate.email}</p>
                        </div>
                    </div>
                    <div className="candidate-actions">
                        <span className="status pending">Pending</span>
                        <button className="view-cv">📄 View CV</button>
                        <button className="approve">✔</button>
                        <button className="reject">✖</button>
                    </div>
                    </div>
                ))}
                </div>

                {/* Right Side (Candidate Details - 25% Width) */}
                <div className="candidate-details">
                <h3>Candidate Details</h3>
                <p>Select a candidate to view details</p>
                </div>
            </div>
            { <Footer /> }
            </div>
    </div>
  );
};

export default Admin;

