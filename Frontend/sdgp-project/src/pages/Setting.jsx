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
    theme: localStorage.getItem("theme") || "Light",
  });

  const [showFAQs, setShowFAQs] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showCookieBanner, setShowCookieBanner] = useState(!Cookies.get("cookiesAccepted"));
  const [cookiePreferences, setCookiePreferences] = useState({
    analytics: Cookies.get("analytics") === "true",
    marketing: Cookies.get("marketing") === "true",
    essential: true, // Essential cookies are always enabled
  });

  useEffect(() => {
    document.body.className = settings.theme.toLowerCase();
    localStorage.setItem("theme", settings.theme);
  }, [settings.theme]);

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

  const handleDeleteAccount = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete your account? This action cannot be undone.");

    if (confirmDelete) {
      try {
        const response = await fetch("http://localhost:8080/api/users/delete", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });

        if (response.ok) {
          alert("Account deleted successfully!");
          localStorage.clear();
          sessionStorage.clear();
          window.location.href = "/login";
        } else {
          alert("Failed to delete the account.");
        }
      } catch (error) {
        console.error("Error deleting account:", error);
        alert("Something went wrong. Please try again later.");
      }
    }
  };

  const handleCookieChange = (e) => {
    const { name, checked } = e.target;
    setCookiePreferences((prev) => ({
      ...prev,
      [name]: checked,
    }));
    Cookies.set(name, checked, { expires: 365 });
  };

  const acceptCookies = () => {
    Cookies.set("cookiesAccepted", "true", { expires: 365 });
    setShowCookieBanner(false);
  };

  return (
    <>
      <Header />
      <div className="settings-page">
        <header className="header">
          <h1>Settings</h1>
        </header>
        <main className="main-content">
          <div className="settings-container">
            {/* Account Settings */}
            <section className="settings-section">
              <h2>Account Settings</h2>
              <div className="button-group">
                <button className="button button-secondary"><span>Edit Profile</span></button>
                <button className="button button-secondary"><span>Change Password</span></button>
                <button onClick={handleDeleteAccount} className="button button-danger"><span>Delete Account</span></button>
              </div>
            </section>

            {/* Notification Settings */}
            <section className="settings-section">
              <h2>Notification Settings</h2>
              <div className="settings-item">
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    name="careerAlerts"
                    checked={settings.careerAlerts}
                    onChange={handleChange}
                    className="custom-checkbox"
                  />
                  <label>Career Alerts & Job Updates</label>
                </div>
              </div>
              <div className="settings-item">
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    name="resumeFeedback"
                    checked={settings.resumeFeedback}
                    onChange={handleChange}
                    className="custom-checkbox"
                  />
                  <label>Resume Feedback Notifications</label>
                </div>
              </div>
              <div className="settings-item">
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    name="eventReminders"
                    checked={settings.eventReminders}
                    onChange={handleChange}
                    className="custom-checkbox"
                  />
                  <label>Event & Webinar Reminders</label>
                </div>
              </div>
              <div className="settings-item">
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    name="emailPreferences"
                    checked={settings.emailPreferences}
                    onChange={handleChange}
                    className="custom-checkbox"
                  />
                  <label>Email Preferences (Subscribe/Unsubscribe)</label>
                </div>
              </div>
            </section>

            {/* Application Preferences */}
            <section className="settings-section">
              <h2>Application Preferences</h2>
              <div className="settings-item">
                <label>Preferred Career Fields</label>
                <select
                  name="preferredCareerField"
                  value={settings.preferredCareerField}
                  onChange={handleChange}
                >
                  <option value="IT">IT</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Business">Business</option>
                </select>
              </div>
              <div className="settings-item">
                <label>Language & Region</label>
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
              </div>
              <div className="settings-item">
                <label>Theme Mode</label>
                <select
                  name="theme"
                  value={settings.theme}
                  onChange={handleChange}
                >
                  <option value="Light">Light</option>
                  <option value="Dark">Dark</option>
                </select>
              </div>
            </section>

            {/* Help & Support */}
            <section className="settings-section">
              <h2>Help & Support</h2>
              <div className="button-group">
                <button onClick={() => setShowFAQs(!showFAQs)} className="button button-secondary">
                  <span>FAQs</span>
                </button>
                <button className="button button-secondary"><span>Contact Support</span></button>
                <button className="button button-secondary"><span>Report a Problem</span></button>
                <button className="button button-secondary"><span>Feedback & Suggestions</span></button>
              </div>
            </section>

            {/* Show FAQs when button is clicked */}
            {showFAQs && (
              <section className="faq-section">
                <h2>Frequently Asked Questions</h2>
                {FAQs.map((faq, index) => (
                  <div key={index} className="faq-item">
                    <h3 className="faq-question">{faq.question}</h3>
                    <p className="faq-answer">{faq.answer}</p>
                  </div>
                ))}
              </section>
            )}

            {/* Legal & Policies */}
            <section className="settings-section">
              <h2>Legal & Policies</h2>
              <div className="button-group">
                <button onClick={() => setShowTerms(!showTerms)} className="button button-secondary">
                  <span>Terms of Service</span>
                </button>
                <button onClick={() => setShowPrivacy(!showPrivacy)} className="button button-secondary">
                  <span>Privacy Policy</span>
                </button>
              </div>
              
              <div className="section-divider"></div>
              <h3>Cookie Preferences</h3>
              <div className="settings-item">
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    name="analytics"
                    checked={cookiePreferences.analytics}
                    onChange={handleCookieChange}
                    className="custom-checkbox"
                  />
                  <label>Enable Analytics Cookies</label>
                </div>
              </div>
              <div className="settings-item">
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    name="marketing"
                    checked={cookiePreferences.marketing}
                    onChange={handleCookieChange}
                    className="custom-checkbox"
                  />
                  <label>Enable Marketing Cookies</label>
                </div>
              </div>
              <p className="description">Essential cookies are always enabled to ensure the platform works properly.</p>
            </section>

            {showTerms && (
              <section className="terms-section">
                <h2>Terms of Service</h2>
                <p>{termsofService}</p>
              </section>
            )}

            {showPrivacy && (
              <section className="privacy-section">
                <h2>Privacy Policy</h2>
                <p>{privacyPolicy}</p>
              </section>
            )}

            <button className="save-button" onClick={handleSave}>
              <span>Save Settings</span>
            </button>
          </div>
        </main>
      </div>

      {showCookieBanner && (
        <div className="cookie-banner">
          <p className="cookie-text">We use cookies to improve your experience. You can manage your preferences in settings.</p>
          <div className="cookie-actions">
            <button onClick={acceptCookies} className="cookie-accept"><span>Accept</span></button>
          </div>
        </div>
      )}
      
      <Footer />
    </>
  );
};

export default Setting;