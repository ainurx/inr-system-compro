import React, {Component} from 'react'
import { Link, Route } from 'react-router-dom'
import PemulihanAkun from './PemulihanAkun'

class Login extends Component{

  render(){
    return(
      <div className="mx-auto main-body abuabu">
        <div className="card login-card mx-auto">
          <img className="login-logo" src="logo.png" alt="Inready Workgroup"/>
          <h1 className="text-center">Log In</h1>
          <form className="mx-auto" onSubmit="">
            <input type="email" className="form-control" 
              id="inputEmail4" placeholder="Username" 
              name="username"
              value={this.state.username}/>
            <br/>
            <input type="password" className="form-control" 
              id="inputPassword4" placeholder="Password" 
              name="password" 
              value={this.state.password}/>
            <br/>
            <button type="submit" className="btn font-weight-bold kuning btn-login">Masuk</button>
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