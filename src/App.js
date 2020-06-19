import React, {Component} from 'react'
import {BrowserRouter as Router,
        Link, Switch, Route} from 'react-router-dom'
import './App.css'

import Home from'./components/Home'
import About from'./components/About'
import Login from'./components/Login'
import Regis from'./components/Regis'
import PemulihanAkun from'./components/PemulihanAkun'

const bgLoginRegis = {
  backgroudColor: '#F0F2F5'
}

const def={
  backgroudColor: 'white'
}

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      toLogin: true
    }
  }  

  handleNavbar= ()=> {
    this.setState(state=>({
      toLogin : !state.toLogin
    }))
  }

  render(){
    const toLogin = this.state.toLogin
    
    return (
      <Router style="abuabu">
        {toLogin ?
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">INREADY WORKGROUP</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="">Kegiatan</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="">Artikel</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="">Karya</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login" onClick={this.handleNavbar}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="regis" onClick={this.handleNavbar}>Daftar</Link>
              </li>
            </ul>
          </div>
        </nav>
        : null
        }
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/regis" exact component={Regis}/>
          <Route path="/pemulihan-akun" component={PemulihanAkun}/>
        </Switch>
      </Router>
    )
  }
}

export default App;
