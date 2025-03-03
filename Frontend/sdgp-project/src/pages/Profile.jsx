import React, { useState } from "react";
import ProfileImage from "../Images/Career gui.png"; // Default profile image
import Select from "react-select";
import SriLankanLangIcon from "../Images/Sri lankan.png";
import EnglishLangIcon from "../Images/USA.png";
import PersonalDetails from "../components/PersonalDetails";
import AddressDetails from "../components/AddressDetails";
import SocialDetails from "../components/SocialDetails";
import GeneralDetails from "../components/GeneralDetails";
import ProfileView from "../components/ProfileView";
import "../style/Profile.css";

function Profile() {
  const languages = [
    { label: "Sinhala", value: "sinhala", img: SriLankanLangIcon },
    { label: "English", value: "english", img: EnglishLangIcon },
  ];

  const tabs = [
    { name: "General", component: <GeneralDetails /> },
    { name: "Personal", component: <PersonalDetails /> },
    { name: "Address", component: <AddressDetails /> },
    { name: "Social", component: <SocialDetails /> },
  ];

  const [activeTab, setActiveTab] = useState(0);
  const [editEnabled, setEditEnabled] = useState(false);
  const [theme, setTheme] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  // Store current and temporary profile data
  const [profileData, setProfileData] = useState({
    general: { username: "", email: "" },
    personal: { firstname: "", lastname: "" },
    address: { addressLine: "", state: "" },
    social: { facebook: "", linkedin: "" },
    profilePicture: ProfileImage,
  });

  const [tempProfileData, setTempProfileData] = useState({ ...profileData });
  const [submittedProfileData, setSubmittedProfileData] = useState(null);

  // Update profile data function
  const updateProfileData = (section, field, value) => {
    setTempProfileData((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [field]: value,
      },
    }));
  };

  // Handle profile picture change
  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTempProfileData((prevData) => ({
          ...prevData,
          profilePicture: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Submit profile data
  const handleSubmit = () => {
    setProfileData({ ...tempProfileData }); // Save changes permanently
    setSubmittedProfileData({ ...tempProfileData }); // Update the profile summary
    setSubmitted(true);
    setEditEnabled(false);
  };

  // Cancel editing (only for the current tab)
  const handleCancel = () => {
    const currentTab = tabs[activeTab].name.toLowerCase();
    setTempProfileData((prevData) => ({
      ...prevData,
      [currentTab]: { ...profileData[currentTab] }, // Reset only the current tab's data
    }));
    setEditEnabled(false);
  };

  return (
    <div className="profile">
    
    <div className={`container theme-${theme}-box`}>
      <div className="profile-container">
        {/* Left Sidebar */}
        <div className="sidebar">
          <div className="profile-header">
            <img
              src={tempProfileData.profilePicture}
              alt="profile"
              className="profile-image"
            />
            <h6>CodeDiggy</h6>
          </div>
          <div className="profile-actions">
            <input
              type="file"
              className="hidden-file-input"
              id="file-input"
              onChange={handleProfilePictureChange}
            />
            <label htmlFor="file-input" className="custom-cursor">
              Change
            </label>
            <button
              className="delete-btn"
              onClick={() =>
                setTempProfileData((prevData) => ({
                  ...prevData,
                  profilePicture: ProfileImage,
                }))
              }
            >
              Delete
            </button>
          </div>
          <div className="settings-section">
            <h5>Account Setting</h5>
            <h6>Language</h6>
            <Select
              options={languages}
              defaultValue={languages[0]}
              formatOptionLabel={(option) => (
                <div>
                  <img src={option.img} alt={option.label} className="lang-icon" />
                  <span>{option.label}</span>
                </div>
              )}
            />
            <h6>Themes</h6>
            <div className="themes-container">
              {[1, 2, 3].map((num) => (
                <div
                  key={num}
                  className={`theme-box theme-${num}-box ${theme === num ? "selected" : ""}`}
                  onClick={() => setTheme(num)}
                ></div>
              ))}
            </div>
          </div>
        </div>
  
        {/* Right Section */}
        <div className="content">
          {/* Tabs */}
          <div className="profile-tabs">
            {tabs.map((tab, index) => (
              <div
                key={index}
                className={`tab ${activeTab === index ? "active-tab" : ""}`}
                onClick={() => setActiveTab(index)}
              >
                {tab.name}
              </div>
            ))}
          </div>
  
          {/* Active Form Section */}
          <div className="form-section">
            {React.cloneElement(tabs[activeTab].component, {
              updateProfileData,
              profileData: tempProfileData,
            })}
          </div>
  
          {/* Edit, Cancel, Submit Buttons */}
          <div className="button-group">
            {editEnabled ? (
              <>
                <button className="cancel-btn" onClick={handleCancel}>
                  CANCEL
                </button>
                <button className="submit-profile-btn" onClick={handleSubmit}>
                  SUBMIT
                </button>
              </>
            ) : (
              <button
                className="edit-profile-btn"
                onClick={() => {
                  setEditEnabled(true);
                  setTempProfileData({ ...profileData });
                }}
              >
                EDIT
              </button>
            )}
          </div>
        </div>
      </div>
  
      {/* Profile Summary */}
      {submittedProfileData && <ProfileView profileData={submittedProfileData} />}
    </div>
    </div>
    
  );
  
  
}

export default Profile;
