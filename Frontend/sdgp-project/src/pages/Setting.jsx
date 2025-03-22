import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import "../style/setting.css";
import Header from "../components/Header";
import Footer from "../components/Footer";


const FAQs = [
  { question: "What is this platform about?", answer: "This platform helps users explore career paths, receive job alerts, and get resume feedback." },
  { question: "Is this service free to use?", answer: "Yes! Basic features like job alerts and career suggestions are free." },
  { question: "How do I create an account?", answer: "Click the Sign Up button, fill in your details, and verify your email to start using the platform." },
];

const termsofService = `
Welcome to our Career Guidance Application. By using our services, you agree to abide by these terms and conditions.

1. **Acceptance of Terms**: By accessing and using our application, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.

2. **Use of Our Services**: You agree to use this platform solely for career guidance purposes. Any misuse, including but not limited to spamming, fraud, or sharing false information, is strictly prohibited.

3. **Privacy Policy**: Your personal data is collected and processed in accordance with our Privacy Policy. We do not sell or share your information with third parties without consent.

4. **Account Termination**: We reserve the right to terminate your account if you violate our policies or engage in any harmful activities on the platform.

5. **Changes to Terms**: We may update these terms from time to time. Continued use of the application after modifications means you accept the updated terms.
`;

const privacyPolicy = `
Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal data.

1. **Data Collection**: We collect personal data such as name, email, and preferences when you register and interact with our platform.
2. **Usage of Data**: Your data is used to personalize your experience, provide job alerts, and improve our services.
3. **Data Sharing**: We do not sell your personal data. It may be shared with trusted third parties only to provide our services.
4. **Security Measures**: We take reasonable precautions to protect your data from unauthorized access.
5. **Your Rights**: You can request to access, modify, or delete your personal data at any time.

By using our platform, you agree to this policy.
`;

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
