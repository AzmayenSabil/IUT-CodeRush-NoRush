import React from "react";
import "../../assets/css/orbit-1.css"
import "../../assets/plugins/bootstrap/css/bootstrap.min.css"
import { useState, useEffect } from 'react'
import axios from 'axios';

const Summary = () => {
  const [personalInfo, setPersonalInfo] = useState(null);

  useEffect(() => {
    const fetchSummary = async () => {
        try {
          const response = await axios.get('http://localhost:8080/api/getCv/64162b49f285db1260b154a8');
          setPersonalInfo(response.data);
          
        } catch (error) {
          console.error(error);
        }
      };
      fetchSummary()
  }, []);
  

    return(
      <section className="section summary-section">
        <h2 className="section-title"><span className="icon-holder"><i className="fa-solid fa-user" /></span>Career Profile</h2>
        <div className="summary">
          <p>Summarise your career here lorem ipsum dolor sit amet, consectetuer adipiscing elit. You can <a href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/orbit-free-resume-cv-bootstrap-theme-for-developers/" target="_blank">download this free resume/CV template here</a>. Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.</p>
        </div>
      </section>
  )

}
export default Summary;