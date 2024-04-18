import React from "react";
import "./Careers.css";

const Careers = () => {
  return (
    <div className="careers-container">
      <h1>Join Our Team</h1>
      <p>
        We're always looking for talented individuals to join our team and contribute to our mission. If you're passionate about [describe your industry or mission], we'd love to hear from you.
      </p>
      
      <h2>Current Openings</h2>
      <div className="job-listings">
        <div className="job-item">
          <h3>Software Engineer</h3>
          <p>
            We're seeking a motivated software engineer to work on cutting-edge projects. If you have experience with [relevant technologies or skills], apply today!
          </p>
          <button>Apply Now</button>
        </div>

        <div className="job-item">
          <h3>Marketing Specialist</h3>
          <p>
            Do you have a passion for digital marketing and growth strategies? Join our marketing team and help us reach new heights.
          </p>
          <button>Apply Now</button>
        </div>

        {/* Add more job listings here as needed */}
      </div>
      
      <p className="contact-info">
        For inquiries and applications, please contact us at <a href="mailto:careers@example.com">careers@example.com</a>.
      </p>
    </div>
  );
};

export default Careers;
