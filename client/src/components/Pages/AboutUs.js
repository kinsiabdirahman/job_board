import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="page-container">
      <NavBar />
      <section className="about-section">
        <h2>About Us</h2>
        <div className="paragraph-container">
          <p className="paragraph-text">
            Welcome to JobApp, where culinary innovation meets delightful
            experiences! At JobApp, we take pride in curating a culinary journey
            that transcends traditional job seeking. Our commitment to quality
            jobs, expertise, and our passion to deliver quality jobs is
            unmatched. We are a passionate team dedicated to providing jobs for
            job seekers. Discover a symphony of jobs as our team artfully blend
            diverse roles, creating a menu that caters to every seeker. JobApp
            isn't just a website; it's an exploration of excellence, a place
            where experience meets jobs.
            <br />
            <span>
              Join us at JobApp, where every job tells a story, and every
              employed success is a celebration.
            </span>
          </p>
        </div>
      </section>

      <div className="map-container">
        <h2>Our Location</h2>
        <iframe
          title="Maps"
          src="https://api.maptiler.com/maps/fe7da9bc-0ca3-4ea0-8090-a93c5d514a09/?key=spPhAOyghywnutBw51qW#12.0/-1.3024715/36.7103707"
          width="100%"
          height="700px"
        ></iframe>
        <div className="marker"></div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
