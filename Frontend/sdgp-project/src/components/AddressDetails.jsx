import React, { useState } from "react";
import InputField from "./inputField";

function AddressDetails({ updateProfileData, profileData }) {
  const [errors, setErrors] = useState({ addressLine: '', state: '' });

  const validateField = (field, value) => {
    return value.trim().length > 0 ? '' : `${field === 'addressLine' ? 'Address line' : 'State'} is required`;
  };

  const handleChange = (field) => (value) => {
    const error = validateField(field, value);
    setErrors(prev => ({ ...prev, [field]: error }));
    if (!error) {
      updateProfileData("address", field, value);
    }
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <div style={{ flex: "1", padding: "10px" }}>
        <InputField
          label="Address Line"
          type="text"
          id="addressLine"
          value={profileData.address.addressLine}
          changeFunction={handleChange("addressLine")}
          placeholder="Enter address line"
          error={errors.addressLine}
          style={{
            width: "100%",
            padding: "8px",
            borderRadius: "5px",
            border: errors.addressLine ? "1px solid red" : "1px solid #ccc",
            marginBottom: "10px",
          }}
        />
      </div>
      <div style={{ flex: "1", padding: "10px" }}>
        <InputField
          label="State"
          type="text"
          id="state"
          value={profileData.address.state}
          changeFunction={handleChange("state")}
          placeholder="Enter state"
          error={errors.state}
          style={{
            width: "100%",
            padding: "8px",
            borderRadius: "5px",
            border: errors.state ? "1px solid red" : "1px solid #ccc",
            marginBottom: "10px",
          }}
        />
      </div>
    </div>
  );
}

export default AddressDetails;