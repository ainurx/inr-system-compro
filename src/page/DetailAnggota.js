import React, {Component} from'react'
import {Link} from 'react-router-dom'
import Navbar from '../component/Navbar'

class DetailAnggota extends Component{
  render(){
    return(
      <div className="detail-anggota">
        <Navbar/>
        <div className="d-flex justify-content-center text-center">
          <div className="position-absolute">
            <img className="rounded-circle photo-profile mx-auto" src="7.jpg" alt="photo"/>
            <h3>Praja</h3>
            <p>DPO Inready Workgroup</p>
            <p>Full Stack Developer</p>
          </div>
          <img src="Ellipse 1.svg" alt="bg-anggota"/>
        </div>
        <h3 className="text-center text-yellow">PORTFOLIO</h3>
        <hr/>
        <div className="row justify-content-center">
          <div className="col-md-3 mx-auto">
            <div className="card card-portfolio">
              <img src="1.jpg" alt="portfolio"/>
              <div className="d-flex desc-portfolio">
                <div className="block">
                  <h4>Web UIN</h4>
                  <p>20 Juli 2020</p>
                </div>
                <img className="float-right icon-share" src="icon/mdi_reply.png" alt="share"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DetailAnggota