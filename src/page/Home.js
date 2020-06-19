import React, {Component} from 'react'
import {Link} from'react-router-dom'

import Navbar from '../component/Navbar'
import '../App.css'

class Home extends Component{
  render(){
    return(
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">INREADY WORKGROUP</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="">Kegiatan</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="">Artikel</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="">Karya</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login" >Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="regis" >Daftar</Link>
              </li>
            </ul>
          </div>
        </nav>
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