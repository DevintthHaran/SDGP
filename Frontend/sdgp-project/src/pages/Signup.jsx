import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../style/Signup.css';
import Header from '../components/Header';
import image from '../Images/1.1.jpg';

const Signup = () => {
  const [activeForm, setActiveForm] = useState("login");

  // Animation variants for the image
  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeInOut" } },
  };

  // Animation variants for the form
  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
  };

  return (
    <div className="signup-page">
      <Header />
      <div className="mainex-container">
        {/* Left Side: Image with Animation */}
        <motion.div
          className="imagex-container"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <img src={image} alt="Professional" className="side-image" />
        </motion.div>

        {/* Right Side: Login/Signup Form with Animation */}
        <motion.div
          className="log-container"
          initial="hidden"
          animate="visible"
          variants={formVariants}
          key={activeForm} // This ensures the animation retriggers when activeForm changes
        >
          <div className="log-buttons">
            <button
              className={activeForm === "login" ? "active-btn" : ""}
              onClick={() => setActiveForm("login")}
            >
              Login
            </button>
            <button
              className={activeForm === "signup" ? "active-btn" : ""}
              onClick={() => setActiveForm("signup")}
            >
              Sign Up
            </button>
          </div>

          <div className="log-form-container">
            {activeForm === "login" && (
              <form className="log-form">
                <h2>Login</h2>
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Login</button>
              </form>
            )}

            {activeForm === "signup" && (
              <form className="log-form">
                <h2>Sign Up</h2>
                <input type="text" placeholder="Full Name" required />
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Sign Up</button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Signup;