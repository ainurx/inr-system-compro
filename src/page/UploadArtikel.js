import React,{Component} from 'react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import CKEditor from '@ckeditor/ckeditor5-react'

import Sidenav from '../component/Sidenav'

class UplaodArtikel extends Component{
  render(){
    return(
      <div>
        <Sidenav linkArtikelNav="text-yellow"/>
        <section className="wrapper-akun">
          <div className="container">
            <h2>Upload Artikel</h2>
            <p className="text-grey">Bagikan Tulisan-tulisan yang bermanfaat kamu disini</p>
            <form>
              <div class="input-group mb-3">
                <div class="custom-file">
                  <input type="file" class="custom-file-input" id="inputGroupFile02"/>
                  <label class="custom-file-label" for="inputGroupFile02">Choose file</label>
                </div>
              </div>
              <div className="form-group form-edit-profile">
                <input type="text" class="form-control" id="editInput1" placeholder="Judul Artikel"/>
              </div>
              <div className="form-group">
                <CKEditor className="my-editor"
                  editor={ClassicEditor}
                  onInit={editor=>{

                  }}
                />
              </div>
              <button type="button" class="btn float-right btn-dark btn-edit">Simpan</button>
              <button type="button" class="btn float-right btn-outline-dark btn-edit btn-edit-right">Batal</button>
            </form>
          </div>
        </section>
      </div>
    )
  }
}

export default UplaodArtikel