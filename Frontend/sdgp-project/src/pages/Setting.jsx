import React, { useState } from "react";

import "../style/setting.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
      <Header />
      <div className="setting1">
        <div className="settings-page">
          <main className="main-content">
            <div className="left-column">
              {/* Account Settings */}
              <section className="settings-section">
                <h2>Account Settings</h2>
                <div className="button-group">
                  <button className="button">Edit Profile</button>
                  <button className="button">Change Password</button>
                  <button className="button">Manage Linked Accounts</button>
                  <button className="button">Delete Account</button>
                </div>
              </section>

              {/* Notification Settings */}
              <section className="settings-section">
                <h2>Notification Settings</h2>
                <div className="notification-options">
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
                </div>
              </section>
            </div>

            <div className="right-column">
              {/* Application Preferences */}
              <section className="settings-section">
                <h2>Application Preferences</h2>
                <label>
                  Preferred Career Fields
                  <select
                    className="select"
                    name="preferredCareerField"
                    value={settings.preferredCareerField}
                    onChange={handleChange}
                  >
                    <option value="IT">IT</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Business">Business</option>
                  </select>
                </label>
                <br/>
                <label>
                  Language & Region
                  <select
                    className="select"
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
                <br/>
                <label>
                  Theme Mode
                  <select
                    className="select"
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
                <div className="button-group">
                  <button className="button">FAQs</button>
                  <button className="button">Contact Support</button>
                  <button className="button">Report a Problem</button>
                  <button className="button">Feedback & Suggestions</button>
                </div>
              </section>

              {/* Legal & Policies */}
              <section className="settings-section">
                <h2>Legal & Policies</h2>
                <div className="button-group">
                  <button className="button">Terms of Service</button>
                  <button className="button">Privacy Policy</button>
                  <button className="button">Cookie Preferences</button>
                </div>
              </section>

              <button className="save-button" onClick={handleSave}>
                Save Settings
              </button>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Setting;