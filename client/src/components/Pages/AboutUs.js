import React from "react";
import "./AboutUs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AboutUs = () => {
  return (
    <div className="page-container">
      <section className="about-section">
        <h2>About Us</h2>
        <div className="paragraph-container">
          <p className="paragraph-text">
            Welcome to Mdishi, where culinary innovation meets delightful
            experiences! At Mdishi, we take pride in curating a culinary journey
            that transcends traditional dining. Our commitment to quality
            ingredients, expert craftsmanship, and a passion for flavor ensures
            each dish is a masterpiece. We are a passionate team dedicated to
            providing delicious and healthy food options. Discover a symphony of
            tastes as our chefs artfully blend diverse cuisines, creating a menu
            that caters to every palate. Mdishi isn't just a restaurant; it's an
            exploration of culinary excellence, a place where food becomes an
            experience.
            <br />
            <span>
              Join us at Mdishi, where every dish tells a story, and every meal
              is a celebration. Your extraordinary dining adventure awaits!
            </span>
          </p>
        </div>
      </section>

      <section>
        <div className="team-container">
          <div className="team-member">
            <img
              src="https://cdn.pixabay.com/photo/2017/02/16/23/10/smile-2072907_960_720.jpg"
              alt="Team Member 1"
            />
            <p>
              Calvis Marvis
              <br />
              CEO
            </p>
          </div>

          <div className="team-member">
            <img
              src="https://cdn.pixabay.com/photo/2017/12/17/08/12/girl-3023831_640.jpg"
              alt="Team Member 2"
            />
            <p>
              Jane Smith
              <br />
              Lead Developer
            </p>
          </div>

          <div className="team-member">
            <img
              src="https://cdn.pixabay.com/photo/2017/08/01/01/33/beanie-2562646_640.jpg"
              alt="Team Member 3"
            />
            <p>
              Mark Johnson
              <br />
              Chef
            </p>
          </div>

          <div className="team-member">
            <img
              src="https://cdn.pixabay.com/photo/2016/10/15/05/02/girls-1741925_640.jpg"
              alt="Team Member 4"
            />
            <p>
              Emily White
              <br />
              Marketing Specialist
            </p>
          </div>

          <div className="centered-team-member">
            <img
              src="https://cdn.pixabay.com/photo/2015/01/09/11/11/office-594132_640.jpg"
              alt="Team Member 5"
            />
            <p>
              Michael Brown
              <br />
              Designer
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Food App Image and Paragraph */}
      <section className="food-app-section">
        <img
          src="https://cdn.pixabay.com/photo/2016/03/23/15/00/ice-cream-1274894_640.jpg"
          alt="Food App"
        />
        <div>
          <h2>About Our Food App</h2>
          <div className="header-container">
            <h3 className="vision">Vision:</h3>
            <p>
              To revolutionize the culinary landscape by delivering an
              unparalleled digital dining experience.
            </p>

            <h3 className="mission">Mission:</h3>
            <p>
              To empower food lovers with a seamless and delightful journey of
              culinary exploration. We commit to providing a user-friendly
              platform that not only offers a diverse range of cuisines but also
              fosters a sense of community and discovery.
            </p>

            <h3 className="motto">Motto:</h3>
            <p>Elevating Tastes, Connecting Hearts.</p>
          </div>
        </div>
      </section>

      {/* Section 4: Achievements */}
      <section className="achievements-section">
        <h2>Our Achievements</h2>
        <div className="achievements-container">
          <div className="achievement">
            <img
              src="https://cdn.pixabay.com/photo/2012/02/28/10/20/coins-18134_640.jpg"
              alt="Achievement 1"
            />
            <p>Financial Achievements</p>
          </div>
          <div className="achievement">
            <img
              src="https://cdn.pixabay.com/photo/2015/07/28/22/05/child-865116_640.jpg"
              alt="Achievement 2"
            />
            <p>Learning Empowerment</p>
          </div>
          {/* Add more achievements as needed */}
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
        <div className="marker">
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
