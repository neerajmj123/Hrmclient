import React, { useState } from "react";
import './Login.css'
const Login = () => {
  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')
  return (
    <>
      <div className="wrapper">
        <form action="">
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" required="" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="password" required="" />
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