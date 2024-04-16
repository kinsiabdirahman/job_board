
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">JobApp</div>
      <div className='Navlinks'>
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/about" className="nav-link">About Us</Link>
      <Link to="/contact" className="nav-link">Contact Us</Link>
      </div>

    </nav>
  );
}

export default NavBar;
