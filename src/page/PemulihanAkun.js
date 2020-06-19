import React, {Component} from'react'
import { Link, Route } from 'react-router-dom'

function EmailVerif(props){
  return(
    <div className="card login-card text-center mx-auto">
      <center>
      <img src="mdi_email.png" alt="Email" className="email-icon"/> 
      </center>
      <br/>
      <h2>Pemulihan Akun</h2>
      <p className="text-grey">
        Kami baru saja mengirim email verifikasi ke
      </p>
        <p><b>ainurrahmat1@gmail.com</b></p>
      <p className="text-grey">
        Ikuti tautan di email Anda untuk menyelesaikan pembuatan akun anda   
      </p>
      <p className="text-grey">Jika Anda belum menerimanya setelah beberapa menit, pastikan<br/> untuk memeriksa folder spam / sampah Anda.</p> 
    </div>
  )
}

class PemulihanAkun extends Component{
  constructor(props){
    super(props)
    this.state={
      pemulihan: true
    }
  }

  handlePemulihan = ()=>{
    this.setState({
      pemulihan: false
    })
  }

  render(){
    return(
      <div className="main-body abuabu">
        {
          this.state.pemulihan? 
            <div className="card login-card mx-auto text-center">
              <img className="inr-logo kiri" src="logo.png" alt="INR"/><br/>
            <span>
              <img className="icon-account mx-auto" src="mdi_account_circle.png" alt="account"/>
              <h3>Pemulihan Akun</h3>
            </span>
            <p className="text-grey">Masukkan Email untuk pemulihan akun <br/>
              <span className="text-grey-2">Kami akan kirimkan kode verifikasi Email yang anda masukkan</span>
            </p>
            <form onSubmit={this.handlePemulihan}>
              <input type="email" className="form-control" id="inputEmail4" placeholder="Masukkan Email"/>
              <br/>
              <button type="submit" className="btn font-weight-bold kuning btn-login">Pulihkan</button>
            </form>
          </div>
          :<EmailVerif/>
        }
      </div>
    )
  }
}

export default PemulihanAkun