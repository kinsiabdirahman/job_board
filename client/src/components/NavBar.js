
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">JobApp</div>
      <div className='Navlinks'>
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/jobs" className="nav-link">Find Job</Link>
      <Link to="/careers" className="nav-link">Career Fair</Link>
      <Link to="/about" className="nav-link">About Us</Link>
      </div>

    </nav>
  );
}

export default NavBar;
