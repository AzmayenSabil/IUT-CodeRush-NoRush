import React from 'react'
import "../../../assets/css/formcv.css"
import { useState } from 'react'
import axios from 'axios';

const SummaryForm = () => {

  const [mySummary, setSummary] = useState("");


  const handleSummaryChange = (event) => {
    
    setSummary(event.target.value);
    console.log(mySummary)
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let summ = {
      summary: mySummary,
    };
    

    console.log(summ)

    try {
      const response = await axios.put('http://localhost:8080/api/updateCv/64162b49f285db1260b154a8', summ);

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
    <h3>Summary</h3>
    <h4>Tell Something about yourself</h4>
    <fieldset>
      <textarea id="w3review" name="w3review" rows="4" cols="50" onChange={handleSummaryChange}></textarea>
    </fieldset>
    <fieldset>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending" onClick={handleSubmit}>
              Add 
      </button>
    </fieldset>
    
  </form>
</div>

  )
}

export default SummaryForm