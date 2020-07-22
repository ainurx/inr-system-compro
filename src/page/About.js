import React, {Component} from 'react'
import {Link} from'react-router-dom'

import Navbar from '../component/Navbar'

class About extends Component{
  
  render(){
    return(
      <div>
        <Navbar tentangActive="link-nav-active"/>
        <div className="d-flex artikel-wrapper justify-content-center ">
          <div className="position-absolute artikel-text">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <h1 className="text-white">INREADY WORKGROUP</h1>
                  <p className="text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod sem ultricies lectus libero. Morbi vel tincidunt id pellentesque sed quis magna aliquet. Viverra a dignissim massa imperdiet pretium, adipiscing. Sed risus, sed nullam suscipit.
                  </p>
                </div>
                <div className="col-md-6">

                </div>
              </div> 
            </div>
          </div>
          <img className="image-shape" src="bg-about.png" alt="bg-tentang"/>
        </div>
      </div>
    )
  }
  
}

export default About