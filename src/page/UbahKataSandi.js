import React, {Component} from 'react'

import Sidenav from '../component/Sidenav'

class UbahkataSandi extends Component{
  render(){
    return(
      <div>
        <Sidenav linkSandiNav="text-yellow"/>
        <section className="wrapper-akun">
          <div className="container">
            <h2>Ubah Kata Sandi</h2>
            <br/><br/>
            <form>
              <div class="form-group form-edit-profile">
                <input type="text" class="form-control" id="passLama" placeholder="Kata Sandi Lama"/>
              </div>
              <div class="form-group form-edit-profile">
                <input type="text" class="form-control" id="passBaru" placeholder="Kata Sandi Baru"/>
              </div>
              <div class="form-group form-edit-profile">
                <input type="text" class="form-control" id="passBaru2" placeholder="Konfirmasi Kata Sandi Baru"/>
              </div>
              <button type="button" class="btn btn-outline-dark btn-edit btn-edit-right">Batal</button>
              <button type="button" class="btn btn-dark btn-edit">Ubah Sandi</button>
            
            </form>
          </div>
        </section>
      </div>
    )
  }
}

export default UbahkataSandi
