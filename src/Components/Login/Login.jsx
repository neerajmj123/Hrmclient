import React, { useState } from "react";
import './Login.css' 
import axios from 'axios';

function Login  () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/login',{
        email,
        password
      });
      if(response.data.success){
        const token =response.data.data;
        localStorage.setItem('token',token);
        alert(response.data.message);
      }else{
        alert(response.data.message)
      }
    } catch (error) {
      console.error('login failed',error)
    }
  };
  return (
    <>
      <div className="wrapper">
        <form action="" onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="input-box">
            <input type="email" placeholder="Username" value={email} onChange={(e)=>setEmail(e.target.value)} required="" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} required="" />
          </div>
          <button type="submit" className="btn">
            Login
          </button>
        </form>
      </div>
    </>
  )
}
export default Login