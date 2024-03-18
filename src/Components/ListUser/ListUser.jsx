import React, { useState,useEffect } from "react";
import { BrowserRouter as Router, Route,Routes,Link,useParams} from 'react-router-dom';
import Spinner from "../Spinner/Spinner";
import axios from "axios";
import './ListUser.css';

function ListUser(){
    const[data,setData]=useState([]);
    const [token,setToken]=useState('');
    const [loading,setLoading] = useState(true);


    useEffect(()=>{
       const storedToken = localStorage.getItem('token')
        if(storedToken){
          setToken(storedToken)
        }  
        console.log(token);
    },[]);
    useEffect(()=>{
        const fetchData = async ()=>{
            try {
                const response = await axios.get(`http://localhost:3000/getuser`,{
                    headers :{
                        'Authorization':`Bearer ${token}`,
                    },
                })
                setData(response.data.data)
                setLoading(false);
            } catch (error) {
                console.error("Error in fething Data",error) 
            }
        };
        if(token){
        fetchData();
        }
    },[token]);
    const handleViewUser = (userId) =>{
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
        { loading ? (
            <Spinner/>
        ):(
        data.length ?(
            data.map((user)=>(
            <div className="box" key={user._id}>
                <h3>Name:{user.name}</h3>
                <h3>Email:{user.email}</h3>
                <h3>Phone no:{user.phone_no}</h3>
                <div>
                    <Link to={`/userDetails/${user._id}`}> 
                    <button onClick={()=>handleViewUser(user._id)}>View</button>
                    </Link>
                </div>
            </div>
        ))
        ):(
            <h1>No data available</h1>
        )
        )}
        </>
    );
}
export default ListUser