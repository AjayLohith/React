import React, { useState } from 'react';

const OnChange = () => {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [gender, setGender] = useState('');
  const [country, setCountry] = useState('');

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleBio = (e) => {
    setBio(e.target.value);
  };

  const handleGender = (e) => {
    setGender(e.target.value);
  };

  const handleCountry = (e) => {
    setCountry(e.target.value);
  };

  return (
    <div >
      <h2>User Details</h2>

      <p>Name: {name}</p>
      <input
        value={name}
        onChange={handleName}
        placeholder="Enter Name"
      />

      <br /><br />

      <p>Bio: {bio}</p>
      <textarea
        value={bio}
        onChange={handleBio}
        placeholder="Enter Bio"
        rows="4"
      />

      <br /><br />

      <p>Gender: {gender}</p>
      <label>
        <input
          type="radio"
          name="gender"
          value="Male"
          checked={gender === 'Male'}
          onChange={handleGender}
        />
        Male
      </label>

      <label >
        <input
          type="radio"
          name="gender"
          value="Female"
          checked={gender === 'Female'}
          onChange={handleGender}
        />
        Female
      </label>

      <br /><br />

      <p>Country: {country}</p>
      <select value={country} onChange={handleCountry}>
        <option value="">Select Country</option>
        <option value="India">India</option>
        <option value="USA">USA</option>
        <option value="Germany">Germany</option>
      </select>

      <br /><br />

      <h3>Summary</h3>
      <p>Name: {name}</p>
      <p>Bio: {bio}</p>
      <p>Gender: {gender}</p>
      <p>Country: {country}</p>
    </div>
  );
};

export default OnChange;
