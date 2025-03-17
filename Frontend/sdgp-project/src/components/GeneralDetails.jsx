import React, { useState } from "react";
import InputField from "./inputField";

function GeneralDetails({ updateProfileData, profileData }) {
  const [errors, setErrors] = useState({ username: '', email: '' });

  const validateField = (field, value) => {
    switch (field) {
      case 'username':
        return value.trim().length > 0 ? '' : 'Username is required';
      case 'email':
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Invalid email format';
      default:
        return '';
    }
  };

  const handleChange = (field) => (value) => {
    const error = validateField(field, value);
    setErrors(prev => ({ ...prev, [field]: error }));
    if (!error) {
      updateProfileData("general", field, value);
    }
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <div style={{ flex: "1", padding: "10px" }}>
        <InputField
          label="User"
          type="text"
          id="username"
          value={profileData.general.username}
          changeFunction={handleChange("username")}
          placeholder="username"
          error={errors.username}
          style={{
            width: "100%",
            padding: "8px",
            borderRadius: "5px",
            border: errors.username ? "1px solid red" : "1px solid #ccc",
            marginBottom: "10px",
          }}
        />
      </div>
      <div style={{ flex: "1", padding: "10px" }}>
        <InputField
          label="Email"
          type="email"
          id="email"
          value={profileData.general.email}
          changeFunction={handleChange("email")}
          placeholder="email"
          error={errors.email}
          style={{
            width: "100%",
            padding: "8px",
            borderRadius: "5px",
            border: errors.email ? "1px solid red" : "1px solid #ccc",
            marginBottom: "10px",
          }}
        />
      </div>
    </div>
  );
}

export default GeneralDetails;