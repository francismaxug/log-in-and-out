import React from 'react'
import './Landing.css'
const LandingPage = ({button, onSetEmail, onSetPassword, onLogDetails}) => {
//  const [button, setButton] = useState(true)
//  const [email, setEmail] = useState("")
//  const [password, setPassword] = useState("") 
// const firstInputEmail =(e)=>{
// setEmail(e.target.value)
// if(e.target.value.includes("@") && password.trim().length >7){
//   setButton(false)
//   return
// }
// setButton(true) 
// }


// const firstInputpass=(e)=>{
//   setPassword(e.target.value)
// if(email.includes("@") && password.trim().length >7){
//   setButton(false)
// }else{
//   setButton(true)
// }

// }
//   const logDetails =(e)=>{
//     e.preventDefault()
//   }

  return (
    <React.Fragment>
    <div className={`form ${!button ? "valid": ""}`}>
      <form onSubmit={onLogDetails}>
        <label >E-mail</label>
      <input className='move' type='email' placeholder='eg. maxx@gmail.com' onChange={onSetEmail} /> 
      <label>Password</label>
      <input type='password' placeholder='must be more than 7 letters' onChange={onSetPassword}/>
      <div>
      <button type='submit'>Login</button>
      </div>
      </form>
    </div>
    </React.Fragment>
  )
}

export default LandingPage
