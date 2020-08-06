import React, { Component } from 'react'
import {Link} from'react-router-dom'

class Navbar extends Component{
  constructor(props){
    super(props)
    this.state={
      navBackground: "transparent",
      searchInput: true,
      navOpacity: 1
    }
  }

  componentDidMount(){
    document.addEventListener("scroll", () => {
      const backgroundcolor = window.scrollY < 70 ? "transparent" : "black";

      this.setState({ 
        navBackground: backgroundcolor,
        navOpacity: 0.8
      });
    });
  }

  handleSearch = ()=>{
    const searchTrigger = document.querySelector('#searchTrigger')
    const searchWrapper = document.querySelector('#searchWrapper')

    this.setState({
      searchInput: false
    })
    
    this.state.searchInput?
    searchWrapper.classList.add('d-none') : searchWrapper.classList.remove('d-none')
    
    this.props.navCallback(this.state.searchInput)
  }
 
  render(){
    
    return(
      <nav id="myNav" className="navbar navbar-expand-lg navbar-light fixed-top" 
        style={{backgroundColor:`${this.state.navBackground}`, opacity: `${this.state.navOpacity}`}}>
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img className="inr-logo" src="icon/logo.png" alt="INR"/>
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link id="beranda" className={`mt-2 nav-link ${this.props.homeActive}`} to="/" onClick={this.handleLink}>Beranda</Link>
            </li>
            <li className="nav-item">
              <Link id="tentang" className={`mt-2 nav-link ${this.props.tentangActive}`} to="/about">Tentang</Link>
            </li>
            <li className="nav-item">
              <Link id="artikel" className={`mt-2 nav-link ${this.props.artikelActive}`} to="/list-artikel">Artikel</Link>
            </li>
            <li className="nav-item">
              <Link id="karya" className={`mt-2 nav-link ${this.props.karyaActive}`} to="/list-karya">Karya</Link>
            </li>
            <li className="nav-item">
              <Link id="kegiatan" className={`mt-2 nav-link ${this.props.kegiatanActive}`} to="/list-kegiatan">Kegiatan</Link>
            </li>
            <li className="nav-item">
              <Link id="anggota" className={`mt-2 nav-link ${this.props.anggotaActive}`} to="/list-anggota">Anggota</Link>
            </li>
            <li className="nav-item">
              <Link className="mt-2 text-center nav-link nav-link-yellow" to="/login" >Masuk</Link>
            </li>
            <li className="nav-item ">
              <Link className="mt-2 text-center nav-link nav-colored nav-daftar text-black" to="regis" >Daftar</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img className="img-profile-dropdown rounded-circle" src="7.jpg" alt="Me"/>
              </a>
              <div className="dropdown-menu dropdown-profile" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item dropdown-link dropdown-link" href="#">
                    Hey mono
                </Link>
                <Link className="dropdown-item dropdown-link" to="/profile-saya">
                    Profile
                </Link>
                <Link className="dropdown-item dropdown-link" href="#">
                    Upload
                </Link>
                <Link className="dropdown-item dropdown-link" href="#">
                    Keluar
                </Link>
              </div>
            </li>
          </ul>
          <form id="searchWrapper" className={`form-inline my-2 my-lg-0 search-form ${this.props.home}`}>
            <img className="search-icon" src="icon/mdi_search_white.png" alt="search"/>
            <input id="searchTrigger" className="form-control mr-sm-2 search-input" 
              type="search" placeholder="Search" aria-label="Search"
              onClick={this.handleSearch}/>
          </form>
        </div>
        </div>
      </nav>      
    )
  }
}

export default Navbar