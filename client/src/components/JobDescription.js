import React, { useState, useEffect } from "react";
import "./JobDescription.css";
import { useLocation, Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";

const JobDescription = () => {
  const [job, setJob] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.job) {
      setJob(location.state.job);
    }
  }, [location.state]);

  if (!job) {
    return <p>Loading...</p>;
  }

  return (
    <div className="job-details-container">
      <h2 className="job-title">{job.job_title}</h2>
      <p className="job-details">
        <FaMapMarkerAlt className="icon" /> {job.location}
      </p>
      <p className="job-details">Salary: {job.job_salary}</p>
      <div className="apply-button-wrapper">
        <Link to={`/apply/${job.id}`} className="apply-button">
          Apply Now
        </Link>
      </div>
      <div className="separator-line"></div>
      <div className="job-details-text">
        <p>
          <strong>Job Description:</strong>
        </p>
        <p>{job.job_description}</p>
      </div>
      <div className="separator-line"></div>
      <div className="job-details-text">
        <p>
          <strong>Responsibilities:</strong>
        </p>
        <p>{job.job_responsibilities}</p>
      </div>
    </div>
  );
};

export default JobDescription;
