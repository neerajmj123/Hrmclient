import React, { useState } from "react";
import './Login.css' 
import axios from "axios";
import Content from "../Content/Content";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        <Login handleLoginSuccess={handleLoginSuccess} />
      ) : (
        <Content />
      )}
    </div>
  );
};
const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async(event)=>{
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:4102/login',{
        username:username,
        password:password
      })
      if(response.data.success){
        alert("login sucessfull")
      }else{
        alert("Invalid login")
      }
    } catch (error) {
      alert("an error occured ")
    }
  }
  return (
    <>
      <div className="wrapper">
        <form action="" onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="input-box">
            <input type="text1" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)} required="" />
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