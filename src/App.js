import React from 'react'
import {
        Link, Switch, Route, useRouteMatch} from 'react-router-dom'
import './scss/_style.scss'

import Home from'./page/Home'
import About from'./page/About'
import Login from'./page/Login'
import Regis from'./page/Regis'
import PemulihanAkun from'./page/PemulihanAkun'
import SandiBaru from'./page/PemulihanAkun2'
import Artikel from'./page/Artikel'
import DetailArtikel from './page/DetailArtikel'
import Anggota from './page/Anggota'
import DetailAnggota from './page/DetailAnggota'
import Karya from './page/Karya'
import DetailKarya from './page/DetailKarya'
import Kegiatan from './page/Kegiatan'
import DetailKegiatan from './page/DetailKegiatan'

import Profile from './page/Profile'
import Upload from './page/Upload'
import UploadKarya from './page/UploadKarya'
import UploadArtikel from './page/UploadArtikel'
import EditProfile from './page/EditProfil'
import UbahKataSandi from './page/UbahKataSandi'

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
          <Route path="/list-artikel" exact component={Artikel}/>
          <Route path="/detail-artikel" component={DetailArtikel}/>
          <Route path="/list-anggota" exact component={Anggota}/>
          <Route path="/detail-anggota" component={DetailAnggota}/>
          <Route path="/list-karya" exact component={Karya}/>
          <Route path="/detail-karya" component={DetailKarya}/>
          <Route path="/list-kegiatan" exact component={Kegiatan}/>
          <Route path="/detail-kegiatan" component={DetailKegiatan}/>
          <Route path="/profile-saya" component={Profile}/>
          <Route path="/upload" component={Upload}/>
          <Route path="/upload-karya" component={UploadKarya}/>
          <Route path="/upload-artikel" component={UploadArtikel}/>
          <Route path="/edit-profile" component={EditProfile}/>
          <Route path="/ubah-kata-sandi" component={UbahKataSandi}/>
        </Switch>
    )
}

export default App ;
