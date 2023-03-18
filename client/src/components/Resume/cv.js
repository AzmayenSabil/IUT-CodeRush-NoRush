import React from "react";
import Sidebar from "./sidebar";
import Skills from "./skills";
import Summary from "./summary";
import Experience from "./experience";
import Projects from "./projects";
import '../../assets/css/orbit-1.css'

import "../../assets/plugins/bootstrap/css/bootstrap.min.css"

function Cv(){
    return(
 

  <div className="wrapper mt-lg-5">
    <Sidebar/>
    <div className="main-wrapper">
      <Summary/>
      <Experience/>
      
      <Projects/>
      
      <Skills/>
    </div>{/*//main-body*/}
  </div>



    )
}

export default Cv;