import React, { useState,useEffect } from "react";

import axios from "axios";
import './ListUser.css';

function ListUser(){
    const[data,setData]=useState([]);
    useEffect(()=>{
        const fethData = async()=>{
            try {
                const response = await axios.get('http://localhost:3000/getuser')
                setData(response.data.data)
            } catch (error) {
                console.error("Error in fething Data",error) 
            }
        };
        fethData();
    },[])
    return(
        <>
        <div className="heading">
            <h1>Users List</h1>
        </div>
        {data.length ?(data.map((user)=>(
            <div className="box" key={user.id}>
                <h3>Name:{user.name}</h3>
                <h3>Email:{user.email}</h3>
                <h3>Phone no:{user.phone_no}</h3>
            </div>
        ))
        ):(
            <h1>Loading.......!</h1>
        )}
        </>
    );
}
export default ListUser