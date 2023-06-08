import React, {useState} from 'react'
import './Login.css'
import {Link} from 'react-router-dom'
import logo from '../pic/logo.png'
import welcomeImg from '../pic/welcomeImg.jpg'

const Login=() => {

    const [emailval, setemailval]= useState("");
    const [passval,setpassval]= useState("");

    const handlesubmit=(event)=>{
        event.preventDefault();
    }



  return (
    <div className="main-login">
        Login Page<br/>
        
        <div className="login-contain">
            <div className="left-side">
                <div className="img-class">
                    <img src={logo} id="img-id" alt="" srcset=""/>
                </div>
                <form onSubmit={handlesubmit}>
                    <label for="email">Email</label>
                        <input placeholder="Enter yout email..." type="email"
                        value={emailval}
                        onChange={(e)=>{setemailval(e.target.value)}} id="email1"/>
                    <label for="pwd1">Password</label>
                        <input placeholder="Enter Password" type="password" 
                        value={passval} onChange={(e)=>{setpassval(e.target.value)}}
                        id="pwd1"/>
                        <button type="submit" id="sub_btn">Login</button>
                </form>
                <div>
                   <h4>Don't have an Account? <Link to='/Register'>Move to Register Page</Link></h4>
                </div>
            </div>
            <div className="right-side">
                <div className="welcomeNote">
                    <h3 className="welcomeH3">Welcome Back, </h3>
                </div>
                <div className="welcomeImg">
                    <img src={welcomeImg} id='wel-img-id' alt="" srcset=""/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login
