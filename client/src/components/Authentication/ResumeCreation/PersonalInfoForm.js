import React, { useEffect, useState } from 'react'
import "../../../assets/css/formcv.css"
import axios from 'axios';

const PersonalInfoForm = () => {

  const [jobTitle, setJobTitle] = useState("");
  const [fName, setFName] = useState("")
  const [lName, setLName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  useEffect(() => {


  }, [])

  const handleJobTitleChange = (event) => {
    setJobTitle(event.target.value);
  };

  const handleFirstNameChange = (event) => {
    setFName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let personalInfo = {
      firstName: fName,
      lastName: lName,
      job_title: jobTitle,
      email: email,
      phone: phone,
    };
    

    console.log(personalInfo)

    try {
      const response = await axios.post('http://localhost:8080/api/createCv', { personal_info: personalInfo });

      console.log(response.data);
      // reset form fields if necessary
    } catch (error) {
      console.error(error);
      // handle error
    }
  };

  return (
    <div className="container">
      <form id="contact" action method="post">
        <h3>Personal Information</h3>
        <h4>Fill the resume with your personal information</h4>
        <fieldset>
          <input
            placeholder="Job title"
            type="text"
            value={jobTitle}
            onChange={handleJobTitleChange}
            tabIndex={1}
            required
            autoFocus
          />
        </fieldset>
        <fieldset>
          <input
            className="name"
            placeholder="First name"
            type="text"
            value={fName}
            onChange={handleFirstNameChange}
            tabIndex={2}
            required
          />
        </fieldset>
        <fieldset>
          <input
            className="name"
            placeholder="Last name"
            type="text"
            value={lName}
            onChange={handleLastNameChange}
            tabIndex={3}
            required
          />
        </fieldset>
        <fieldset>
          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            tabIndex={4}
            required
          />
        </fieldset>
        <fieldset>
          <textarea placeholder="Phone." value={phone} onChange={handlePhoneChange} tabIndex={5} required />
        </fieldset>
        <fieldset>
          <button name="submit" type="submit" id="contact-submit" data-submit="...Sending" onClick={handleSubmit}>
            Done
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default PersonalInfoForm