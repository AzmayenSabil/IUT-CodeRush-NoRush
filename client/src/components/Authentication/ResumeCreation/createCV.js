import React from 'react'
import Cv from '../../Resume/cv'
import PersonalInfoForm from './PersonalInfoForm'
import SummaryForm from './SummaryForm'
import './style.css'

const createCV = () => {
  return (
    <div className='main-container' style={{display: 'flex'}}>
        <div className='left-section'>
            <PersonalInfoForm/>
            <SummaryForm/>
        </div>
        <div className='right-section'>
            <Cv></Cv>
        </div>
        
    </div>
  )
}

export default createCV