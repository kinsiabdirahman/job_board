import React, { useState } from 'react';
import './ApplicationForm.css';

const ApplicationForm = ({ jobId }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [qualification, setQualification] = useState('');
  const [experience, setYearsOfExperience] = useState('');
  const [aboutYourself, setAboutYourself] = useState('');
  const [employmentHistory, setEmploymentHistory] = useState('');
  const [gender, setGender] = useState('');
  const [nationality, setNationality] = useState('');
  const [nationalId, setNationalId] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting application for job with ID:', jobId);
    setFirstName('');
    setLastName('');
    setQualification('');
    setYearsOfExperience('');
    setAboutYourself('');
    setEmploymentHistory('');
    setGender('');
    setNationality('');
    setNationalId('');
    setDateOfBirth('');
  };

  return (
    <div>
      <h2>Application Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <div className="input-container">
            <label htmlFor="firstName">First name</label>
            <input
              type='text'
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label htmlFor="lastName">Last name</label>
            <input
              type='text'
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div className="input-group">
          <div className="input-container">
            <label htmlFor="qualification">Highest qualification</label>
            <select
              id="qualification"
              value={qualification}
              onChange={(e) => setQualification(e.target.value)}
            >
              <option value="">Select qualification</option>
              <option value="High School">High School</option>
              <option value="Bachelor's Degree">Bachelor's Degree</option>
              <option value="Master's Degree">Master's Degree</option>
              <option value="Ph.D.">Ph.D.</option>
            </select>
          </div>
          <div className="input-container">
            <label htmlFor="experience">Years of experience</label>
            <input
              type='number'
              id="experience"
              value={experience}
              onChange={(e) => setYearsOfExperience(e.target.value)}
            />
          </div>
        </div>
        <div className="input-group">
          <div className="input-container">
            <label htmlFor="gender">Gender</label>
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Select gender</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="input-container">
            <label htmlFor="dateOfBirth">Date of Birth</label>
            <input
              type='date'
              id="dateOfBirth"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
            />
          </div>
        </div>
        <div className="input-group">
          <div className="input-container">
            <label htmlFor="nationality">Nationality</label>
            <select
              id="nationality"
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
            >
              <option value="">Select nationality</option>
              <option value="USA">United States</option>
              <option value="UK">United Kingdom</option>
              <option value="Canada">Canada</option>
              <option value="KENYA">Kenya</option>
              <option value="NIGERIA">Nigeria</option>
              <option value="UGANDA">Uganda</option>
            </select>
          </div>
          <div className="input-container">
            <label htmlFor="nationalId">National ID number</label>
            <input
              type='text'
              id="nationalId"
              value={nationalId}
              onChange={(e) => setNationalId(e.target.value)}
            />
          </div>
        </div>
        <div className="input-group">
          <div className="input-container">
            <label htmlFor="aboutYourself">Tell us more about yourself</label>
            <textarea
              id="aboutYourself"
              value={aboutYourself}
              onChange={(e) => setAboutYourself(e.target.value)}
            ></textarea>
          </div>
          <div className="input-container">
            <label htmlFor="employmentHistory">Employment History</label>
            <textarea
              id="employmentHistory"
              value={employmentHistory}
              onChange={(e) => setEmploymentHistory(e.target.value)}
            ></textarea>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ApplicationForm;