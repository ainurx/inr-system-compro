import React, {Component} from 'react'
import dropzone from 'dropzone'

import Sidenav from '../component/Sidenav'

class UploadKarya extends Component{
  render(){
    return(
      <div>
        <Sidenav linkKaryaNav="text-yellow"/>
        <section className="wrapper-akun">
          <div className="container">
            <h2>Pamerkan Karya</h2>
            <br/><br/>
            <form action="/file-upload"
                  className="dropzone"
                  id="my-awesome-dropzone">
              <div className="row">
                <div className="col-md-6">
                  <input type="file" name="file" multiple/>
                </div>
                <div className="col-md-6">
                  <div class="form-group form-edit-profile">
                    <input type="text" class="form-control" id="namaProject" placeholder="Nama Project"/>
                  </div>                  
                  <div class="form-group form-edit-profile">
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3">Deskripsi</textarea>
                  </div>                  
                  <div class="form-group form-edit-profile">
                    <input type="text" class="form-control" id="urlProject" placeholder="URL Project"/>
                  </div>                  
                  <div class="form-group form-edit-profile">
                    <input type="text" class="form-control" id="timProject" placeholder="Nama Tim"/>
                  </div>                  
                </div>
              </div>
              <button type="button" class="btn btn-outline-dark btn-edit btn-edit-right">Batal</button>
              
              <button type="button" class="btn btn-dark btn-edit">Simpan</button>
            </form>

          </div>
        </section>
      </div>
    )
  }
}

export default UploadKarya