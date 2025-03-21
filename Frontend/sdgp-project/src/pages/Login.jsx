import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaEye, FaEyeSlash, FaTwitter, FaFacebook } from 'react-icons/fa';
import image from '../Images/login.jpeg';
import '../style/Login.css';

const Login = () => {
    const [formData, setFormData] = useState({
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
            const response = await axios.post('http://localhost:8080/api/users/signin', formData);
            if (response.status === 200) {
                alert(response.data.message);
                navigate("/dashboard");
            }
        } catch (error) {
            setError(error.response?.data?.message || "Login failed!");
        }
    };

    return (
        <div className="login">
        <div className="login-page">
            <div className="main-container">
                {/* Left Side: Image Section */}
                <div className="image-container">
                    <img src={image} alt="Login" />
                    <h2>Welcome Back</h2>
                    <p>Login to continue access</p>
                </div>

                {/* Right Side: Form Section */}
                <div className="form-container">
                    <h2>Login</h2>
                    {error && <div className="error-message">{error}</div>}
                    <form onSubmit={handleSubmit}>
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
                        <button type="submit">Login</button>
                    </form>

                    <div className="social-login">
                        <button className="twitter-login"><FaTwitter /> Login with Twitter</button>
                        <button className="facebook-login"><FaFacebook /> Login with Facebook</button>
                    </div>

                    <p>Don't have an account? <a href="/signup">Sign Up</a></p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Login;
