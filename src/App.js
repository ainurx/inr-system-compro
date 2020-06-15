import React, {Component} from 'react'
import {BrowserRouter as Router,
        Link, Switch, Route} from 'react-router-dom'
import './App.css'

import Home from'./components/Home'
import About from'./components/About'

class App extends Component {
  render(){
    return (
      <Router>
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
            </ul>
          </div>
        </nav>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
        </Switch>
      </Router>
    )
  }
}

export default App;
