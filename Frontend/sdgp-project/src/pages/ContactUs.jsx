import React from "react";
import ContactImage from "../Images/Contactus.png";
import "../style/ContactUs.css";

const ContactUs = () => {
  
  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2>Contact Us</h2>
       
        <form>
          <div className="input-box">
            <input type="text" placeholder="Name" required />
          </div>
          <div className="input-box">
            <input type="email" placeholder="Email" required />
          </div>
          <div className="input-box">
            <textarea placeholder="Message" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
      <div className="contact-image">
        <img src={ContactImage} alt="Contact Illustration" />
      </div>
    </div>
  );
};

export default ContactUs;