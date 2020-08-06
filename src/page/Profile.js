import React, {Component} from 'react'

import Sidenav from '../component/Sidenav'

class Profile extends Component{
  render(){
    return(
      <div>
        <Sidenav linkAkunNav="text-yellow"/>
        <section className="wrapper-akun">
          <div className="container">
            <h2>Akun Saya</h2>
            <ul class="list-group list-group-flush">
              <li class="list-group-item"></li>
              <li class="list-group-item font-weight-bold">
                <div className="row">
                  <div className="col-md-3">
                    Nama
                  </div>
                  <div className="col-md-9">
                    <span className="text-grey">Ainur rahmat</span>
                  </div>
                </div>
              </li>
              <li class="list-group-item font-weight-bold">
              <div className="row">
                  <div className="col-md-3">
                    NIR
                  </div>
                  <div className="col-md-9">
                    <span className="text-grey">4307117005</span>
                  </div>
                </div>
              </li>
              <li class="list-group-item font-weight-bold">
              <div className="row">
                  <div className="col-md-3">
                    Konsentrasi
                  </div>
                  <div className="col-md-9">
                    <span className="text-grey">Web</span>
                  </div>
                </div>
              </li>
              <li class="list-group-item font-weight-bold">
                <div className="row">
                  <div className="col-md-3">
                    Jabatan
                  </div>
                  <div className="col-md-9">
                    <span className="text-grey">Kabid leadership</span>
                  </div>
                </div>
              </li>
              <li class="list-group-item font-weight-bold">
              <div className="row">
                <div className="col-md-3">
                    Angkatan
                  </div>
                  <div className="col-md-9">
                    <span className="text-grey">10</span>
                  </div>
                </div>
              </li>
              <li class="list-group-item font-weight-bold">
                <div className="row">
                  <div className="col-md-3">
                    Email
                  </div>
                  <div className="col-md-9">
                    <span className="text-grey">ainurrahmat1@gmail.com</span>
                  </div>
                </div>
              </li>
              <li class="list-group-item"></li>
            </ul>
          </div>
        </section>
      </div>
    )
  }
}

export default Profile