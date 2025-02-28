import React from 'react';
import '../style/Signup.css';

const Signup = () => {
  return (
    <div className='signup'>
    <div style={{ padding: '20px' }}>
      <h2>Signup</h2>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" placeholder="Enter your name" required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" placeholder="Enter your email" required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" placeholder="Enter your password" required />
        </div>
        <button type="submit" style={{ marginTop: '10px' }}>Signup</button>
      </form>
    </div>
    </div>
  );
};

export default Signup;
