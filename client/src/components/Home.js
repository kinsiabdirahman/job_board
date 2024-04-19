import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "./Home.css";
import { Link, useHistory } from "react-router-dom";
import image1 from "./images/image1.png";

function Home() {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const history = useHistory();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("http://localhost:5555/jobs");
        if (!response.ok) {
          throw new Error("Failed to fetch jobs");
        }
        const data = await response.json();
        const jobsWithDetails = data.map((job) => {
          return {
            ...job,
            job_description: job.job_description || "",
            job_responsibilities: job.job_responsibilities || "",
            minQualifications: job.minQualifications || "",
            responsibilities: job.responsibilities || "",
          };
        });
        setJobs(jobsWithDetails);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  const filteredJobs = jobs.filter((job) => {
    return job.job_title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const applyForJob = (job) => {
    const jobDetails = {
      id: job.id,
      job_title: job.job_title,
      location: job.location,
      job_salary: job.job_salary,
      job_description: job.job_description,
      job_responsibilities: job.job_responsibilities,
      minQualifications: job.minQualifications,
      responsibilities: job.responsibilities,
    };

    history.push({
      pathname: `/job/${job.id}`,
      state: { job: jobDetails },
    });
  };
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <div className="hero-container">
          <img src={image1} alt="Hero Image" className="hero-image" />
          <div className="text-container">
            <h1 className="hero-caption">Find your dream job</h1>
            <p className="hero-paragraph">
              Looking for jobs? Start exploring instantly today!
            </p>
            <div className="hero-button">
              <button>Explore</button>
            </div>
          </div>
          <div className="links">
            <Link to="/" className="v-link">
              Explore
            </Link>
            <Link to="/explore" className="v-link">
              Applied
            </Link>
            <Link to="/saved" className="v-link">
              Saved
            </Link>
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
      <div className="h3-title">
        <h2>Featured Jobs</h2>
      </div>
      <div className="jobs-container">
        <div className="job-items">
          {filteredJobs.map((job) => (
            <div key={job.id} className="job-item">
              <h3>{job.job_title}</h3>
              <p>Location: {job.location}</p>
              <p>Salary: {job.job_salary}</p>

              <button onClick={() => applyForJob(job)}>Apply Now</button>
            </div>
          ))}
          {filteredJobs.length === 0 && <p>No jobs found.</p>}
        </div>
      </div>
    </div>
  );
}

export default Home;
