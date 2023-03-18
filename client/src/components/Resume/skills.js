import React from "react";
import "../../assets/css/orbit-1.css"
import "../../assets/plugins/bootstrap/css/bootstrap.min.css"

function skills(){
    return(<section className="skills-section section">
    <h2 className="section-title"><span className="icon-holder"><i className="fa-solid fa-rocket" /></span>Skills &amp; Proficiency</h2>
    <div className="skillset">        
      <div className="item">
        <h3 className="level-title">Python &amp; Django</h3>
        <div className="progress level-bar">
          <div className="progress-bar theme-progress-bar" role="progressbar" style={{width: '99%'}} aria-valuenow={99} aria-valuemin={0} aria-valuemax={100} />
        </div>                               
      </div>{/*//item*/}
      <div className="item">
        <h3 className="level-title">Javascript</h3>
        <div className="progress level-bar">
          <div className="progress-bar theme-progress-bar" role="progressbar" style={{width: '98%'}} aria-valuenow={98} aria-valuemin={0} aria-valuemax={100} />
        </div>                              
      </div>{/*//item*/}
      <div className="item">
        <h3 className="level-title">React &amp; Angular</h3>
        <div className="progress level-bar">
          <div className="progress-bar theme-progress-bar" role="progressbar" style={{width: '98%'}} aria-valuenow={98} aria-valuemin={0} aria-valuemax={100} />
        </div>                                 
      </div>{/*//item*/}
      <div className="item">
        <h3 className="level-title">HTML5 &amp; CSS</h3>
        <div className="progress level-bar">
          <div className="progress-bar theme-progress-bar" role="progressbar" style={{width: '95%'}} aria-valuenow={95} aria-valuemin={0} aria-valuemax={100} />
        </div>                                
      </div>{/*//item*/}
      <div className="item">
        <h3 className="level-title">Ruby on Rails</h3>
        <div className="progress level-bar">
          <div className="progress-bar theme-progress-bar" role="progressbar" style={{width: '85%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
        </div>                                  
      </div>{/*//item*/}
      <div className="item">
        <h3 className="level-title">Sketch &amp; Photoshop</h3>
        <div className="progress level-bar">
          <div className="progress-bar theme-progress-bar" role="progressbar" style={{width: '60%'}} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
        </div>                                 
      </div>{/*//item*/}
    </div>  
  </section>
  )

}
export default skills;