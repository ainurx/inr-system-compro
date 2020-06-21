import React from 'react'
import {
        Link, Switch, Route, useRouteMatch} from 'react-router-dom'
import './App.css'

import Home from'./page/Home'
import About from'./page/About'
import Login from'./page/Login'
import Regis from'./page/Regis'
import PemulihanAkun from'./page/PemulihanAkun'
import SandiBaru from'./page/PemulihanAkun2'

const bgLoginRegis = {
  backgroudColor: '#F0F2F5'
}

const def={
  backgroudColor: 'white'
}

function App () {
    return (  
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/regis" exact component={Regis}/>
          <Route path="/pemulihan-akun" component={PemulihanAkun}/>
          <Route path="/sandi-baru" component={SandiBaru}/>
        </Switch>
    )
}

export default App ;
