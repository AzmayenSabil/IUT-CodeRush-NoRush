import React from 'react'
import Cv from '../../Resume/cv'
import PersonalInfoForm from './PersonalInfoForm'
import SummaryForm from './SummaryForm'
import './style.css'
import  Navbar  from '../../Navigation/Navbar.js'

const createCV = () => {
  return (
    <div>
      <Navbar/>
          <div className='main-container' style={{display: 'flex'}}>
        <div className='left-section'>
            <PersonalInfoForm/>
            <SummaryForm/>
        </div>
        <div className='right-section'>
            <Cv></Cv>
        </div>
        
    </div>
    </div>
  )
}

export default createCV