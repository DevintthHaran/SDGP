import React, { useState } from "react";
import Select from "react-select";
import ProfileImage from "../Images/Career gui.png"; // Default profile image
import SriLankanLangIcon from "../Images/Sri lankan.png";
import EnglishLangIcon from "../Images/USA.png";
import PersonalDetails from "../components/PersonalDetails";
import AddressDetails from "../components/AddressDetails";
import SocialDetails from "../components/SocialDetails";
import GeneralDetails from "../components/GeneralDetails";
import ProfileView from "../components/ProfileView";
import Header from "../components/Header";
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
    <div>
      <Header />
      <div className={`profile-container theme-${theme}`}>
        {/* Sidebar */}
        <aside className="profile-sidebar">
          <div className="profile-card-1">
            <img src={tempProfileData.profilePicture} alt="Profile" className="profile-image" />
            <h4>CodeDiggy</h4>
            <label htmlFor="file-input" className="change-btn">Change</label>
            <input type="file" id="file-input" className="hidden-file-input" onChange={handleProfilePictureChange} />
            <button className="delete-btn" onClick={() => setTempProfileData({ ...tempProfileData, profilePicture: ProfileImage })}>
              Remove
            </button>
          </div>
          
          {/* Settings */}
          <div className="profile-settings">
            <h5>Account Settings</h5>
            <h6>Language</h6>
            <Select
              options={languages}
              defaultValue={languages[0]}
              formatOptionLabel={(option) => (
                <div className="language-option">
                  <img src={option.img} alt={option.label} className="lang-icon" />
                  <span>{option.label}</span>
                </div>
              )}
            />

            <h6>Theme</h6>
            <div className="theme-options">
              {[1, 2, 3].map((num) => (
                <div key={num} className={`theme-box theme-${num} ${theme === num ? "active" : ""}`} onClick={() => setTheme(num)} />
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="profile-content">
          {/* Tabs */}
          <nav className="profile-tabs">
            {tabs.map((tab, index) => (
              <button key={index} className={`tab-btn ${activeTab === index ? "active" : ""}`} onClick={() => setActiveTab(index)}>
                {tab.name}
              </button>
            ))}
          </nav>

          {/* Form Section */}
          <section className="profile-form">
            {React.cloneElement(tabs[activeTab].component, { updateProfileData, profileData: tempProfileData })}
          </section>

          {/* Buttons */}
          <div className="profile-actions">
            {editEnabled ? (
              <>
                <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
                <button className="submit-btn" onClick={handleSubmit}>Save Changes</button>
              </>
            ) : (
              <button className="edit-btn" onClick={() => setEditEnabled(true)}>Edit Profile</button>
            )}
          </div>
        </main>
      </div>

      {/* Profile Summary */}
      {submittedProfileData && <ProfileView profileData={submittedProfileData} />}
    </div>
  );
}

export default Profile;
