import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar";
import Footer from "../Footer";
import "./Careers.css";

const Careers = () => {
  return (
    <div className="careers-container">
      <NavBar />
      <div className="content">
        <h1>Join Our Team</h1>
        <p className="intro">
          We're always looking for talented individuals to join our team and
          contribute to our mission. If you're passionate about making our
          website better, we'd love to hear from you.
        </p>

        <h2>Current Openings</h2>
        <div className="job-listings">
          <div className="job-item">
            <h3>Software Engineer</h3>
            <p>
              We're seeking a motivated software engineer to work on
              cutting-edge projects. If you have experience with [relevant
              technologies or skills], apply today!
            </p>
            <button className="apply-btn">Apply Now</button>
          </div>

          <div className="job-item">
            <h3>Cloud Solutions Architect</h3>
            <p>
              We're seeking a cloud solution architect skilled in AWS, Azure, or
              Google Cloud.
            </p>
            <button className="apply-btn">Apply Now</button>
          </div>

        </div>

        <p className="contact-info">
          For inquiries and applications, please contact us at{" "}

        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Careers;
