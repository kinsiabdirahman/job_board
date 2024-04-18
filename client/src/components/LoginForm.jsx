import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from './AuthContext'; 
import './Login.css'
import loginImage from '../assets/login.jpeg';

const LoginForm = () => {
  const { isAuthenticated, login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [redirecting, setRedirecting] = useState(false);
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
        credentials: 'include', 
      });

      if (response.ok) {
        const data = await response.json();
        setMessage(data.message);
       
        setRedirecting(true);
        login(); 
      } else {
        const data = await response.json();
        setMessage(data.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
      setMessage('An error occurred during login.');
    }
  };

  useEffect(() => {
    if (isAuthenticated && redirecting) {
      setRedirecting(false);
      history.push('/');
    }
  }, [isAuthenticated, redirecting, history]);

  return (
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
    </div>
  );
};

  export default LoginForm;

  