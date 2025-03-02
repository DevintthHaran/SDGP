import React from "react";
import InputField from "./inputField";

function AddressDetails({ updateProfileData, profileData }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <div style={{ flex: "1", padding: "10px" }}>
        <InputField
          label="Address Line"
          type="text"
          id="addressLine"
          value={profileData.address.addressLine}
          changeFunction={(value) =>
            updateProfileData("address", "addressLine", value)
          }
          className="form-control"
          placeholder="Enter address line"
          style={{
            width: "100%",
            padding: "8px",
            borderRadius: "5px",
            border: "1px solid #ccc",
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
          changeFunction={(value) =>
            updateProfileData("address", "state", value)
          }
          className="form-control"
          placeholder="Enter state"
          style={{
            width: "100%",
            padding: "8px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            marginBottom: "10px",
          }}
        />
      </div>
    </div>
  );
  
}

export default AddressDetails;
