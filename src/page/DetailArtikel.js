import React, {Component} from 'react'

import Navbar from '../component/Navbar'

class DetailArtikel extends Component{
  render(){
    return(
      <div>
        <Navbar/>
        <div className="artikel-wrapper text-center">
          <img className="image-shape" src="Subtract (1).png" alt="shape"/>
        </div>

        <div className="container">
            <h1>Clean code</h1>
            <div className="d-flex isi-wrapper meta-penulis">
              <img className="rounded-circle photo-size" src="7.jpg" alt="writers"/>
              <div className="position-absolute artikel-meta">
                <h5>Praja</h5>
                <p>Rabu, 20 Juni 2020</p>
              </div>
              <div className="position-absolute wrapper-artikel-icon">
                <img className="icon-size" src="icon/Love.svg" alt="Like"/>
                <img className="icon-size" src="icon/mdi_bookmark_border.svg" alt="Bookmark"/>
              </div>
            </div>
            <br/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing auctor natoque ornare non eget pretium. Ultrices elit sed vitae pulvinar egestas vulputate sit et. Montes, tellus dignissim odio sed fringilla ut. Tortor rutrum neque viverra odio ultrices.</p>
          
            <div className="position-absolute wrapper-artikel-icon-second">
                <img className="icon-size" src="icon/Love.svg" alt="Like"/>
                <img className="icon-size" src="icon/mdi_bookmark_border.svg" alt="Bookmark"/>
            </div>
        </div>
      </div>
    )
  }
}

export default DetailArtikel