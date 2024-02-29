import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css'
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailerror,setEmailError] = useState('');
  const [passworderror,setPasswordError] =useState('');
  const navigate = useNavigate();

    const email_val =/^[a-z0-9-_]*@([a-z0-9]+)*(\.[a-z]{})/;
    const password_val=/^[a-z0-9_@\.]{6,}$/;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailError();
    setPasswordError();


if(!email_val.test(email)){
  setEmailError("Email error")
}
if(!password_val.test(password)){
  setPasswordError("password must be 6 characters")
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
        const token = response.data.data;
        localStorage.setItem('token', token);
        navigate('/admin')
        alert(response.data.message);
      } else {
        alert(response.data.message)
      }
    } catch (error) {
      console.error('login failed', error)
      alert('Login Failed')
    }
  };
  return (
    <>
      <div className="wrapper">
        <form action="" onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="input-box">
            <input type="email" placeholder="Username" value={email} onChange={(e) => setEmail(e.target.value)} required=""/>
            {emailerror && <div className="error">{emailerror}</div>}
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required=""/>
            {passworderror && <div className="error">{passworderror}</div>}
          </div>
          <button type="submit" className="btn">Login</button>
        </form>
      </div>
    </>
  )
}
export default Login