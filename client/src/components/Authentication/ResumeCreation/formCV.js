import React from 'react'
import "../../../assets/css/formcv.css"

const formCV = () => {
  return (
    <div className="container">  
  <form id="contact" action method="post">
    <h3>Personal Information</h3>
    <h4>Fill the resume with your personal information</h4>
    <fieldset>
      <input placeholder="Your name" type="text" tabIndex={1} required autofocus />
    </fieldset>
    <fieldset>
      <input placeholder="Your Email Address" type="email" tabIndex={2} required />
    </fieldset>
    <fieldset>
      <input placeholder="Your Phone Number" type="tel" tabIndex={3} required />
    </fieldset>
    <fieldset>
      <input placeholder="Your Web Site starts with http://" type="url" tabIndex={4} required />
    </fieldset>
    <fieldset>
      <textarea placeholder="Type your Message Here...." tabIndex={5} required defaultValue={""} />
    </fieldset>
    <fieldset>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Next</button>
    </fieldset>
  </form>
</div>

  )
}

export default formCV