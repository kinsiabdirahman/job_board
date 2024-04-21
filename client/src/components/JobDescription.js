import React, { useState, useEffect } from "react";
import "./JobDescription.css";
import { useLocation, Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa"; // Import the Map Marker icon from Font Awesome

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
        <Link to={`/apply/${job.id}`} className="apply-button">
          Apply Now
        </Link>
        {/* Replace "Location" text with Map Marker icon */}
        <p className="job-details">
          <FaMapMarkerAlt /> {job.location}
        </p>
        <p className="job-details">Salary: {job.job_salary}</p>
        <p className="job-details">
          <strong>Job Description:</strong> <br />
          {job.job_description}
        </p>
        <p className="job-details">
          <strong>Responsibilities:</strong> <br />
          {job.job_responsibilities}
        </p>
      </div>
    </div>
  );
};

export default JobDescription;
