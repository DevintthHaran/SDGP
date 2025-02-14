import React, { useState } from "react";
import "../style/setting.css";

const Setting = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    careerAlerts: true,
    resumeFeedback: true,
    eventReminders: true,
    emailPreferences: true,
    accountPrivacy: "Public",
    preferredCareerField: "IT",
    language: "English",
    theme: "Light",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings({
      ...settings,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSave = () => {
    alert("Settings saved successfully!");
    console.log(settings);
  };

  return (
    <>
    
      <div className="settings-page">
        <header className="header">
          <h1>Settings</h1>
        </header>
        <main className="main-content">
          {/* Account Settings */}
          <section className="settings-section">
            <h2>Account Settings</h2>
            <button>Edit Profile</button>
            <button>Change Password</button>
            <button>Manage Linked Accounts</button>
            <button>Delete Account</button>
          </section>

          {/* Notification Settings */}
          <section className="settings-section">
            <h2>Notification Settings</h2>
            <label>
              <input
                type="checkbox"
                name="careerAlerts"
                checked={settings.careerAlerts}
                onChange={handleChange}
              />
              Career Alerts & Job Updates
            </label>
            <label>
              <input
                type="checkbox"
                name="resumeFeedback"
                checked={settings.resumeFeedback}
                onChange={handleChange}
              />
              Resume Feedback Notifications
            </label>
            <label>
              <input
                type="checkbox"
                name="eventReminders"
                checked={settings.eventReminders}
                onChange={handleChange}
              />
              Event & Webinar Reminders
            </label>
            <label>
              <input
                type="checkbox"
                name="emailPreferences"
                checked={settings.emailPreferences}
                onChange={handleChange}
              />
              Email Preferences (Subscribe/Unsubscribe)
            </label>
          </section>

          {/* Application Preferences */}
          <section className="settings-section">
            <h2>Application Preferences</h2>
            <label>
              Preferred Career Fields
              <select
                name="preferredCareerField"
                value={settings.preferredCareerField}
                onChange={handleChange}
              >
                <option value="IT">IT</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Business">Business</option>
              </select>
            </label>
            <label>
              Language & Region
              <select
                name="language"
                value={settings.language}
                onChange={handleChange}
              >
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
                <option value="German">German</option>
              </select>
            </label>
            <label>
              Theme Mode
              <select
                name="theme"
                value={settings.theme}
                onChange={handleChange}
              >
                <option value="Light">Light</option>
                <option value="Dark">Dark</option>
              </select>
            </label>
          </section>

          {/* Help & Support */}
          <section className="settings-section">
            <h2>Help & Support</h2>
            <button>FAQs</button>
            <button>Contact Support</button>
            <button>Report a Problem</button>
            <button>Feedback & Suggestions</button>
          </section>

          {/* Legal & Policies */}
          <section className="settings-section">
            <h2>Legal & Policies</h2>
            <button>Terms of Service</button>
            <button>Privacy Policy</button>
            <button>Cookie Preferences</button>
          </section>

          <button className="save-button" onClick={handleSave}>
            Save Settings
          </button>
        </main>
      </div>
    
    </>
  );
};

export default Setting;