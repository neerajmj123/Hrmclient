import React,{useState}from "react";
import { BrowserRouter as Router, Route,Routes,Link } from 'react-router-dom';
import "./AdminNavbar.css"
import image from './images/icons8-admin-100.png'
function AdminNavbar(){
    return(
        <>
        <nav>
        <div className="navbar">
    <ul className="link">
      <li>
        <a href="">Home</a>
      </li>
      <li>
        <a href="">About</a>
      </li>
      <li>
        <a href="">Services</a>
      </li>
      <li>
        <a href="">Contact</a>
      </li>
    </ul>
    <a href="#" className="action-btn">Admin
 <img src={image} alt="" />
  </a>
  </div>
  <Link to={"/content"} className='addbtn'>
    Add user 
  </Link>
  <Link to={"/list"} className='addbtn'>
    Users
  </Link>
  {/* <Admindrop/> */}
        </nav>
        </>
    )
}
export default AdminNavbar;