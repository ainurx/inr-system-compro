import React, {Component} from 'react'
import {Link} from 'react-router-dom' 

class Sidenav extends Component{
  render(){
    return(
      <div className="sidenav position-absolute">
        <Link to="/">
          <img className="icon-back-home" src="icon/back.png" alt="Back"/>
        </Link>
        <div className="wrap-content container text-center">
          <img className="icon-inr" src="icon/logo.png" alt="inr"/>
          <br/>
          <img className="img-profile rounded-circle" src="7.jpg" alt="me"/>
          <h2 className="font-weight-bold text-lil-white">Mono</h2>
          <div className="wrap-sidenav-menu">
            <h3 className="text-left font-weight-bold text-lil-white">Akun Saya</h3>
            <ul className="text-left">
              <li>
                <Link className="font-weight-bold text-lil-white"  to="">Edit Profile</Link>
              </li>
              <li>
                <Link className="font-weight-bold text-lil-white" to="">Ganti Password</Link>
              </li>
            </ul>
            <Link className="upload-link text-left font-weight-bold text-lil-white" to="/upload">Upload</Link>
            <br/><br/>
            <ul className="text-left">
              <li>
                <Link className="font-weight-bold text-lil-white"  to="">Artikel</Link>
              </li>
              <li>
                <Link className="font-weight-bold text-lil-white" to="/upload-karya">Karya</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Sidenav