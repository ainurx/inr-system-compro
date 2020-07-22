import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom'
import Navbar from '../component/Navbar'

class Angkatan extends Component{
  render(){
    return(  
      <div>
        <h1 className="text-yellow">Angkatan 10</h1>
        <div className="row justify-content-center">  
          <div className="col-md-3 mx-auto">
            <Link className="card link-card card-anggota text-center" to="/detail-anggota">
              <img className="rounde d-circle mx-auto" src="8.jpg" alt="anggota"/>
              <h3 className="text-black">Atun</h3>
              <p className="text-grey">full stack developer</p>
              <p className="text-grey">Angkatan 10</p>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

class Pengurus extends Component{
  render(){
    return(
      <div className="row justify-content-center">
        <div className="col-md-3 mx-auto">
          <Link className="card link-card card-anggota text-center" to="/detail-anggota">
            <img className="rounded-circle mx-auto" src="7.jpg" alt="anggota"/>
            <h3 className="text-black">Praja</h3>
            <p className="text-grey">Programmer</p>
            <p className="text-grey">Angkatan 10</p>
          </Link>
        </div>
      </div>
    )
  }
}


class Anggota extends Component{
  state = {
    search: true,
    angkatan: true,
    penurus: false 
  }

  handleAngkatan = e =>{
    this.setState({
      angkatan: true,
      pengurus: false
    })
    const angkatan = document.querySelector('#angkatan')
    const pengurus = document.querySelector('#pengurus')
    
    angkatan.classList.add("text-yellow")
    pengurus.classList.remove("text-yellow")
  }

  handlePengurus = e =>{
    this.setState({
      pengurus: true,
      angkatan: false
    })
    const angkatan = document.querySelector('#angkatan')
    const pengurus = document.querySelector('#pengurus')
    
    pengurus.classList.add("text-yellow")
    angkatan.classList.remove("text-yellow")
  }

  handleSearch = data =>{
    this.setState({
      search: false
    })

    const searchAnggota = document.querySelector("#searchAnggota")
    const textAnggota = document.querySelector("#textAnggota")
    const textDesc = document.querySelector("#textDesc")

    if(this.state.search == true){
      searchAnggota.classList.remove("d-none")
      textAnggota.classList.add("d-none")
      textDesc.classList.add("d-none")
    }else{
      searchAnggota.classList.add("d-none")
      textAnggota.classList.remove("d-none")
      textDesc.classList.remove("d-none")
    }
  }

  render(){
    return(
      <div className="bg-anggota">
        <Navbar navCallback={this.handleSearch} anggotaActive="link-nav-active"/>
        <div className="d-flex artikel-wrapper justify-content-center text-center">
          <img className="image-shape" src="Subtract.png" alt="shape"/>
          <div className="position-absolute artikel-text">
            <h1 id="textAnggota" className="text-white mx-auto">Anggota</h1>
            <p id="textDesc" className="text-white mx-auto">Facilisi congue eu dui lacus, ultrices magna consectetur tellus est laoreet scelerisque scelerisque faucibus nunc sapien imperdiet quis sed vitae</p>
            <div id="searchAnggota" className="d-none">
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
        </div>
        <div className="container">
          <ul className="d-flex justify-content-center">
            <li id="pengurus" className="navigation-anggota" onClick={this.handlePengurus}>
              Pengurus
            </li>&nbsp;&nbsp;
            <li id="angkatan" className="navigation-anggota text-yellow" onClick={this.handleAngkatan}>
              Angkatan
            </li>
          </ul>
          
            {
              this.state.angkatan === true ? <Angkatan/>:null
            }
            {
              this.state.pengurus === true ? <Pengurus/>:null
            }
          
          <br/>
          <div className="next-page text-black mx-auto">Lihat Lainnya</div>
          </div>
        </div>
    )
  }
}

export default Anggota