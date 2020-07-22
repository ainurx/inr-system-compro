import React, {Component} from 'react'

import Navbar from '../component/Navbar'
import Footer from '../component/Footer'

class DetailKegiatan extends Component{
  render(){
    return(
      <div className="bg-grey-second">
        <Navbar/>
        <div className="d-flex artikel-wrapper justify-content-center text-center">
          <div className="position-absolute artikel-text"> 
            <h1 id="text-heading" className="text-white mx-auto font-weight-bold">GATHFUN</h1>
            <p id="text-desc" className="text-white mx-auto">Facilisi congue eu dui lacus, ultrices magna consectetur tellus est laoreet scelerisque scelerisque faucibus nunc sapien imperdiet quis sed vitae</p>      
          </div>
          <img className="image-shape bg-karya" src="bg-detail-karya.png" alt="bg-detail-karya"/>
        </div>
        <div className="container justify-content-center wrapper-screenshoot">
          <div className="row justify-content-center">
            <div className="col-md-6 wrapper-karya-overview">
              <img className="img-karya-overview" src="karya1.png" alt="karya"/>
            </div>
            <div className="col-md-6 wrapper-karya-overview">
              <img className="img-karya-overview" src="karya2.png" alt="karya"/>
            </div>
            <div className="col-md-6 wrapper-karya-overview">
              <img className="img-karya-overview" src="karya3.png" alt="karya"/>
            </div>
            <div className="col-md-6 wrapper-karya-overview">
              <img className="img-karya-overview" src="karya4.png" alt="karya"/>
            </div>
          </div>
        </div>
        <div className="container wrapper-team-karya justify-content-center bg-white">
          <h1 className="text-center font-weight-bold">Tentang Kegiatan</h1>
          <div className="row justify-content-center">
            <div className="col-md-3">
              <p>Nama Kegiatan</p>
              <p>Tempat</p>
              <p>Tanggal</p>
              <p>Waktu</p>
              <p>Peserta</p>
              <p>Keterangan</p>
            </div>
            <div className="col-md-9">
              <p>: Nama Kegiatan</p>
              <p>: Tempat</p>
              <p>: Tanggal</p>
              <p>: Waktu</p>
              <p>: Peserta</p>
              <p>: Keterangan</p>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default DetailKegiatan