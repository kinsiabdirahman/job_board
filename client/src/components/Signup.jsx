import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from './AuthContext'; 
import './SignupForm.css' // Include the CSS file
import signupImage from '../assets/signup.jpeg';

const SignupForm = () => {
  const { isAuthenticated, login } = useAuth();
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
    if (isAuthenticated && redirecting) {
      setRedirecting(false);
      history.push('/');
    }
  }, [isAuthenticated, redirecting, history]);

  if (isAuthenticated) {
    return null; 
  }

  return (
    <div className='setup'>
      <div className="register-container dark-mode">
        <div className="image-container">
          <img src={signupImage} alt="signup" className="signup-image" />
        </div> 
        <form className="register-form form-container" onSubmit={(e) => handleRegister(e)}>
        <h4>Create an Account to get started</h4>
        <h2>Getting Started</h2>
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
        {/* <p>
          Already have an account? <Link to="/login" className='link'><strong>Log in here</strong></Link>
        </p>
        {message && <p className="error-message">{message}</p>} */}
      </div>
    </div>
  );
};

export default SignupForm;
