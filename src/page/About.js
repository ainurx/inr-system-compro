import React, {Component} from 'react'
import {Link} from'react-router-dom'

import Navbar from '../component/Navbar'

class About extends Component{
  
  render(){
    return(
      <div>
        <Navbar/>
        <h1>About INREADY WORKGROUP</h1>
      </div>
    )
  }
  
}

export default About