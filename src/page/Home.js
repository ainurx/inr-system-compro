import React, {Component} from 'react'
import {Link} from'react-router-dom'

import Navbar from '../component/Navbar'

class Home extends Component{
  constructor(props){
    super(props)
    this.state={
      active: true
    }
  }

  render(){
    return(
      <div>
        <Navbar homeActive="link-nav-active" home="d-none"/>
        <div className="d-flex artikel-wrapper justify-content-center ">
          <div className="position-absolute artikel-text">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <h1 className="text-white">INREADY WORKGROUP</h1>
                  <p className="text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod sem ultricies lectus libero. Morbi vel tincidunt id pellentesque sed quis magna aliquet. Viverra a dignissim massa imperdiet pretium, adipiscing. Sed risus, sed nullam suscipit.
                  </p>
                </div>
                <div className="col-md-6">

                </div>
              </div> 
            </div>
          </div>
          <img className="image-shape-gray" src="bg-about.png" alt="bg-tentang"/>
        </div>
        <div className="d-flex artikel-wrapper home-artikel justify-content-center ">
          <div className="position-absolute artikel-text">
            <div className="container">
              <h1 className="text-white text-center font-weight-bold">Artikel</h1> 
              <div className="row">
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
            </div>
          </div>
          <img className="image-shape-artikel-home" src="bg-artikel-home.png" alt="bg-tentang"/>
        </div>
        <div className="d-flex artikel-wrapper home-artikel justify-content-center ">
          <div className="position-absolute artikel-text">
            <div className="container">
              <h1 className="font-weight-bold float-right">Karya</h1>
              <div className="row">
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
        </div>
        <div className="d-flex artikel-wrapper home-artikel justify-content-center ">
          <div className="position-absolute artikel-text">
            <div className="container">

            </div>
          </div>
        <img className="image-shape-artikel-home" src="bg-kegiatan-home.png" alt="bg-tentang"/>
        </div>
      </div>
    )
  }
}

export default Home