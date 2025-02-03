import React, { useState } from "react";

function Question() {
  const [role, setRole] = useState("");
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchQuestion = async () => {
    if (!role) {
      alert("Please enter a role!");
      return;
    }

    setLoading(true);
    setQuestion("");

    try {
      const response = await fetch(`http://localhost:8080/generate-question?role=${role}`);
      if (!response.ok) throw new Error("Failed to fetch");

      const data = await response.text(); // Assuming API returns plain text
      setQuestion(data);
    } catch (error) {
      console.error("Error fetching question:", error);
      setQuestion("Failed to fetch question.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Interview Question Generator</h1>
      <input
        type="text"
        placeholder="Enter job role..."
        value={role}
        onChange={(e) => setRole(e.target.value)}
        style={{ padding: "8px", marginRight: "10px", fontSize: "16px" }}
      />
      <button onClick={fetchQuestion} style={{ padding: "8px 16px", fontSize: "16px" }}>
        Generate Question
      </button>
      {loading && <p>Loading...</p>}
      {question && <p><strong>Question:</strong> {question}</p>}
    </div>
  );
}

export default Question;
