import React, { Component } from 'react'
import {Link} from'react-router-dom'

class Navbar extends Component{
  handleScroll = () =>{
    const myNav = document.querySelector('#myNav')
    window.onscroll = () =>{
      if(document.body.scrollTop >= 200){
        myNav.classList.add("nav-colored")
        myNav.classList.remove("bg-transparent")
      }else{
        myNav.classList.add("bg-transparent")
        myNav.classList.remove("nav-colored")
      }
    }
  }

  render(){
    return(
      <nav id="myNav" className="navbar navbar-expand-lg  navbar-light bg-transparent fixed-top" onScroll={this.handleScroll}>
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img className="inr-logo" src="icon/inready Logo 1 (dark).png" alt="INR"/>
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Beranda <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">Tentang</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/list-artikel">Artikel</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="">Karya</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="">Kegiatan</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/list-anggota">Anggota</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login" >Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="regis" >Daftar</Link>
            </li>
          </ul>
        </div>
        </div>
      </nav>      
    )
  }
}

export default Navbar