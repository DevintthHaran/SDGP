import React from 'react';
import '../style/Login.css';

const Login = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Login</h2>
      <form>
        <div>
          <label>Email:</label>
          <input type="email" placeholder="Enter your email" required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" placeholder="Enter your password" required />
        </div>
        <button type="submit" style={{ marginTop: '10px' }}>Login</button>
      </form>
    </div>
  );
};

export default Login;
