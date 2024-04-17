// Home.js

import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import './Home.css';
import { Link } from 'react-router-dom';
import image1 from './images/image1.png';

function Home() {

  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <div className="hero-container">
          <img src={image1} alt="Hero Image" className="hero-image" />
          <div className="text-container">
            <h1 className="hero-caption">Find your dream job</h1>
            <p className="hero-paragraph">Looking for jobs? Start exploring instantly today!</p>
            <div className='hero-button'>
            <button>Explore</button>
          </div>
          </div>
          <div className='links'>
      <Link to="/" className="v-link">Explore</Link>
      <Link to="/explore" className="v-link">Applied</Link>
      <Link to="/saved" className="v-link">Saved</Link>
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by job title or role"
        />
      </div>
        </div>
      </header>
      <main>

        {/*Backend Connection i.e Job List*/}

      </main>
    </div>
  );
}

export default Home;
