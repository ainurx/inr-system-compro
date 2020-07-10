import React, {Component} from'react'
import { Link, Route } from 'react-router-dom'

function EmailVerif(props){
  return(
    <div className="card card-pemulihan login-card text-center mx-auto">
      <center>
      <img src="icon/mdi_email.png" alt="Email" className="email-icon"/> 
      </center>
      <br/>
      <h2>Pemulihan Akun</h2>
      <p className="text-grey">
        Kami baru saja mengirim email verifikasi ke
      </p>
        <p><b>inready@workgroup.com</b></p>
      <p className="text-grey">
        Ikuti tautan di email Anda untuk menyelesaikan pembuatan akun anda   
      </p>
      <p className="text-grey">Jika Anda belum menerimanya setelah beberapa menit, pastikan<br/> untuk memeriksa folder spam / sampah Anda.</p> 
    </div>
  )
}

class PemulihanAkun extends Component{
  constructor(props){
    super(props)
    this.state={
      pemulihan: true,
      email: ''
    }
  }

  handleChange = (e)=>{
    this.setState({
      email: e.target.value
    })
  }

  handlePemulihan = e =>{
    e.preventDefault()
    this.setState({
      pemulihan: false
    })

    const email = document.querySelector('#inputEmail4'),
          emailText = document.querySelector('#emailText')

    if(this.state.email == ''){
      email.classList.add("false-input")
      emailText.style.display = "block"     
    }else{
      email.classList.remove("false-input")
      emailText.style.display = "none"
    }
  }

  render(){
    return(
      <div className="main-body bg-grey">
        
          {this.state.pemulihan?  
            <div className="card card-pemulihan mx-auto text-center">
              <img className="inr-logo kiri" src="icon/logo.png" alt="INR"/><br/>
            <span>
              <img className="icon-account mx-auto" src="icon/mdi_account_circle.png" alt="account"/>
              <h1>Pemulihan Akun</h1>
            </span>
            <p className="text-grey"><b>Masukkan Email untuk pemulihan akun</b> <br/>
              <span className="text-grey-2">Kami akan kirimkan kode verifikasi Email yang anda masukkan</span>
            </p>
            <form className="mx-auto" onSubmit={this.handlePemulihan}>
              <label id="emailText" htmlFor="email" className="text-merah">Lengkapi Email anda !</label>
              <input type="email" className="my-input form-control" name="email"
                id="inputEmail4" placeholder="Masukkan Email"
                value={this.state.email} onChange={this.handleChange}/>
              <br/>
              <button type="submit" className="btn font-weight-bold bg-yellow btn-input">Pulihkan</button>
            </form>
          </div>
          :<EmailVerif/>
        } 
      </div>
    )
  }
}

export default PemulihanAkun