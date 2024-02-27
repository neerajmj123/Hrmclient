import React, { useState } from 'react';
import './Content.css'

const Content = () => {
  const [name, setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword]=useState('');
  const [age, setAge] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [pincode, setPincode] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name,
      email,
      password,
      age,
      phoneNumber,
      pincode,
      dateOfBirth
    });
    setName('');
    setEmail('');
    setPassword('');
    setAge('');
    setPhoneNumber('');
    setPincode('');
    setDateOfBirth('');
  };

  return (
    <div className="form-container">
      <h2>Add User Information</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <input type="text"id="name"placeholder='Name'
          />
        </div>
        <div className="form-group">
          <input type="number"id="age"placeholder='Age'
          />
        </div>
        <div className="form-group">

          <input type="tel"id="phoneNumber"placeholder='Phone Number'
          />
        </div>
        <div className="form-group">
         
          <input type="text"id="pincode" placeholder='Pincode' 
          />
        </div>
        <div className="form-group">
          <input type="date"id="dateOfBirth" placeholder='Date of Birth'
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Content ;
