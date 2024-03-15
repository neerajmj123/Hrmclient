import React, { useEffect, useState } from 'react';
import './Content.css'
import Swal from 'sweetalert2'
// import {useNavigate} from 'react-router-dom'
import axios from 'axios';

function Content(){

  // const navigate = useNavigate();
  // const isToken = ()=>{
  //   const token = localStorage.getItem('token')
  //   return ! token;
  // }
  // if(! isToken()){
  //   Swal.fire({
  //     title : 'Error',
  //     text :'You have to login',
  //     icon:'error',
  //     button :'Login',
  //   }).then(()=>{
  //     navigate('/login')
  //   });
  //   return null;
  // }


  const [name, setName] = useState('');
  const [nameError,setNameError]=useState('');
  const [age, setAge] = useState('');
  const [ageError,setAgeError]=useState('')
  const [email,setEmail] = useState('');
  const [emailError,setEmailError]=useState('');
  // const [password,setPassword]=useState('');
  // const [passwordError,setPasswordError]=useState('');
  const [phone_no, setPhone_no] = useState('');
  const [phone_noError,setPhone_noError] =useState('');
  const [pincode, setPincode] = useState('');
  const [pincodeError,setPincodeError]=useState('')
  const [token,setToken]=useState('');
  const [generatedPassword,setGeneratedPassword] = useState('');
 useEffect(()=>{
  const storedToken = localStorage.getItem('token')
  if(storedToken){
    setToken(storedToken)
  }
 })
  const nameValidate =(value)=>{
    const name_val=/^[A-Za-z]{6}$/i;
    if(!value){
      setNameError("Enter Name")
    }else if(!name_val.test(value)){
      setNameError('Check your name')
    }else{
      setNameError('')
    }
  }
  const ageValidate =(value)=>{
    const age_val= /^(0?[1-9]|[1-9][0-9]|[1][0-1][0-9]|120)$/;
    if(!value){
      setAgeError("Enter Age")
    }else if(!age_val.test(value)){
      setNameError('Invalid Age')
    }else{
      setAgeError('')
    }
  }

  const emailValidate=(value)=>{
    const email_val =/^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
    if(!value){
      setEmailError("Enter Your Email")
    }else if(!email_val.test(value)){
      setEmailError("Invalid Email")
    }else{
      setEmailError("")
    }
  }
  // const passwordValidate=(value)=>{
  //   const password_val=/^[a-z0-9_@\.]{8,}$/;
    
  //   if(!value){
  //     setPasswordError("Enter Your Password")
  //   }else if(!password_val.test(value)){
  //     setPasswordError("Password must be 8 Characters")
  //   }else{
  //     setPasswordError("")
  //   }
  // }
  const phonenoValidate=(value)=>{
    const phoneno_val= /^(\+\d{1,3}[- ]?)?\d{10}$/;
    if(!value){
      setPhone_noError("Enter Your Phone Number")
    }else if(!phoneno_val.test(value)){
      setPhone_noError("Invalid phone number")
    }else{
      setPhone_noError("")
    }
  }
  const pincodeValidate=(value)=>{
    const pincode_val = /^[1-9][0-9]{6}$/;

    if(!value){
      setPincodeError("Enter Your Pincode")
    }else if(!pincode_val.test(value)){
      setPincodeError("Invalid pincode")
    }else{
      setPincodeError("")
    }
  }

  const handleSubmit =async(e) => {
    e.preventDefault();
    try {
      const data = {name,age,email,phone_no,pincode};
      const json_data = JSON.stringify(data);
      console.log("json_data",json_data)

      const response = await axios.post('http://localhost:3000/createUser',json_data,{
      
        headers:{
          'Authorization':`Bearer ${token}`,
          'Content-Type':'application/json',
        },
        body:json_data,
      })
      const responseData =  response.data;
      console.log(responseData)
      if(responseData.errors){
        if(responseData.errors.name||responseData.errors.name){
          setNameError(responseData.errors.name || responseData.errors.name)
        }
        if(responseData.errors.age||responseData.errors.age){
          setAgeError(responseData.errors.age || responseData.errors.age)
        }
        if(responseData.errors.email||responseData.errors.email){
          setEmailError(responseData.errors.email || responseData.errors.email)
        }
        // if(responseData.errors.password||responseData.errors.password){
        //   setPasswordError(responseData.errors.password || responseData.errors.password)
        // }
        if(responseData.errors.phone_no||responseData.errors.phone_no){
          setPhone_noError(responseData.errors.phone_no || responseData.errors.phone_no)
        }
        if(responseData.errors.pincode||responseData.errors.pincode){
          setPincodeError(responseData.errors.pincode || responseData.errors.pincode)
        }
      }else if(responseData.success){
        const passwordFromServer = response.data.password;
        setGeneratedPassword(passwordFromServer);
        Swal .fire({
          icon : "success",
          title : "success",
          text : response.message
        })
      }
  
    } catch (error) {
      
      Swal.fire({
        icon : "error",
        title : "error",
        text : "error in inserting data"
      })
    }
  }

  return (
    <div className="form-container">
      <h2>Add User Information</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <input type="text"id="name"placeholder='Name' value={name} onChange={(e) =>{setName(e.target.value),nameValidate(e.target.value)}}/>
          {nameError && <div className="error">{nameError}</div>}
        </div>
        <div className="form-group">
          <input type="number"id="age"placeholder='Age' value={age} onChange={(e) =>{setAge(e.target.value),ageValidate
          (e.target.value)}}/>
          {ageError && <div className="error">{ageError}</div>}
        </div>
        <div className="form-group">
          <input type="email"id="email"placeholder='Email'value={email} onChange={(e) =>{setEmail(e.target.value),emailValidate(e.target.value)}}/>
          {emailError && <div className="error">{emailError}</div>}
        </div>
        {/* <div className="form-group">
          <input type="password"id="password"placeholder='Password' value={password} onChange={(e) =>{setPassword(e.target.value),passwordValidate(e.target.value)}}/>
          {passwordError && <div className="error">{passwordError}</div>}
        </div> */}
        <div className="form-group">
          <input type="tel"id="phoneNumber"placeholder='Phone Number' value={phone_no} onChange={(e) =>{setPhone_no(e.target.value),phonenoValidate(e.target.value)}}/>
          {phone_noError && <div className="error">{phone_noError}</div>}
        </div>
        <div className="form-group">
          <input type="text"id="pincode" placeholder='Pincode' value={pincode} onChange={(e) =>{setPincode(e.target.value),pincodeValidate(e.target.value)}}/>
          {pincodeError && <div className="error">{pincodeError}</div>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Content;
