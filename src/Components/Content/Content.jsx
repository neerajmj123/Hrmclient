import React, { useState } from 'react';
import './Content.css'

function Content(){
  const [name, setName] = useState('');
  const [nameError,setNameError]=useState('');
  const [age, setAge] = useState('');
  const [ageError,setAgeError]=useState('')
  const [dob, setDob] = useState('');
  const [dobError,setDobError]=useState('')
  const [email,setEmail] = useState('');
  const [emailError,setEmailError]=useState('');
  const [password,setPassword]=useState('');
  const [passwordError,setPasswordError]=useState('');
  const [phone_no, setPhone_no] = useState('');
  const [phone_noError,setPhone_noError] =useState('');
  const [pincode, setPincode] = useState('');
  const [pincodeError,setPincodeError]=useState('')

  const nameValidate =(value)=>{
    const name_val=/^[A-Za-z]$/;
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
  const dobValidate =(value)=>{
    const dob_val= /^(0[1-9]|[1-2][0-9]|3[0-1])-(0[1-9]|1[0-2])-(19|20)\d{2}$/;

    if(!value){
      setDobError("Enter Date of birth")
    }else if(!dob_val.test(value)){
      setDobError('Invalid Date of birth')
    }else{
      setDobError('')
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
  const passwordValidate=(value)=>{
    const password_val=/^[a-z0-9_@\.]{8,}$/;
    
    if(!value){
      setPasswordError("Enter Your Password")
    }else if(!password_val.test(value)){
      setPasswordError("Password must be 8 Characters")
    }else{
      setPasswordError("")
    }
  }
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
      const data = {name,age,dob,email,password,phone_no,pincode};
      const json_data = JSON.stringify(data);
      console.log("json_data",json_data)

      const response = await fetch('http://localhost:3000/createUser',{
        method :'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:json_data,
      })

      if(response.ok){
        const responseData = await response.json();
        alert(responseData.message)
      }else{
        const errorData =await response.json();
        alert(errorData.message)
      }
    } catch (error) {
      console.error('Insertion error',error)
      alert('Something error')
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
          <input type="date"id="dateOfBirth" placeholder='Date of Birth'value={dob} onChange={(e) =>{setDob(e.target.value),dobValidate(e.target.value)}}/>
          {dobError && <div className="error">{dobError}</div>}

        </div>
        <div className="form-group">
          <input type="email"id="email"placeholder='Email'value={email} onChange={(e) =>{setEmail(e.target.value),emailValidate}}/>
        </div>
        <div className="form-group">
          <input type="password"id="password"placeholder='Password' value={password} onChange={(e) =>setPassword(e.target.value)}/>
        </div>
        <div className="form-group">
          <input type="tel"id="phoneNumber"placeholder='Phone Number' value={phone_no} onChange={(e) =>{setPhone_no(e.target.value),phonenoValidate(e.target.value)}}/>
          {phone_noError && <div className="error">{phone_noError}</div>}

        </div>
        <div className="form-group">
          <input type="text"id="pincode" placeholder='Pincode' value={pincode} onChange={(e) =>setPincode(e.target.value)}/>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Content;
