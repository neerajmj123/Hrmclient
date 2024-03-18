import React from "react";
import '.Employee.css';
function Employee() {
return (
    <>
    <div className="intro ">
          <div className="content">
            {/* <img src={image} alt="" /> */}
            <h3>hi,<span>admin</span></h3>
            <h1>Welcome</h1>
            <p>this is an Admin page</p>
            <Link to={"/content"} className='addbtn'>
              Edit Profile
            </Link>
            <Link to={"/list"} className='addbtn'>
              View Employee
            </Link>
          </div>
        </div>
    </>
)
}
export default Employee;