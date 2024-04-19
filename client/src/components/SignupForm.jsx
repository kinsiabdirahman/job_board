import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import "./signup.css";
import loginImage from "../assets/login.jpeg";

const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5555/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      if (response.status === 201) {
        window.alert("User registered successfully!");
        history.push("/login");
      } else {
        window.alert("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      window.alert("An error occurred while processing your request");
    }
  };

  return (
    <>
      <h2>Sign Up</h2>
      <div className="register-container">
        <div className="image-container">
          <img src={loginImage} alt="Login" className="login-image" />
        </div>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div>
              <label>Username:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Sign Up</button>
          </form>
          <p>
            Already have an account? <NavLink to="/login">Login</NavLink>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignupForm;