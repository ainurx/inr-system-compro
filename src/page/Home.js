import React, {Component} from 'react'
import {Link} from'react-router-dom'

import Navbar from '../component/Navbar'
import '../App.css'

class Home extends Component{
  render(){
    return(
      <div>
        <Navbar/>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src="1.jpg" alt="First slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="2.jpg" alt="Second slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="3.jpg" alt="Third slide"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home