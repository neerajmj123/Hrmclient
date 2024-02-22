import React,{useState} from "react"
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Landing from "./Components/Landing/Landing"
import Login from "./Components/Login/Login"
// import Content from "./Components/Content/Content"
function App() {

  return (
  
      <Router> 
        <Routes>
        <Route exact path="/" Component={Landing}/>
        <Route path="/login" Component={Login}/>
        </Routes>
      </Router>

  
  )
}

export default App
