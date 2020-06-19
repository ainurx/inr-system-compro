import React, {Component} from 'react'
import {Route, Link } from 'react-router-dom'

function EmailVerif(props){
  return(
    <div className="text-center regis-col">
      <img src="mdi_email.png" alt="Email" className="email-icon"/> 
      <h2>Verifikasi Email Anda</h2>
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

class Regis extends Component{
  constructor(props){
    super(props)
    this.state={
      email: false
    }
  }

  handleEmail = () =>{
    this.setState({
      email: true
    })
  }

  render(){
    return(
        <div className="row wrapper">
          <div className="col-md-6 contain-img">
            <img className="bg-img" src="bg-regis.png" alt="bg-regis"/>
          </div>
          <div className="col-md-6 regis-col">
            { !this.state.email? 
            <div>
              <h1 className="text-center">Daftar</h1>
              <form onSubmit={this.handleEmail}>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
                <br/>
                <input type="text" className="form-control" id="inputName" placeholder="Nama"/>
                <br/>
                <input type="password" className="form-control" id="inputPassword4" placeholder="Kata Sandi"/>
                <br/>
                <input type="password" className="form-control" id="inputPassword5" placeholder="Konfirmasi Sandi"/>
                <br/>
                <button type="submit" className="btn font-weight-bold kuning btn-regis">Daftar</button>
              </form>
              <br/>
              <p className="text-center text-grey">Sudah punya akun ? <Link className="text-yellow" to="/login">Log in</Link></p>
            </div>
            : <EmailVerif/>
            }
          </div>
        </div>
    )
  }
}

export default Regis