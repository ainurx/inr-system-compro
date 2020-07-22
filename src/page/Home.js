import React, {Component} from 'react'
import {Link} from'react-router-dom'

import Navbar from '../component/Navbar'

class Home extends Component{
  constructor(props){
    super(props)
    this.state={
      active: true
    }
  }

  render(){
    return(
      <div>
        <Navbar homeActive="link-nav-active" home="d-none"/>
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
          <img className="image-shape-gray" src="bg-about.png" alt="bg-tentang"/>
        </div>
        <div className="d-flex artikel-wrapper justify-content-center ">
          <div className="position-absolute artikel-text">
            <div className="container">
              <h1 className="text-white font-weight-bold">Artikel</h1> 
            </div>
          </div>
          <img className="image-shape-artikel-home" src="bg-artikel-home.png" alt="bg-tentang"/>
        </div>
      </div>
    )
  }
}

export default Home