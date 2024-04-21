import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './signup.css'; // Include the CSS file
import signupImage from '../assets/signup.jpeg';

const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [redirecting, setRedirecting] = useState(false);
  const history = useHistory();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
        credentials: 'include',
      });

      if (response.ok) {
        const data = await response.json();
        setMessage(data.message);
        setRedirecting(true);
      } else {
        const data = await response.json();
        setMessage(data.message);
      }
    } catch (error) {
      console.error('Error during registration:', error);
      setMessage('An error occurred during registration.');
    }
  };

  useEffect(() => {
    if (redirecting) {
      setRedirecting(false);
      history.push('/');
    }
  }, [redirecting, history]);

  return (
    <div className="setup">
      <div className="register-container">
        <div className="image-container">
          <img src={signupImage} alt="signup" className="signup-image" />
        </div> 
        <form className="form-container" onSubmit={(e) => handleRegister(e)}>
          <h1>Welcome Back!</h1>
          <h2>please enter your details!</h2>
          <label htmlFor="username" className="label">Username</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)} 
            type="text"
            placeholder="Enter Username"
            id="username"
            name="username"
            className="input"
          />
          <label htmlFor="email" className="label">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            type="email"
            placeholder="Enter Email"
            id="email"
            name="email"
            className="input"
          />
          <label htmlFor="password" className="label">Password</label> 
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter Password"
            id="password"
            name="password"
            className="input"
          />
          <button type="submit" className="button">Sign Up</button>
          <p>
          Already have an account? <Link to="/login" className='link'><strong>Log in here</strong></Link>
        </p>
        {message && <p className="error-message">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
