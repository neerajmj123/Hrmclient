import React, { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'
import './UserDetails.css'
import axios from "axios";
function UserDetails(){
    const {userId} =useParams();
    const [user,setUser]=useState(null);
    const[editable,setEditable]=useState(false);
    const [updatedUser,setUpdatedUser]=useState({});

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
    const handleEdit = () => {
      setEditable(true);
    }
    const handleSubmit = async(e) => {
      e.preventDefault();
      try {
        await axios.put(`http://localhost:3000/updateUser/${userId}`,updatedUser);
        setEditable(false);
      } catch (error) {
        console.error("error updating user details",error);
      }
    }
    const handleChange = (e)=>{
      const {name,value}=e.target;
      setUpdatedUser({...updatedUser,[name]:value});
    };
    if(!user){
        return <h1>Loading......</h1>
    }
    return(
        <div className="form-container">
      <form  className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="Name" className="userlabel">Name</label>
          <input type="text"id="name"placeholder='Name' value={ editable ? updatedUser.name || user.name : user.name } onChange={handleChange} readOnly={!editable}/>
        </div>
        <div className="form-group">
          <label htmlFor="Email" className="userlabel">Email</label>
          <input type="email"id="email"placeholder='Email' value={ editable?updatedUser.email ||  user.email : user.email} onChange={handleChange} readOnly={!editable}/>
        </div>
        <div className="form-group">
          <label htmlFor="Phone_no" className="userlabel">Phone Number</label>
          <input type="tel"id="phoneNumber"placeholder='Phone Number' value={ editable?updatedUser.phone_no || user.phone_no : user.phone_no}onChange={handleChange} readOnly={!editable}/>
        </div>
        <div className="form-group">
          <label htmlFor="Pincode" className="userlabel">Pincode</label>
          <input type="text"id="pincode" placeholder='Pincode' value={ editable?updatedUser.pincode || user.pincode:user.pincode} onChange={handleChange} readOnly={!editable}/>
        </div>
        {editable ?(
        <button type="submit">Submit</button>
        ):(
        <button type="button" onClick={handleEdit} className="edit">Edit</button>
        )}
      </form>
    </div>
    )
}
export default UserDetails;