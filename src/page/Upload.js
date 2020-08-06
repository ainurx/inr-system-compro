import React, {Component} from 'react'
import Sidenav from '../component/Sidenav'

class Upload extends Component{
  render(){
    return(
      <div>
        <Sidenav linkUploadNav="text-yellow"/>  
        <section>
          <div className="container justify-content-center upload-wrapper">
            <div className="text-center isi-upload">
              <h2 >Upload</h2>
              <h4 className="text-grey">Belum ada Artikel atau Karya yang diupload,</h4>
              <h6 className="text-grey">Pilih Menu Artikel atau Karya untuk upload baru!</h6>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Upload