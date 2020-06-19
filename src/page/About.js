import React, {Component} from 'react'
import {Link} from'react-router-dom'

import Navbar from '../component/Navbar'

class About extends Component{
  constructor(props){
    super(props)
  }
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
        
        <h1>About INREADY WORKGROUP</h1>
      </div>
    )
  }
}

export default About