import React, { useState } from 'react';
import './Content.css'

const Content = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [pincode, setPincode] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name,
      age,
      phoneNumber,
      pincode,
      dateOfBirth
    });
    setName('');
    setAge('');
    setPhoneNumber('');
    setPincode('');
    setDateOfBirth('');
  };

  return (
    <div className="form-container">
      <h2>Add Personal Information</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text"id="name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input type="number"id="age"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input type="tel"id="phoneNumber"
          />
        </div>
        <div className="form-group">
          <label htmlFor="pincode">Pincode:</label>
          <input type="text"id="pincode"
          />
        </div>
        <div className="form-group">
          <label htmlFor="dateOfBirth">Date of Birth:</label>
          <input type="date"id="dateOfBirth"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Content ;
