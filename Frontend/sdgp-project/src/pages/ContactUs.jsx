import React, {useRef} from "react";
import ContactImage from "../Images/ContactImg.jpg"
import "../style/ContactUs.css";
import Swal from 'sweetalert2'

const ContactUs = () => {

  const formRef = useRef(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "aa6aac01-1965-48bb-91f5-d03ee05623df");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const res = await response.json();

      if (res.success) {
        Swal.fire({
          title: "Success!",
          text: "Message sent successfully!",
          icon: "success",
        });

        // Reset the form after successful submission
        formRef.current.reset();
      } else {
        Swal.fire({
          title: "Error!",
          text: res.message || "Something went wrong. Please try again.",
          icon: "error",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Network Error!",
        text: "Unable to send the message. Please check your internet connection.",
        icon: "error",
      });
    }
  };

  return (
    <div className="contact-container">
      {/* Left Section - Image + Contact Details */}
      <div className="contact-left">
        <img src={ContactImage} alt="Contact" className="contact-image" />
        <div className="contact-details">
          <div className="info-box">
            <span className="icon">✉️</span>
            <div>
              <h4>Email</h4>
              <p>professional.odyssey.lk@gmail.com</p>
            </div>
          </div>
          <div className="info-box">
            <span className="icon">📞</span>
            <div>
              <h4>Phone</h4>
              <p>+91 (555) 123-4567</p>
            </div>
          </div>
          <div className="info-box">
            <span className="icon">🔗</span>
            <div>
              <h4>LinkedIn</h4>
              <p>www.linkedin.com/in/professional-odyssey</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Contact Form */}
      <div className="contact-right">
        <h2>Contact Us</h2>
        <form  ref={formRef} onSubmit={onSubmit}>
          <div className="input-box">
            <input type="text" placeholder="Name" name="name" required />
          </div>
          <div className="input-box">
            <input type="email" placeholder="Email" name="email" required />
          </div>
          <div className="input-box">
            <textarea placeholder="Message" name="message" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

    




  
  
export default ContactUs;