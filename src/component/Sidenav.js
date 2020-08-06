import React, {Component} from 'react'
import {Link} from 'react-router-dom' 

class Sidenav extends Component{
  render(){
    return(
        <nav class="navbar navbar-expand-md navbar-light">
          <button class="navbar-toggler ml-auto mb-2 bg-light" type="button" data-toggle="collapse" data-target="#myNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="myNavbar">
            <div class="container-fluid">
              <div class="row">
                <div className="col-xl-3 col-lg-3 col-md-4 sidebar fixed-top">
                  <div className="sidenav position-absolute fixed-top">
                    <Link to="/">
                      <img className="icon-back-home" src="icon/back.png" alt="Back"/>
                    </Link>
                    <div className="wrap-content container ">                     
                      <div className="wrap-sidenav-menu">
                        <center>
                          <img className="icon-inr" src="icon/logo.png" alt="inr"/>
                        </center>
                        <center>
                          <img className="img-profile rounded-circle" src="7.jpg" alt="me"/>
                        </center>                      
                        <h2 className="font-weight-bold text-lil-white text-left">M Yudha Praja Noor</h2>
                        <div className="mx-auto menu-profile">
                          <Link className={`upload-link text-left font-weight-bold text-lil-white ${this.props.linkAkunNav}`} to="/profile-saya">Akun Saya</Link>
                          <br/><br/>
                          <ul className="text-left">
                            <li>
                              <Link className={`font-weight-bold text-lil-white ${this.props.linkProfileNav}`}  to="/edit-profile">Edit Profile</Link>
                            </li>
                            <li>
                              <Link className={`font-weight-bold text-lil-white ${this.props.linkSandiNav}`} to="/ubah-kata-sandi">Ubah Kata Sandi</Link>
                            </li>
                          </ul>
                          <Link className={`upload-link text-left font-weight-bold text-lil-white ${this.props.linkUploadNav}`} to="/upload">Upload</Link>
                          <br/><br/>
                          <ul className="text-left">
                            <li>
                              <Link className={`font-weight-bold text-lil-white ${this.props.linkArtikelNav}`}  to="/upload-artikel">Artikel</Link>
                            </li>
                            <li>
                              <Link className={`font-weight-bold text-lil-white ${this.props.linkKaryaNav}`} to="/upload-karya">Karya</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </nav>
    )
  }
}

export default Sidenav