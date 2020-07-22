import React, {Component} from 'react'
import Navbar from '../component/Navbar'
import {Link} from 'react-router-dom'

class Karya extends Component{
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
      <div> 
        <Navbar navCallback={this.searchArtikel} karyaActive="link-nav-active"/>
        <div className="d-flex artikel-wrapper justify-content-center text-center">
          <div className="position-absolute artikel-text"> 
            <h1 id="text-heading" className="text-white mx-auto">KARYA</h1>
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
          <img className="image-shape" src="Subtract.png" alt="bg-karya"/>
        </div>
        <div className="container justify-content-center">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <Link className="card link-card mx-auto" to="/detail-karya">
                <img className="img-karya" src="karya.png" alt="karya"/>
                <div className="card-body">  
                  <h4 className="text-black">Karya</h4>
                  <div className="d-flex mt-3">
                    <img className="img-rounded icon-size" src="team-karya.png" alt="team"/>
                    <img className="icon-size icon-detail-karya position-absolute" src="icon/eye2.png" alt="detail"/>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Karya