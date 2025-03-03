import React from "react";
import InputField from "./inputField";

function SocialDetails({ updateProfileData, profileData }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
      <div style={{ flex: "1", minWidth: "200px" }}>
        <InputField
          label="Facebook Profile"
          type="text"
          id="facebook"
          value={profileData.social.facebook}
          changeFunction={(value) =>
            updateProfileData("social", "facebook", value)
          }
          placeholder="Facebook Profile"
        />
      </div>
      <div style={{ flex: "1", minWidth: "200px" }}>
        <InputField
          label="LinkedIn Profile"
          type="text"
          id="linkedin"
          value={profileData.social.linkedin}
          changeFunction={(value) =>
            updateProfileData("social", "linkedin", value)
          }
          placeholder="LinkedIn Profile"
        />
      </div>
    </div>
  );
}

export default SocialDetails;
