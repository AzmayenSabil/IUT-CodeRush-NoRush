import React from 'react'
import Cv from '../../Resume/cv'
import Login from '../Login/Login'
import FormCV from './formCV'

const createCV = () => {
  return (
    <div style={{display: 'flex'}}>
        <div><FormCV/></div>
        <Cv></Cv>

    </div>
  )
}

export default createCV