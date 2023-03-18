import React from 'react'
import "../../../assets/css/formcv.css"

const SummaryForm = () => {
  return (
    <div className="container">  
  <form id="contact" action method="post">
    <h3>Summary</h3>
    <h4>Tell Something about yourself</h4>
    <fieldset>
      <textarea id="w3review" name="w3review" rows="4" cols="50"></textarea>
    </fieldset>
    
  </form>
</div>

  )
}

export default SummaryForm