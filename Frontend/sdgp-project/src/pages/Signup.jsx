import React,{useState} from 'react';
import '../style/Signup.css';
import Header from '../components/Header';

const Signup = () => {

  const [activeForm, setActiveForm] = useState("login");
  return (
    <div>
      <Header />
    <div className="log-container">
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
    </div>
    </div>
  );
};

export default Signup;
