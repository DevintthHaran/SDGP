// ProfileView.js
import React from "react";
import "./ProfileView.css"; // Add custom CSS for styling

function ProfileView({ profileData }) {
  return (
    <div className="profile-card">
      <h2>Profile Summary</h2>
      <div className="profile-card-content">
        <img
          src={profileData.profilePicture}
          alt="Profile"
          className="profile-card-image"
        />
        <div className="profile-details">
          <p>
            <strong>Username:</strong> {profileData.general.username}
          </p>
          <p>
            <strong>Email:</strong> {profileData.general.email}
          </p>
          <p>
            <strong>First Name:</strong> {profileData.personal.firstname}
          </p>
          <p>
            <strong>Last Name:</strong> {profileData.personal.lastname}
          </p>
          <p>
            <strong>Address Line:</strong> {profileData.address.addressLine}
          </p>
          <p>
            <strong>State:</strong> {profileData.address.state}
          </p>
          <p>
            <strong>Facebook:</strong> {profileData.social.facebook}
          </p>
          <p>
            <strong>LinkedIn:</strong> {profileData.social.linkedin}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProfileView;
