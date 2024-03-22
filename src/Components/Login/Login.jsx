import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import './Login.css'
import axios from 'axios';
import Swal from 'sweetalert2';


function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailerror,setEmailError] = useState('');
  const [passworderror,setPasswordError] =useState('');
  const navigate = useNavigate();

const emailValidate=(value)=>{
  const email_val =/^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
  if(!value){
    setEmailError("Enter Your Email")
  }else if(!email_val.test(value)){
    setEmailError("Invalid Email")
  }else{
    setEmailError("")
  }
}
const passwordValidate=(value)=>{
  const password_val=/^.{6,}$/;
  
  if(!value){
    setPasswordError("Enter Your Password")
  }else if(!password_val.test(value)){
    setPasswordError("Enter valid password")
  }else{
    setPasswordError("")
  }
}

  const handleSubmit = async (e) => { 
    e.preventDefault();
    if(!email || !password){

      if(!email){
        setEmailError("Please enter Email")
      }
      if(!password){
        setPasswordError("Please enter password")
      }
      return;
    }
    if(emailerror || passworderror){
      return;
    }
    try {
      const response = await axios.post('http://localhost:3000/login', {
        email,
        password
    },{
      method :"POST",
      headers:{
        "Content-Type":'application/json'
      }
    })

      if (response.data.success) {
        const { token ,lastLogin,user_type} = response.data.data;
        // const token = response.data.data;
        localStorage.setItem('token', token);

        const userTypemap ={
          '65bb1a7d13faaff4f7e60713': 'admin',
          '65bb1a7e13faaff4f7e60714':'employee'
        }
        const usertype = userTypemap[user_type]
       Swal.fire({
        icon : 'success',
        title :'Login Successfull',
        text : response.data.message,
        // background : 'rgba(0,0,0,0.8)',
       }).then((result)=>{
        if(result.isConfirmed){
          if(!lastLogin){
            navigate('/changePassword')
          }else{
            navigate(usertype === 'admin' ? '/admin' : '/employee');
          }
        }
        
       })
      } else {
        Swal.fire({
          icon:'error',
          title:'Login Failed',
          text:'Invalid Email or Password',
          // background : 'rgba(0,0,0,0.8)',
        })
      }
    } catch (error) {
      console.error('login failed', error.response.data.message)
      Swal.fire({
        icon :'error',
        title:'Login failed',
        text : error.response.data.message || 'Login failed'
      })
    }
  };
  return (
    <>
      <div className="wrapper">
        <div className="loginform">
        <form action="" onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="input-box">
            <input type="email" placeholder="Username" value={email} onChange={(e) => {setEmail(e.target.value);emailValidate(e.target.value)}} required=""/>
            {emailerror && <div className="error">{emailerror}</div>}
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" value={password} onChange={(e) => {setPassword(e.target.value);passwordValidate(e.target.value)}} required=""/>
            {passworderror && <div className="error">{passworderror}</div>}
          </div>
          <button type="submit" className="btn">Login</button>
          <Link to = '/forgetpassword'>Forgot Password</Link>
        </form>
        </div>
      </div>
    </>
  )
}
export default Login