import React, {Component} from 'react'

import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import { Link } from 'react-router-dom'

class Artikel extends Component{
  constructor(props){
    super(props)
    this.state={
      navArtikel: true
    }
  }

  searchArtikel = data =>{
    this.setState({
      navArtikel: false
    })

    const searchWrapper = document.querySelector("#searchArticels")
    const textHeading = document.querySelector("#text-heading")
    const textDesc = document.querySelector("#text-desc")

    if(this.state.navArtikel == true){
      searchWrapper.classList.remove("d-none")
      textHeading.classList.add("d-none")
      textDesc.classList.add("d-none")
    }else{
      searchWrapper.classList.add("d-none")
      textHeading.classList.remove("d-none")
      textDesc.classList.remove("d-none")
    }
  }
    
    
  render(){
    return(
      <div className="artikel-root">
        <Navbar navCallback={this.searchArtikel} artikelActive="link-nav-active"/>
        <div className="d-flex artikel-wrapper justify-content-center text-center">
          <div className="position-absolute artikel-text"> 
            <h1 id="text-heading" className="text-white mx-auto">Artikel</h1>
            <p id="text-desc" className="text-white mx-auto">Facilisi congue eu dui lacus, ultrices magna consectetur tellus est laoreet scelerisque scelerisque faucibus nunc sapien imperdiet quis sed vitae</p>      
            <div id="searchArticels" className="d-none">
              <form id="searcher" className="form-inline my-2 my-lg-0 search-something mx-auto">
                <img className="search-icon" src="icon/mdi_search_white.png" alt="search"/>
                <input className="form-control mr-sm-2 search-input-second" type="search" placeholder="Search" aria-label="Search"/>
              </form>
              <ul id="listKonsentrasi" className="daftar-konsentrasi mt-3 justify-content-center">
                <li className="list-konsentrasi text-center">Pemrograman</li>
                <li className="list-konsentrasi text-center">Jaringan</li>
                <li className="list-konsentrasi text-center">Desain</li>
                <li className="list-konsentrasi text-center">Web</li>
              </ul>
            </div>
          </div>
          <img className="image-shape" src="Subtract.svg" alt="shape"/>
        </div>
        <div className="container justify-content-center">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <Link className="card link-card mx-auto" to="/detail-artikel">
                <img src="1.jpg" className="card-img-top" alt="artikel"/>
                <div className="card-body">
                  <h3 className="card-title text-black">Card title</h3>
                  <p className="card-text text-grey">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div className="ml-4">
                  <h5 className="text-black">Praja</h5>
                  <p className="text-grey">Rabu, 20 Jni 2020</p>
                </div>
              </Link>
            </div>
          </div>
          <br/>
          <div className="next-page text-black mx-auto">Lihat Lainnya</div>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default Artikel