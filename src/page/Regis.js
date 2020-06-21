import React, {Component} from 'react'
import {Route, Link } from 'react-router-dom'

function EmailVerif(props){
  return(
    <div className="text-center regis-col">
      <img src="icon/mdi_email.png" alt="Email" className="email-icon"/> 
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
      seePass1: true,
      seePass2: true,
      email: false,
      gmail: '',
      nama: '',
      pass: '',
      verifPass: ''
    }
  }

  handleChange = e =>{
    const {name, value} = e.target
    this.setState({
      [name] : value
    })
  }

  handleEmail = e =>{
    e.preventDefault()
    const nama = document.querySelector('#inputName'),
          email = document.querySelector('#exampleInputEmail1'),
          pass = document.querySelector('#inputBox1'),
          verifPass = document.querySelector('#inputBox2'),
          nameText = document.querySelector('#nameText'),
          emailText = document.querySelector('#emailText'),
          passText = document.querySelector('#passText'),
          verifPassText = document.querySelector('#verifPassText')
     
    if(this.state.nama == ''){
      nama.classList.add("false-input")
      nameText.style.display = "block"     
    }else{
      nama.classList.remove("false-input")
      nameText.style.display = "none"
    } 
    if(this.state.gmail == ''){
      email.classList.add("false-input")
      emailText.style.display = "block"     
    }else{
      email.classList.remove("false-input")
      emailText.style.display = "none"
    }  
    if(this.state.pass.length <= 7){
      pass.classList.add("false-input")
      passText.style.display = "block"     
    }else{
      pass.classList.remove("false-input")
      passText.style.display = "none"
    } 
    if(this.state.verifPass != this.state.pass){
      verifPass.classList.add("false-input")
      verifPassText.style.display = "block"     
    }else{
      verifPass.classList.remove("false-input")
      verifPassText.style.display = "none"
    } 
  }

  showPassword1 = ()=>{
    this.setState(state =>({
      seePass1: !this.state.seePass1
    }))

    const showPass1 = document.querySelector('#showPass1'),     
          pass1 = document.querySelector('#pass1')
      
    if(this.state.seePass1 === false){
      pass1.type = 'password'
      showPass1.src ='icon/eye1.png'
    }else{
      pass1.type = 'text'
      showPass1.src = 'icon/eye2.png'
    }
  }

  showPassword2 = ()=>{
    this.setState({
      seePass2: !this.state.seePass2
    })
    const showPass2 = document.querySelector('#showPass2'),
          pass2 = document.querySelector('#pass2')

    if(this.state.seePass2 === false){
      pass2.type = 'password'
      showPass2.src ='icon/eye1.png'
    }else{
      pass2.type = 'text'
      showPass2.src = 'icon/eye2.png'
    }
  }

  render(){
    return(
        <div className="row wrapper">
          <div className="col-md-6 contain-img">
            <img className="inr-logo absolute-logo" src="icon/Inready Logo 1 (Traced).png" alt="inr"/>
            <img className="bg-img" src="bg-regis.png" alt="bg-regis"/>
          </div>
          <div className="col-md-6 regis-col">
            { !this.state.email? 
            <div>
              <h1 className="text-center">Daftar</h1>
              <form onSubmit={this.handleEmail}>
                <label id="nameText" htmlFor="nama" className="text-merah">Masukkan nama anda !</label>
                <input type="text" className="form-control" onChange={this.handleChange}
                  id="inputName" placeholder="Nama"
                  value={this.state.nama} name="nama"/>
                <br/>
                <label id="emailText" htmlFor="gmail" className="text-merah">Lengkapi Email anda !</label>
                <input type="email" className="form-control" onChange={this.handleChange}
                  id="exampleInputEmail1" aria-describedby="emailHelp" 
                  placeholder="Email" value={this.state.gmail}
                  name="gmail"/>
                <br/>
                <label id="passText" htmlFor="password" className="text-merah">Kata Sandi minimal 8 digit !</label>
                <div id="inputBox1" className="input-box">
                  <input type="password" className="my-pass" onChange={this.handleChange}
                    id="pass1" placeholder="Kata Sandi"
                    value={this.state.pass} name="pass"/>
                  <span>
                    <img id="showPass1" className="eye-icon" 
                    src="icon/eye1.png" alt="lihat" onClick={this.showPassword1}/>
                  </span>  
                </div>
                <br/>
                <label id="verifPassText" htmlFor="verifPass" className="text-merah">Konfirmasi Kata Sandi anda !</label>
                <div id="inputBox2" className="input-box">
                  <input type="password" className="my-pass" onChange={this.handleChange}
                    id="pass2" placeholder="Konfirmasi Sandi"
                    value={this.state.verifPass} name="verifPass"/>
                  <span>
                    <img id="showPass2" className="eye-icon" 
                    src="icon/eye1.png" alt="lihat" onClick={this.showPassword2}/>
                  </span>                  
                </div>
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