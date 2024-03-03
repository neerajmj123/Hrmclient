import React, { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'
import axios from "axios";
function UserDetails(){
    const {userId} =useParams();
    const [user,setUser]=useState(null);

    useEffect(()=>{
        const fetchData = async()=>{
            try {
                const response = await axios.get(`http://localhost:3000/getuser/${userId}`)
                setUser(response.data);
            } catch (error) {
                console.error('Error fetching user details',error);
            }
        };
        fetchData();
    },[userId]);
    if(!user){
        return <div>Loading........</div>
    }
    return(
        <div className="form-container">
      <form  className="form">
        <div className="form-group">
          <input type="text"id="name"placeholder='Name' defaultValue={user ? user.name : ''} readOnly/>
        </div>
        <div className="form-group">
          <input type="email"id="email"placeholder='Email' defaultValue={user ? user.email : ''} readOnly/>
        </div>
        <div className="form-group">
          <input type="tel"id="phoneNumber"placeholder='Phone Number' defaultValue={user ? user.phone_no : ''} readOnly/>
        </div>
        <div className="form-group">
          <input type="text"id="pincode" placeholder='Pincode' defaultValue={user ? user.pincode:''} readOnly/>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    )
}
export default UserDetails;