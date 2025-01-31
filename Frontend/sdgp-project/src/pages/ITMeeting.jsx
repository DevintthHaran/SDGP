import React, { useEffect } from 'react';

const ITMeeting = () => {
  const redirectToGoogleBooking = () => {
    // Save a flag to indicate the user is about to leave for booking
    localStorage.setItem('isBooking', 'true');
    // Replace this URL with your actual Google Calendar booking page URL
    const googleBookingLink = "";
    window.open(googleBookingLink, "_blank");
  };

  // Check if the booking flag is set when the component mounts
  useEffect(() => {
    const isBooking = localStorage.getItem('isBooking');

    if (isBooking) {
      // Show success message if the user was in the booking flow
      //alert("Successful booking!");
      // Remove the flag after showing the alert
      localStorage.removeItem('isBooking');
    }
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Schedule an IT Meeting</h2>
      <button onClick={redirectToGoogleBooking} style={buttonStyle}>
        Book a Meeting
      </button>
    </div>
  );
};

// Optional: Inline style for the button
const buttonStyle = {
  backgroundColor: '#007BFF',
  color: '#fff',
  padding: '10px 20px',
  fontSize: '16px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default ITMeeting;
