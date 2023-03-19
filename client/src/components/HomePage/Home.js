import React from 'react';
import Navbar from '../Navigation/Navbar';

import CV from '../../assets/homepage-image.png'
import './style.css'

import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="App">
      <Navbar />
      <div className="home-banner-container main">
          <div className="home-text-section">
              <p className="secondary-text">
                Online Resume Builder
              </p>
              <h1 className="primary-heading">
                Create a good impression
              </h1>
              <p className="primary-text">
                It has never been simpler to create a resume. Create your professional CV right away for free by giving it a try. Why are you holding out?
              </p>
              <button className="secondary-button">
                <Link to='/createCV'>Create My Resume {" "}</Link>
              </button>
          </div>

          <div className="home-image-section">
              <img src={CV} alt="" width={600}/>
          </div>
      </div>
    </div>
  );
}

export default Home;



