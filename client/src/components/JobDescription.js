import React, { useState, useEffect } from "react";
import "./JobDescription.css";
import { useLocation, Link } from "react-router-dom";

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
    <div>
      <div className="job-details-container">
        <h2 className="job-title">{job.job_title}</h2>
        <p className="job-details">Location: {job.location}</p>
        <p className="job-details">Salary: {job.job_salary}</p>
        <p className="job-details">Salary: {job.job_responsibilities}</p>
        <p className="job-details">
          <strong>Job Description:</strong> <br />
          {job.job_description}
        </p>
        <p className="job-details">
          <strong>Responsibilities:</strong> <br />
          {job.job_responsibilities}
        </p>
        <Link to={`/apply/${job.id}`} className="apply-button">
          Apply Now
        </Link>
      </div>
    </div>
  );
};

export default JobDescription;
