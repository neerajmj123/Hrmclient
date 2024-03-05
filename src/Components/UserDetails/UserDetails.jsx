import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route,Routes,Link,useParams} from 'react-router-dom';
import './UserDetails.css'
import axios from "axios";
function UserDetails(){
    const {userId} =useParams();
    const [user,setUser]=useState(null);
    const [readOnly,setReadOnly]=useState(true);

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
        return <h1>Loading......</h1>
    }
    const ToggleReadonly=()=>{
      setReadOnly(prevState => !prevState)
    }
    const handleSubmit = async(e) => {
      try {
        await axios.put(`http://localhost:3000/updateUser/${userId}`,user);
        console.log("Data updated succesfully")
      } catch (error) {
        console.log("error updating user details",error);
      }
    }
    return(
        <div className="form-container">
      <form  className="form">
        <div className="form-group">
          <label htmlFor="Name" className="userlabel">Name</label>
          <input type="text"id="name"placeholder='Name' defaultValue={user ? user.name : '' }  readOnly={readOnly} onChange={(e)=>setUser({...user,name:e.target.value})}/>
        </div>
        <div className="form-group">
          <label htmlFor="Email" className="userlabel">Email</label>
          <input type="email"id="email"placeholder='Email' defaultValue={ user ? user.email :'' }  readOnly={readOnly} onChange={(e)=>setUser({...user,email:e.target.value})}/>
        </div>
        <div className="form-group">
          <label htmlFor="Phone_no" className="userlabel">Phone Number</label>
          <input type="tel"id="phoneNumber"placeholder='Phone Number' defaultValue={ user ? user.phone_no : ''} readOnly={readOnly} onChange={(e)=>setUser({...user,phone_no:e.target.value})}/>
        </div>
        <div className="form-group">
          <label htmlFor="Pincode" className="userlabel">Pincode</label>
          <input type="text"id="pincode" placeholder='Pincode' defaultValue={ user ? user.pincode:''}  readOnly={readOnly} onChange={(e)=>setUser({...user,pincode:e.target.value})}/>
        </div>
        
       <Link to="/list"><button type="submit" onClick={handleSubmit}>Submit</button></Link>
      
        <button type="button" onClick={ToggleReadonly} className="edit">Edit</button>
    
      </form>
    </div>
    )
}
export default UserDetails;