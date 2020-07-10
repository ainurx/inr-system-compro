import React, { Component } from 'react'
import {Link} from'react-router-dom'

class Navbar extends Component{
  constructor(props){
    super(props)
    this.state={
      navBackground: "transparent",
      searchInput: true
    }
  }

  componentDidMount(){
    document.addEventListener("scroll", () => {
      const backgroundcolor = window.scrollY < 70 ? "transparent" : "#FCD340";

      this.setState({ navBackground: backgroundcolor });
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
        style={{backgroundColor:`${this.state.navBackground}`}}>
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
            <li className="nav-item ">
              <Link className="nav-link text-black" to="regis" >Daftar</Link>
            </li>
          </ul>
          <form id="searchWrapper" className="form-inline my-2 my-lg-0 search-form">
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