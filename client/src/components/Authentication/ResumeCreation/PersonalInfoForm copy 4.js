import React from 'react'
import "../../../assets/css/formcv.css"

const SkillForm = () => {
  return (
    <div className="container">  
  <form id="contact" action method="post">
    <h3>Personal Information</h3>
    <h4>Fill the resume with your personal information</h4>
    <fieldset>
      <input placeholder="Job title" type="text" tabIndex={1} required autofocus />
    </fieldset>
    <fieldset>
      <input className="name" placeholder="First name" type="email" tabIndex={2} required />
    </fieldset>
    <fieldset>
      <input className="name" placeholder="Last name" type="tel" tabIndex={3} required />
    </fieldset>
    <fieldset>
      <input placeholder="Email" type="url" tabIndex={4} required />
    </fieldset>
    <fieldset>
      <textarea placeholder="Phone." tabIndex={5} required/>
    </fieldset>
    {/* <fieldset>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Next</button>
    </fieldset> */}
  </form>
</div>

  )
}

export default SkillForm