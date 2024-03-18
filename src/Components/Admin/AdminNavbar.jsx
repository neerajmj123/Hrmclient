import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import "./AdminNavbar.css"
import image from './images/icons8-admin-64.png'
function AdminNavbar() {
  return (
    <>
      <nav>
        {/* <div className="navbar">
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

        </div> */}
        <div className="intro ">
          <div className="content">
            <img src={image} alt="" />
            <h3>hi,<span>admin</span></h3>
            <h1>Welcome</h1>
            <p>this is an Admin page</p>
            <Link to={"/content"} className='addbtn'>
              Add Employee
            </Link>
            <Link to={"/list"} className='addbtn'>
              View Employee
            </Link>
          </div>
        </div>

        {/* <Admindrop/> */}
      </nav>
    </>
  )
}
export default AdminNavbar;