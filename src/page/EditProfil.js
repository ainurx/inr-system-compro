import React, {Component} from 'react'

import Sidenav from '../component/Sidenav'

class EditProfile extends Component{
  render(){
    return(
      <div>
        <Sidenav linkProfileNav="text-yellow"/>
        <section className="wrapper-akun">
          <div className="container">
            <h2>Edit Profile</h2>
            <br/>
            <form >
              <div class="form-group form-edit-profile">
                <label for="editInput1">Nama</label>
                <input type="text" class="form-control" id="editInput1" placeholder="Ainur Rahmat"/>
              </div>
              <div class="form-group form-edit-profile">
                <label for="editInput2">NIR</label>
                <input type="text" class="form-control" id="editInput2" placeholder="4307117005"/>
              </div>
              <div class="form-group form-edit-profile">
                <label for="editINput3">Konsentrasi</label>
                <select className="form-control">
                  <option>Mobile</option>
                  <option>Web</option>
                  <option>Design</option>
                </select>
              </div>
              <div class="form-group form-edit-profile">
                <label for="editINput4">Jabatan</label>
                <input type="text" class="form-control" id="editINput4" placeholder="Kabid Leadership"/>
              </div>
              <div class="form-group form-edit-profile">
                <label for="editINput5">Angkatan</label>
                <select className="form-control">
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                </select>
              </div>
              <div class="form-group form-edit-profile">
                <label for="editINput6">Email</label>
                <input type="text" class="form-control" id="editINput6" placeholder="ainurrahmat1gamil.com"/>
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

export default EditProfile