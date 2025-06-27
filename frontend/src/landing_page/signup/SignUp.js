import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaLock, FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // Toggle Password Visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:9000/signup", formData);
      alert(res.data.message || "Signup successful!");
      // Redirect to login after 1 second
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (err) {
      alert("SignUp Failed: " + (err.response?.data?.message || "Server Error"));
    }
  };

  return (
    <div className="signup-container mb-5">
      <div className="signup-box">
        <h2 className="welcome-text">Create an Account</h2>
        <p className="sub-text">Join us and start your journey</p>

        <form onSubmit={handleSubmit}>
          {/* Username Field */}
          <div className="input-group">
            <FaUser className="input-icon" />
            <input
              type="text"
              name="username"
              placeholder="Enter Username"
              required
              onChange={handleChange}
            />
          </div>

          {/* Email Field */}
          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              required
              onChange={handleChange}
            />
          </div>

          {/* Password Field */}
          <div className="input-group">
            <FaLock className="input-icon" />
            <input
              type={passwordVisible ? "text" : "password"}
              name="password"
              placeholder="Enter Password"
              required
              onChange={handleChange}
            />
            <span className="toggle-password" onClick={togglePasswordVisibility}>
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* Signup Button */}
          <button type="submit" className="signup-btn">Sign Up</button>
        </form>

        {/* Redirect to Login */}
        <p className="login-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
