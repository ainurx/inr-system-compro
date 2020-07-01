import React, {Component} from 'react'
import { Link, Route } from 'react-router-dom'
import PemulihanAkun from './PemulihanAkun'

class Login extends Component{
  constructor(props){
    super(props)
    this.state={
      username: '',
      password: '',
      seePass: true
    }
  }

  handleChange = (e) =>{
    const {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = e =>{
    e.preventDefault()
    const un = document.querySelector('#inputEmail4'),
          pw = document.querySelector('#inputBox'),
          emailText = document.querySelector('#emailText'),
          passText = document.querySelector('#passText')

    if(this.state.username != 'inready@gmail.com'){
      un.classList.add("false-input")
      emailText.style.display = "block"         
    }else{
      un.classList.remove("false-input")
      emailText.style.display = "none" 
    }

    if(this.state.password != 'inready123'){
      pw.classList.add("false-input")
      passText.style.display = "block"
    }else{
      pw.classList.remove("false-input")
      passText.style.display = "none"
    }
  }

  showPassword = ()=>{
    this.setState(state =>({
      seePass: !this.state.seePass
    }))

    const showPass = document.querySelector('#showPass'),
          pass = document.querySelector('#inputPassword4')
      
    if(this.state.seePass === false){
      pass.type = 'password'
      showPass.src ='icon/eye1.png'
    }else{
      pass.type = 'text'
      showPass.src = 'icon/eye2.png'
    }
  }

  render(){ 
    return(
      <div className="mx-auto main-body bg-grey">
        <div className="card login-card mx-auto">
          <img className="inr-logo" src="icon/logo.png" alt="Inready Workgroup"/>
          <h1 className="text-center">Masuk</h1>
            <form className="mx-auto" onSubmit={this.handleSubmit}>
              <label id="emailText" htmlFor="username" className="text-merah">Email anda salah !</label>
              <input type="email" className="form-control" 
                id="inputEmail4" placeholder="Username" 
                name="username" value={this.state.username}
                onChange={this.handleChange}/>
              <br/>
              <label id="passText" htmlFor="password" className="text-merah">Katas sandi anda salah, Lupa Kata Sandi?</label> 
                <div id="inputBox" className="input-box form-wrapper">
                  <input type="password" className="my-pass" 
                  id="inputPassword4" placeholder="Password" 
                  name="password" value={this.state.password}
                  onChange={this.handleChange}/>
                  <span>
                    <img id="showPass" className="eye-icon" 
                    src="icon/eye1.png" alt="lihat" onClick={this.showPassword}/>
                  </span>                
                </div>
              <br/>
              <button className="btn font-weight-bold bg-yellow btn-input" >Masuk</button>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                <label className="form-check-label" htmlFor="defaultCheck1">
                  Remember me
                </label>
              </div>
            </form>
            
            
          <Link className="text-center text-yellow" to="/pemulihan-akun">Lupa Password ?</Link>

          <span className="text-center">Belum punya akun ? <Link className="text-yellow" to="/regis">Daftar</Link></span>
        </div>
      </div>
    )
  }
}

export default Login