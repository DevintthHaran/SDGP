import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <Link to="/login">Go to Login</Link>
      <Link to="/signup">Go to Signup</Link>
      <Link to="/careerassessment">Go to Career Assessment</Link>
      <Link to="/shop">Go to Shop</Link> {/* Link to navigate to Shop page */}
      <Link to="/order">Go to Order</Link>
      <Link to="/subscription">Go to subscription</Link>
      <Link to="/meeting">Go to meeting page</Link>
      <Link to="/question">Go to Question</Link>
      <Link to="/chat">Go to Chat</Link>
      <Link to="/setting">Go to setting page</Link>

      <Link to="/feedback">Go to feedback page</Link>



      


    </div>
  );
}

export default HomePage;
