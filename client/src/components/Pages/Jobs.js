import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import NavBar from "../NavBar";
import Footer from "../Footer"
import './Jobs.css';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(18); // Number of jobs per page (3 columns x 6 rows)
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchJobs = async () => {

      const dummyJobs = [
        { id: 1, title: "Software Engineer", company: "Tech Co.", location: "Nairobi" },
        { id: 2, title: "Cloud Engineer", company: "Pioneer Inc", location: "Nairobi" },
        { id: 3, title: "Data Analyst", company: "Data Analytics Solutions", location: "Nairobi" },
        // Add more jobs here if needed
      ];

      setJobs(dummyJobs);
    };

    fetchJobs();
  }, []);

  // Pagination
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  // Change page
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className="jobs-section">
      <NavBar />
      <div className="explore-container">
        <h1>Explore Jobs</h1>
        {/* Search bar */}
        <input
          type="text"
          placeholder="Search by job title or role"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="jobs-grid">
        {currentJobs.map((job) => (
          <div key={job.id} className="job-card">
            <h2>{job.title}</h2>
            <p><strong>Company:</strong> {job.company}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <button>Apply Now</button>
          </div>
        ))}

        {filteredJobs.length === 0 && (
          <p>No jobs found.</p>
        )}

        {/* Pagination buttons */}
        <div className="pagination">
          {currentPage > 1 && (
            <button onClick={prevPage}>Previous</button>
          )}
          {currentJobs.length === jobsPerPage && (
            <button onClick={nextPage}>Next</button>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Jobs;
