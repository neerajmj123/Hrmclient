import React from "react"
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Landing from "./Components/Landing/Landing"
import Login from "./Components/Login/Login"
import Admin from "./Components/Admin/Admin";
import Content from "./Components/Content/Content"
function App() {

  return (
  
      <Router> 
        <Routes>
        <Route exact path="/" Component={Landing}/>
        <Route path="/login" Component={Login}/>
        <Route  path="/admin" Component={Admin}/>
        <Route path="/content" Component={Content}/>
        </Routes>
      </Router>

  
  )
}

export default App
