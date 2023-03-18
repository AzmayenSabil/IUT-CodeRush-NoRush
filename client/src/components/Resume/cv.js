import React from "react";
import Sidebar from "./sidebar";

import '../../assets/css/orbit-1.css'

function Cv(){
    return(
 

  <div className="wrapper mt-lg-5">
    <Sidebar/>
    <div className="main-wrapper">
      <section className="section summary-section">
        <h2 className="section-title"><span className="icon-holder"><i className="fa-solid fa-user" /></span>Career Profile</h2>
        <div className="summary">
          <p>Summarise your career here lorem ipsum dolor sit amet, consectetuer adipiscing elit. You can <a href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/orbit-free-resume-cv-bootstrap-theme-for-developers/" target="_blank">download this free resume/CV template here</a>. Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.</p>
        </div>{/*//summary*/}
      </section>{/*//section*/}
      <section className="section experiences-section">
        <h2 className="section-title"><span className="icon-holder"><i className="fa-solid fa-briefcase" /></span>Experiences</h2>
        <div className="item">
          <div className="meta">
            <div className="upper-row">
              <h3 className="job-title">Lead Developer</h3>
              <div className="time">2022 - Present</div>
            </div>{/*//upper-row*/}
            <div className="company">Startup Hubs, San Francisco</div>
          </div>{/*//meta*/}
          <div className="details">
            <p>Describe your role here lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo.</p>  
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
          </div>{/*//details*/}
        </div>{/*//item*/}
        <div className="item">
          <div className="meta">
            <div className="upper-row">
              <h3 className="job-title">Senior Software Engineer</h3>
              <div className="time">2018 - 2022</div>
            </div>{/*//upper-row*/}
            <div className="company">Google, London</div>
          </div>{/*//meta*/}
          <div className="details">
            <p>Describe your role here lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>  
          </div>{/*//details*/}
        </div>{/*//item*/}
        <div className="item">
          <div className="meta">
            <div className="upper-row">
              <h3 className="job-title">UI Developer</h3>
              <div className="time">2016 - 2018</div>
            </div>{/*//upper-row*/}
            <div className="company">Amazon, London</div>
          </div>{/*//meta*/}
          <div className="details">
            <p>Describe your role here lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>  
          </div>{/*//details*/}
        </div>{/*//item*/}
      </section>{/*//section*/}
      <section className="section projects-section">
        <h2 className="section-title"><span className="icon-holder"><i className="fa-solid fa-archive" /></span>Projects</h2>
        <div className="intro">
          <p>You can list your side projects or open source libraries in this section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et ligula in nunc bibendum fringilla a eu lectus.</p>
        </div>{/*//intro*/}
        <div className="item">
          <span className="project-title"><a href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/coderpro-bootstrap-5-startup-template-for-software-projects/" target="_blank">CoderPro</a></span> - <span className="project-tagline">A responsive website template designed to help developers launch their software projects. </span>
        </div>{/*//item*/}
        <div className="item">
          <span className="project-title"><a href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/launch-bootstrap-5-template-for-saas-businesses/" target="_blank">Launch</a></span> - <span className="project-tagline">A responsive website template designed to help startups promote their products or services.</span>
        </div>{/*//item*/}
        <div className="item">
          <span className="project-title"><a href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/devcard-bootstrap-5-vcard-portfolio-template-for-software-developers/" target="_blank">DevCard</a></span> - <span className="project-tagline">A portfolio website template designed for software developers.</span>
        </div>{/*//item*/}
        <div className="item">
          <span className="project-title"><a href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/bootstrap-template-for-mobile-apps-nova-pro/" target="_blank">Nova Pro</a></span> - <span className="project-tagline">A responsive Bootstrap theme designed to help app developers promote their mobile apps</span>
        </div>{/*//item*/}
        <div className="item">
          <span className="project-title"><a href="http://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-web-development-agencies-devstudio/" target="_blank">DevStudio</a></span> - 
          <span className="project-tagline">A responsive website template designed to help web developers/designers market their services. </span>
        </div>{/*//item*/}
      </section>{/*//section*/}
      <section className="skills-section section">
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
      </section>{/*//skills-section*/}
    </div>{/*//main-body*/}
  </div>



    )
}

export default Cv;