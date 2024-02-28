import React, { useState } from 'react';
import './Content.css'

function Content(){
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [dob, setDob] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword]=useState('');
  const [phone_no, setPhone_no] = useState('');
  const [pincode, setPincode] = useState('');

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
          <input type="text"id="name"placeholder='Name' value={name} onChange={(e) =>setName(e.target.value)}/>
        </div>
        <div className="form-group">
          <input type="number"id="age"placeholder='Age' value={age} onChange={(e) =>setAge(e.target.value)}/>
        </div>
        <div className="form-group">
          <input type="date"id="dateOfBirth" placeholder='Date of Birth'value={dob} onChange={(e) =>setDob(e.target.value)}/>
        </div>
        <div className="form-group">
          <input type="email"id="email"placeholder='Email'value={email} onChange={(e) =>setEmail(e.target.value)}/>
        </div>
        <div className="form-group">
          <input type="password"id="password"placeholder='Password' value={password} onChange={(e) =>setPassword(e.target.value)}/>
        </div>
        <div className="form-group">
          <input type="tel"id="phoneNumber"placeholder='Phone Number' value={phone_no} onChange={(e) =>setPhone_no(e.target.value)}/>
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
