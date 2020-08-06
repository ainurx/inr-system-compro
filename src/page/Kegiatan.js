import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import Navbar from '../component/Navbar'
import Footer from '../component/Footer'

class Kegiatan extends Component{
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

    const searchWrapper = document.querySelector("#searchKegiatan")
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
      <div>
        <Navbar navCallback={this.searchArtikel} kegiatanActive="link-nav-active"/>
        <div className="d-flex artikel-wrapper justify-content-center text-center">
          <div className="position-absolute artikel-text"> 
            <h1 id="text-heading" className="text-white mx-auto">KEGIATAN</h1>
            <p id="text-desc" className="text-white mx-auto">Facilisi congue eu dui lacus, ultrices magna consectetur tellus est laoreet scelerisque scelerisque faucibus nunc sapien imperdiet quis sed vitae</p>      
            <div id="searchKegiatan" className="d-none">
              <form id="searcher" className="form-inline my-2 my-lg-0 search-something mx-auto">
                <img className="search-icon" src="icon/mdi_search_white.png" alt="search"/>
                <input className="form-control mr-sm-2 search-input-second" type="search" placeholder="Search" aria-label="Search"/>
              </form>
            </div>
          </div>
          <img className="image-shape" src="Subtract.svg" alt="bg-karya"/>
        </div>
        <div className="container justify-content-center">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <Link className="card link-card card-b-none mx-auto" to="/detail-kegiatan">
                <div className="position-relative">
                  <div className="status-kegiatan-segera position-absolute text-center text-white">Segera</div>
                  <img className="img-kegiatan" src="kegiatan.png" alt="Kegiatan"/>
                </div>
                <div className="card-body">
                  <h5 className="text-black font-weight-bold">MUSLUB</h5>
                  <div className="d-flex">
                    <img className="icon-pin" src="icon/pin.png" alt="Pin"/>
                    &nbsp;&nbsp;&nbsp; <p className="text-grey">Sekretariat Inready</p>
                  </div>
                  <div className="d-flex">
                    <img className="icon-calendar" src="icon/calendar.png" alt="Date"/>
                    &nbsp;&nbsp;<p className="text-grey">Ahad, 17 November 2020</p>
                  </div>
                 </div>
              </Link>
            </div>
            <div className="col-md-4">
              <Link className="card link-card card-b-none mx-auto" to="/detail-kegiatan">
                <div className="position-relative">
                  <div className="status-kegiatan-terlaksana position-absolute text-center text-white">Terlaksana</div>
                  <img className="img-kegiatan" src="kegiatan.png" alt="Kegiatan"/>
                </div>
                <div className="card-body">
                  <h5 className="text-black font-weight-bold">GATHFUN</h5>
                  <div className="d-flex">
                    <img className="icon-pin" src="icon/pin.png" alt="Pin"/>
                    &nbsp;&nbsp;&nbsp; <p className="text-grey">Sekretariat Inready</p>
                  </div>
                  <div className="d-flex">
                    <img className="icon-calendar" src="icon/calendar.png" alt="Date"/>
                    &nbsp;&nbsp;<p className="text-grey">Ahad, 17 November 2020</p>
                  </div>
                 </div>
              </Link>
            </div>
          </div>
          <div className="next-page text-black mx-auto mt-3">Lihat Lainnya</div>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default Kegiatan