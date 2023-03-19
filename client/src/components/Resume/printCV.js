import React from 'react'
import Cv from './cv'

const ids = ['1']
const printCV = () => {
  window.print();
  return (
    <div>
                <Cv/>
          
    </div>
    
  )
}

export default printCV