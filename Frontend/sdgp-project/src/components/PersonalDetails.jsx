import React, { useState } from "react";
import InputField from "./inputField";

function PersonalDetails({ updateProfileData, profileData }) {
  const [errors, setErrors] = useState({ firstname: '', lastname: '' });

  const validateField = (field, value) => {
    return value.trim().length > 0 ? '' : `${field === 'firstname' ? 'First' : 'Last'} name is required`;
  };

  const handleChange = (field) => (value) => {
    const error = validateField(field, value);
    setErrors(prev => ({ ...prev, [field]: error }));
    if (!error) {
      updateProfileData("personal", field, value);
    }
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
      <div style={{ flex: "1", minWidth: "100px" }}>
        <InputField
          label="First Name"
          type="text"
          id="firstname"
          value={profileData.personal.firstname}
          changeFunction={handleChange("firstname")}
          placeholder="First Name"
          error={errors.firstname}
        />
      </div>
      <div style={{ flex: "1", minWidth: "150px" }}>
        <InputField
          label="Last Name"
          type="text"
          id="lastname"
          value={profileData.personal.lastname}
          changeFunction={handleChange("lastname")}
          placeholder="Last Name"
          error={errors.lastname}
        />
      </div>
    </div>
  );
}

export default PersonalDetails;