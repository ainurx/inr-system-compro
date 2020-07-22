import React, {Component} from 'react'

import Sidenav from '../component/Sidenav'

class UploadKarya extends Component{
  render(){
    return(
      <div>
        <Sidenav/>
        <div className="container">
          <h2>Pamerkan Karya</h2>
        </div>
      </div>
    )
  }
}

export default UploadKarya