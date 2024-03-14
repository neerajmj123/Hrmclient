import React, { useState,useEffect } from "react";
import { BrowserRouter as Router, Route,Routes,Link,useParams} from 'react-router-dom';

import axios from "axios";
import './ListUser.css';

function ListUser(){
    const[data,setData]=useState([]);

    const [token,setToken]=useState('');
    useEffect(()=>{
       const storedToken = localStorage.getItem('token')
        if(storedToken){
          setToken(storedToken)
        }  
        console.log(token);
    },[]);
    useEffect(()=>{
        const fethData = async()=>{
            try {
                const response = await axios.get(`http://localhost:3000/getuser`,{
                    headers :{
                        'Authorization':`Bearer ${token}`,
                    }
                })
                setData(response.data.data)
            } catch (error) {
                console.error("Error in fething Data",error) 
            }
        };
        if(token){
        fethData();
        }
    },[]);
    const HandleViewUser = (userId) =>{
        if(userId  !== undefined){
            console.log("view button clicked for user Id",userId);
        }else{
            console.error('user id is undefined')
        }
    }
    return(
        <>
        <div className="heading">
            <h1>Users List</h1>
        </div>
        {data.length ?(data.map((user)=>(
            <div className="box" key={user._id}>
                <h3>Name:{user.name}</h3>
                <h3>Email:{user.email}</h3>
                <h3>Phone no:{user.phone_no}</h3>
                <div>
                    <Link to={`/userDetails/${user._id}`}> <button onClick={()=>HandleViewUser(user._id)}>View</button></Link>
                </div>
            </div>
        ))
        ):(
            <h1>Loading.......!</h1>
        )}
        </>
    );
}
export default ListUser