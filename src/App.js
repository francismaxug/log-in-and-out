import React, {useState, useEffect} from 'react'
import './App.css';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import Sidebar from './components/Sidebar';
import WelcomPage from './components/WelcomPage';

function App() {
  const [wellcome, setWellcome] = useState(true)
  const [valid, setValide] = useState(false)
  const [button, setButton] = useState(true)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("") 

  useEffect(()=>{
    const localstorageOnStore = localStorage.getItem("store")
    // const localWelcome = localStorage.getItem("store")
    if(localstorageOnStore==="1"){
      setValide(true)
      setWellcome(false)
    }
   
  }, [])

  useEffect(()=>{
  const seria = setTimeout(()=> {
      if(email.includes("@") && password.trim().length >7){
        setButton(false)
      }else{
        setButton(true)
      } 
    }, 700)

    return ()=>{
      // console.log("select");
      clearTimeout(seria)
    }
  }, [email,password])
 const firstInputEmail =(e)=>{
 setEmail(e.target.value)
//  if(e.target.value.includes("@") && password.trim().length >7){
//    setButton(false)
//    return
//  }
//  setButton(true) 

//We will use useEffect above for this 
 }
 
 const firstInputpass=(e)=>{
   setPassword(e.target.value)
//  if(email.includes("@") && e.target.value.trim().length >7){
//    setButton(false)
//  }else{
//    setButton(true)
//  }
//We will use useEffect above for this 
 
 }
   const logDetails =(e)=>{
     e.preventDefault()
     if(email.includes("@") && password.trim().length >=7){
      localStorage.setItem("store", "1")
      setValide(true)
      setWellcome(false)
      return
     }
   }
const trello =()=>{
  localStorage.removeItem("store")
  setWellcome(true)
  setValide(false)
  setButton(true)
}

  return (
    <React.Fragment>
      <div className='App'>
      <Header/>
      {wellcome && <LandingPage onSetEmail={firstInputEmail} onSetPassword={firstInputpass} button={button} onLogDetails={logDetails}/>}
      {valid && <Sidebar backToMain={trello}/>}
      {!wellcome && <WelcomPage/>}
      </div>
    </React.Fragment>
  );
}

export default App;
