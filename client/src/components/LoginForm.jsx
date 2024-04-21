import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import "./Login.css";
import loginImage from "../assets/login.jpeg";
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from './AuthContext'; 
import './Login.css'
import loginImage from '../assets/login.jpeg';

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5555/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (response.status === 200) {
        const data = await response.json();
        localStorage.setItem("access_token", data.access_token);
        window.alert("Login successful");
        history.push("/Home"); // Redirect to Home.jsx upon successful login
      } else {
        window.alert("Login failed. Invalid credentials");
      }
    } catch (error) {
      console.error("Error:", error);
      window.alert("An error occurred while processing your request");
    }
  };

  return (
    <div className="bckg">
      <div className="register-container">
        <div className="image-container">
          <img src={loginImage} alt="login" className="login-image" />
        </div>
          <div className="form-container">
            <form className="register-form form-container" onSubmit={(e) => handleSubmit(e)}>
            <h2>Welcome Back!</h2>
          <h4>please enter your details</h4>
              <label htmlFor="username" className="label">
                Username
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="input" // Apply input styling
                />
              </label>
              <label htmlFor="password" className="label">
                Password
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="input" // Apply input styling
                />
              </label>
              <button type="submit" className="button">
                Log in
              </button>
            </form>
            <p>
              Don't have an account?{" "}
              <NavLink to="/register" className="link">
                <strong>Sign Up here</strong>
              </NavLink>
            </p>
          </div>
    <div className="setup">
      <div className="login-container">
         <div className="image-container">
          <img src={loginImage} alt="Login" className="login-image" />
        </div>  
        <div className="form-container">
          <form className="register-form form-container" onSubmit={(e) => handleLogin(e)}>
          <h2>Welcome Back!</h2>
          <h4>Please enter your details!</h4>
            <label htmlFor="username" className="label">
              Username
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)} 
                type="text"
                placeholder="Enter Username"
                id="username"
                name="username"
                className="input"
              />
            </label>
            <label htmlFor="password" className="label"> 
              Password
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Enter Password"
                id="password"
                name="password"
                className="input"
              />
            </label>
            <button type="submit" className="button">Log in</button>
          </form>
          <p>
            Don't have an account? <Link to="/signup" className='link'> <strong>Sign Up here</strong></Link>
          </p>
          {message && <p className="error-message">{message}</p>}
        </div>
      </div>
    </>
  );
};

export default LoginForm;
