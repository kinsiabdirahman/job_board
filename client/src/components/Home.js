import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import './Home.css';
import { Link } from 'react-router-dom';
import image1 from './images/image1.png';

function Home() {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Simulating fetching data from an API (replace with actual fetch logic)
  useEffect(() => {
    const fetchJobs = async () => {
      // Example dummy job data (replace this with actual API fetch logic)
      const dummyJobs = [
        { id: 1, title: "Software Engineer", company: "Tech Co.", location: "Remote" },
        { id: 2, title: "Marketing Specialist", company: "Digital Marketing Inc.", location: "New York" },
        { id: 3, title: "Data Analyst", company: "Data Analytics Solutions", location: "San Francisco" },
        { id: 4, title: "Software Engineer", company: "Tech Co.", location: "Remote" },
        { id: 5, title: "Marketing Specialist", company: "Digital Marketing Inc.", location: "New York" },
        { id: 6, title: "Data Analyst", company: "Data Analytics Solutions", location: "San Francisco" }
      ];

      setJobs(dummyJobs);
    };

    fetchJobs();
  }, []);

  // Filter jobs based on search term
  const filteredJobs = jobs.filter(job => {
    const { title } = job;
    return title.toLowerCase().includes(searchTerm.toLowerCase());
  });

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
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </header>
      <div className='h3-title'>
      <h2>Featured Jobs</h2>
      </div>
      <div className="jobs-container">
        <div className="job-items">
          {filteredJobs.map((job) => (
            <div key={job.id} className="job-item">
              <h3>{job.title}</h3>
              <p><strong>Company:</strong> {job.company}</p>
              <p><strong>Location:</strong> {job.location}</p>
              <button>Apply Now</button>
            </div>
          ))}
          
          {filteredJobs.length === 0 && (
            <p>No jobs found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
