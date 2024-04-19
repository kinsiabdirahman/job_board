import React, { useState } from "react";
import "./ApplicationForm.css";


const ApplicationForm = ({ jobId }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");
  const [aboutYourself, setAboutYourself] = useState("");

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
    <div>
      <h2>Application Form</h2>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Personal Information</legend>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <legend>Education</legend>
          <select
            class="form-control dropdown"
            id="education"
            name="education"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
          >
            <option value="" selected="selected" disabled="disabled">
              -- select one --
            </option>
            <option value="High School">High School</option>
            <option value="Bachelor's degree">Bachelor's degree</option>
            <option value="Master's degree">Master's degree</option>
            <option value="Doctorate degree">Doctorate degree</option>
          </select>
        </fieldset>
        <fieldset>
          <legend>Experience</legend>
          <label htmlFor="experience">Years of Experience:</label>
          <input
            type="number"
            id="experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <legend>About Yourself</legend>
          <textarea
            id="aboutYourself"
            value={aboutYourself}
            onChange={(e) => setAboutYourself(e.target.value)}
          />
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ApplicationForm;
