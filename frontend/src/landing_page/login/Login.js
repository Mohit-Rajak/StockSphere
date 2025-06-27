import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:9000/login", formData);
      localStorage.setItem("token", res.data.token);
      console.log("Sending login data:", formData);
      alert("Login Successful!");
      window.location.href = "http://localhost:3000/";
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="welcome-text">Welcome Back!</h2>
        <p className="sub-text">Login to continue your journey</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <FaUser className="input-icon" />
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              required
              onChange={handleChange}
            />
          </div>

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

          <button type="submit" className="login-btn">Login</button>
        </form>

        <p className="register-link">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
