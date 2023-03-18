import React from "react";
import "../../assets/css/orbit-1.css"
import "../../assets/plugins/bootstrap/css/bootstrap.min.css"

function projects(){
    return(<section className="section projects-section">
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
  </section>
  )

}
export default projects;