import React from "react";
import "../../assets/css/orbit-1.css"
import "../../assets/plugins/bootstrap/css/bootstrap.min.css"
import ProfileSection from "./ProfileSection"

function sidebar(){
    return(<div className="sidebar-wrapper">
    {/* <div className="profile-container">
      <img className="profile" src="assets/images/profile.png" alt />
      <h1 className="name">Alan Doe</h1>
      <h3 className="tagline">Full Stack Developer</h3>
    </div>
    
    <div className="contact-container container-block">
      <ul className="list-unstyled contact-list">
        <li className="email"><i className="fa-solid fa-envelope" /><a href="mailto: yourname@email.com">alan.doe@website.com</a></li>
        <li className="phone"><i className="fa-solid fa-phone" /><a href="tel:0123 456 789">0123 456 789</a></li>
        <li className="website"><i className="fa-solid fa-globe" /><a href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/orbit-free-resume-cv-bootstrap-theme-for-developers/" target="_blank">portfoliosite.com</a></li>
        <li className="linkedin"><i className="fa-brands fa-linkedin-in" /><a href="#" target="_blank">linkedin.com/in/alandoe</a></li>
        <li className="github"><i className="fa-brands fa-github" /><a href="#" target="_blank">github.com/username</a></li>
        <li className="twitter"><i className="fa-brands fa-twitter" /><a href="https://twitter.com/3rdwave_themes" target="_blank">@twittername</a></li>
      </ul>
    </div> */}
    <ProfileSection></ProfileSection>
    <div className="education-container container-block">
      <h2 className="container-block-title">Education</h2>
      <div className="item">
        <h4 className="degree">MSc in Computer Science</h4>
        <h5 className="meta">University of London</h5>
        <div className="time">2016 - 2018</div>
      </div>{/*//item*/}
      <div className="item">
        <h4 className="degree">BSc in Applied Mathematics</h4>
        <h5 className="meta">Bristol University</h5>
        <div className="time">2012 - 2016</div>
      </div>{/*//item*/}
    </div>{/*//education-container*/}
    <div className="languages-container container-block">
      <h2 className="container-block-title">Languages</h2>
      <ul className="list-unstyled interests-list">
        <li>English <span className="lang-desc">(Native)</span></li>
        <li>French <span className="lang-desc">(Professional)</span></li>
        <li>Spanish <span className="lang-desc">(Professional)</span></li>
      </ul>
    </div>{/*//interests*/}
    <div className="interests-container container-block">
      <h2 className="container-block-title">Interests</h2>
      <ul className="list-unstyled interests-list">
        <li>Climbing</li>
        <li>Snowboarding</li>
        <li>Cooking</li>
      </ul>
    </div>{/*//interests*/}
  </div>
  )

}
export default sidebar;