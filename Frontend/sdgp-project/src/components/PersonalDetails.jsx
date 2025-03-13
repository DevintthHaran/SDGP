import React from "react";
import InputField from "./inputField";

function PersonalDetails({ updateProfileData, profileData }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
      <div style={{ flex: "1", minWidth: "100px" }}>
        <InputField
          label="First Name"
          type="text"
          id="firstname"
          value={profileData.personal.firstname}
          changeFunction={(value) =>
            updateProfileData("personal", "firstname", value)
          }
          placeholder="First Name"
        />
      </div>
      <div style={{ flex: "1", minWidth: "150px" }}>
        <InputField
          label="Last Name"
          type="text"
          id="lastname"
          value={profileData.personal.lastname}
          changeFunction={(value) =>
            updateProfileData("personal", "lastname", value)
          }
          placeholder="Last Name"
        />
      </div>
    </div>
  );
}

export default PersonalDetails;
