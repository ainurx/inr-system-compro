import React, {Component} from 'react'

import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import { Link } from 'react-router-dom'

class Artikel extends Component{
  render(){
    return(
      <div className="artikel-root">
        <Navbar/>
        <div className="d-flex artikel-wrapper justify-content-center text-center">
          <div className="position-absolute artikel-text">
            <h1 className="text-white mx-auto">Artikel</h1>
            <p className="text-white mx-auto">Facilisi congue eu dui lacus, ultrices magna consectetur tellus est laoreet scelerisque scelerisque faucibus nunc sapien imperdiet quis sed vitae</p>
          </div>
          <img className="image-shape" src="Subtract.png" alt="shape"/>
        </div>
        <div className="container">
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
        </div>
        <Footer/>
      </div>
    )
  }
}

export default Artikel