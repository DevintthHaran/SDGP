import React from "react";
import InputField from "./inputField";

function GeneralDetails({ updateProfileData, profileData }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <div style={{ flex: "1", padding: "10px" }}>
        <InputField
          label="User"
          type="text"
          id="username"
          value={profileData.general.username}
          changeFunction={(value) =>
            updateProfileData("general", "username", value)
          }
          placeholder="username"
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
          label="Email"
          type="email"
          id="email"
          value={profileData.general.email}
          changeFunction={(value) =>
            updateProfileData("general", "email", value)
          }
          placeholder="email"
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

export default GeneralDetails;
