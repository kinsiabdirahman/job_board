import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import "./Login.css";

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
        history.push("/");
      } else {
        window.alert("Login failed. Invalid credentials");
      }
    } catch (error) {
      console.error("Error:", error);
      window.alert("An error occurred while processing your request");
    }
  };

  return (
    <>
      <div className="setup">
        <div className="login-container">
          <h3>Log In</h3>
          <div className="form-container">
            <form
              className="register-form form-container"
              onSubmit={(e) => handleSubmit(e)}
            >
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
        </div>
      </div>
    </>
  );
};

export default LoginForm;
