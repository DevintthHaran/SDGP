import React, { useState } from "react";
import InputField from "./inputField";

function SocialDetails({ updateProfileData, profileData }) {
  const [errors, setErrors] = useState({ facebook: '', linkedin: '' });

  const validateUrl = (value) => {
    if (!value) return '';
    return /^(https?:\/\/)?([\w\d-]+\.)+[\w\d]{2,}(\/.*)?$/.test(value) 
      ? '' 
      : 'Invalid URL format';
  };

  const handleChange = (field) => (value) => {
    const error = validateUrl(value);
    setErrors(prev => ({ ...prev, [field]: error }));
    if (!error) {
      updateProfileData("social", field, value);
    }
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
      <div style={{ flex: "1", minWidth: "200px" }}>
        <InputField
          label="Facebook Profile"
          type="text"
          id="facebook"
          value={profileData.social.facebook}
          changeFunction={handleChange("facebook")}
          placeholder="Facebook Profile"
          error={errors.facebook}
        />
      </div>
      <div style={{ flex: "1", minWidth: "200px" }}>
        <InputField
          label="LinkedIn Profile"
          type="text"
          id="linkedin"
          value={profileData.social.linkedin}
          changeFunction={handleChange("linkedin")}
          placeholder="LinkedIn Profile"
          error={errors.linkedin}
        />
      </div>
    </div>
  );
}

export default SocialDetails;