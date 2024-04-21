import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./ApplicationForm.css";

const ApplicationForm = ({ jobId }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");
  const [aboutYourself, setAboutYourself] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting application for job with ID:", jobId);
    // Send form data to the server
    fetch("http://localhost:5555/applications", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        job_id: jobId,
        first_name: firstName,
        last_name: lastName,
        highest_qualification: education,
        years_of_experience: experience,
        academic_history: aboutYourself,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert("Application saved successfully!");
        // Redirect to the home page
        history.push("/home");
      })
      .catch((error) => console.error("Error submitting application:", error));
    // Clear form fields
    setFirstName("");
    setLastName("");
    setEducation("");
    setExperience("");
    setAboutYourself("");
  };

  return (
    <div className="application-form-page">
    <div className="application-form-container">
      <h2>Application Form</h2>
      <form className="application-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="education">Education:</label>
          <select
            id="education"
            name="education"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
          >
            <option value="" disabled>
              -- Select One --
            </option>
            <option value="High School">High School</option>
            <option value="Bachelor's degree">Bachelor's degree</option>
            <option value="Master's degree">Master's degree</option>
            <option value="Doctorate degree">Doctorate degree</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="experience">Years of Experience:</label>
          <input
            type="number"
            id="experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="aboutYourself">About Yourself:</label>
          <textarea
            id="aboutYourself"
            value={aboutYourself}
            onChange={(e) => setAboutYourself(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default ApplicationForm;
