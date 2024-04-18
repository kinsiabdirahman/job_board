import React, { useState, useEffect } from "react";
import ApplicationForm from "./ApplicationForm";
import "./JobDescription.css";

const JobDescription = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJobId, setSelectedJobId] = useState(null);

  useEffect(() => {
    // Fetch jobs data from an API or any other source
    // For demonstration purposes, we initialize an empty array
    setJobs([]);
  }, []);

  const applyForJob = (jobId) => {
    setSelectedJobId((prevId) => (prevId === jobId ? null : jobId));
  };

  return (
    <div>
      <h2 className="job-title">Available Jobs</h2>
      {jobs.map((job) => (
        <div key={job.id} className="job-listing">
          <h3 className="job-title">{job.title}</h3>
          <p className="job-details">
            <strong>Minimum Qualifications:</strong> <br />
            {job.minQualifications}
          </p>
          <p className="job-details">
            <strong>Responsibilities:</strong> <br />
            {job.responsibilities}
          </p>
          <button className="apply-button" onClick={() => applyForJob(job.id)}>
            Apply
          </button>
          {selectedJobId === job.id && <ApplicationForm jobId={job.id} />}
        </div>
      ))}
    </div>
  );
};

export default JobDescription;
