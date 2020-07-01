import React, {Component} from'react'
import { Link } from 'react-router-dom'

function EmailVerif(props){
  return(
    <div className="card login-card text-center mx-auto">
      <center>
      <img src="icon/mdi_email.png" alt="Email" className="email-icon"/> 
      </center>
      <br/>
      <h2>Pemulihan Akun<br/>Berhasil</h2>
      <p className="text-grey">
        Silahkan <Link to="login" className="text-yellow">Masuk</Link> kembali
      </p>
      <p className="text-grey">
        Lengkapi data anda untuk dapat mengakses fitur <br/>lainnya !   
      </p> 
    </div>
  )
}

class SandiBaru extends Component{
  constructor(props){
    super(props)
    this.state={
      pemulihan: true,
      seePass1: true,
      seePass2: true,
      pass: '',
      verifPass: ''
    }
  }

  handleChange = e =>{
    const {name, value}= e.target
    this.setState({
      [name]: value
    })
  }

  handlePemulihan = (e)=>{
    e.preventDefault()
    if(this.state.pass == this.state.verifPass && this.state.pass != ''){
      this.setState({    
        pemulihan: false
      })
    }else{
      return <h1>ops</h1>
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
      <div className="main-body bg-grey">
        {
          this.state.pemulihan? 
          <div className="card login-card mx-auto text-center">
              <img className="inr-logo kiri" src="icon/logo.png" alt="INR"/><br/>
            <span>
              <img className="icon-account mx-auto" src="icon/mdi_account_circle.png" alt="account"/>
              <h3>Pemulihan Akun</h3>
            </span>
            <p className="text-grey">
              <b>
                Silahkan masukkan Kata sandi baru
              </b>
            </p>
            <form className="mx-auto" onSubmit={this.handlePemulihan}>
              <label id="passText" htmlFor="password" className="text-merah">Kata Sandi minimal 8 digit !</label>
              <div id="inputBox1" className="input-box  new-pass">
                <input type="password" className="my-pass" onChange={this.handleChange}
                  id="pass1" placeholder="Kata Sandi baru"
                  value={this.state.pass} name="pass"/>
                <span>
                  <img id="showPass1" className="eye-icon" 
                    src="icon/eye1.png" alt="lihat" onClick={this.showPassword1}/>
                </span>  
              </div>
              <br/>
              <label id="verifPassText" htmlFor="verifPass" className="text-merah">Konfirmasi Sandi baru</label>
              <div id="inputBox2" className="input-box new-pass">
                <input type="password" className="my-pass" 
                  onChange={this.handleChange}
                  id="pass2" placeholder="Konfirmasi Sandi"
                  value={this.state.verifPass} name="verifPass"/>
                <span>
                <img id="showPass2" className="eye-icon" 
                  src="icon/eye1.png" alt="lihat" onClick={this.showPassword2}/>
                </span>                  
              </div>
              <br/>
              <button type="submit" className="btn font-weight-bold bg-yellow btn-input">Ubah Kata sandi</button>
            </form>
          </div>
          :<EmailVerif/>
        }
      </div>
    )
  }
}

export default SandiBaru