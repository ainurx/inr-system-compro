import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom'
import Navbar from '../component/Navbar'

class Angkatan extends Component{
  render(){
    return(    
      <div className="col-md-3 mx-auto">
        <Link className="card link-card card-anggota text-center" to="/detail-anggota">
          <img className="rounded-circle mx-auto" src="8.jpg" alt="anggota"/>
          <h3 className="text-black">Atun</h3>
          <p className="text-grey">full stack developer</p>
          <p className="text-grey">Angkatan 10</p>
        </Link>
      </div>
    )
  }
}

class Pengurus extends Component{
  render(){
    return(
      <div className="col-md-3 mx-auto">
        <Link className="card link-card card-anggota text-center" to="/detail-anggota">
          <img className="rounded-circle mx-auto" src="7.jpg" alt="anggota"/>
          <h3 className="text-black">Praja</h3>
          <p className="text-grey">Programmer</p>
          <p className="text-grey">Angkatan 10</p>
        </Link>
      </div>
    )
  }
}


class Anggota extends Component{
  state = {
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

  render(){
    return(
      <div className="bg-anggota">
        <Navbar/>
        <div className="d-flex artikel-wrapper justify-content-center text-center">
          <img className="image-shape" src="Subtract.png" alt="shape"/>
          <div className="position-absolute ">
            <h1 className="text-white mx-auto">Anggota</h1>
            <p className="text-white mx-auto">Facilisi congue eu dui lacus, ultrices magna consectetur tellus est laoreet scelerisque scelerisque faucibus nunc sapien imperdiet quis sed vitae</p>
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
          <div className="row justify-content-center"></div>
            {
              this.state.angkatan === true ? <Angkatan/>:null
            }
            {
              this.state.pengurus === true ? <Pengurus/>:null
            }
          </div>
        </div>
    )
  }
}

export default Anggota