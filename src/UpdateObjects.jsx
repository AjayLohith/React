import React, { useState } from 'react';

const UpdateObjects = () => {
  const [form, setForm] = useState({
    name: 'Ferrari',
    color: 'Red',
    year: 2025
  });

  // One handler for all input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page refresh
    console.log('Car submitted:', form);
    // You can also send `form` to a backend or validate it here
  };

  return (
    <div>
      <h1>My fav car is: {form.name} {form.color} {form.year}</h1>

      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          value={form.name} 
          onChange={handleChange} 
          placeholder="Enter car name"
        /><br />

        <input 
          type="text" 
          name="color" 
          value={form.color} 
          onChange={handleChange} 
          placeholder="Enter car color"
        /><br />

        <input 
          type="number" 
          name="year" 
          value={form.year} 
          onChange={handleChange} 
          placeholder="Enter car year"
        /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UpdateObjects;
