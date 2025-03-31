import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaEye, FaEyeSlash, FaTwitter, FaFacebook } from 'react-icons/fa';
import image from '../Images/Signup.jpeg';
import '../style/Signup.css';


const Signup = () => {
    const [formData, setFormData] = useState({
        userName: '',
        userEmailId: '',
        userPassword: ''
    });

    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8080/api/users/signup', formData);
            navigate('/login');
        } catch (err) {
          const errorMessage = err.response?.data?.message || "Registration failed";
          setError(errorMessage);
        }
    };

    return (
      <div className="signup">
        <div className="signup-page">
            <div className="main-container">
                {/* Left Side: Image Section */}
                <div className="image-container">
                    <img src={image} alt="Signup" />
                    <h2>Welcome Page</h2>
                    <p>Sign in to continue access</p>
                </div>

                {/* Right Side: Form Section */}
                <div className="form-container">
                    <h2>Sign Up</h2>
                    {error && <div className="error-message">{error}</div>}
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="User Name"
                            required
                            onChange={(e) => setFormData({...formData, userName: e.target.value})}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            required
                            onChange={(e) => setFormData({...formData, userEmailId: e.target.value})}
                        />
                        <div className="password-container">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                required
                                onChange={(e) => setFormData({...formData, userPassword: e.target.value})}
                            />
                            <span onClick={togglePasswordVisibility} className="toggle-password">
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                        <button type="submit">Sign Up</button>
                    </form>

                    
                    <p>Already have an account? <a href="/login">Click here</a></p>
                </div>
            </div>
        </div>

       
        </div>
    );
};

export default Signup; 