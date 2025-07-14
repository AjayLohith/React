import React,{useState } from 'react';
import './Styles/ColorPicker.css';
const ColorPicker = () => {
    const [color,setColor]=useState("#FFFFFF");
    // Handle color change
    const handleColor=(e)=>{
        setColor(e.target.value.toUpperCase());
    };
    // Set text color based on specific background colors
  

 const displayStyle = {
    backgroundColor: color,
    color: color.toUpperCase() === '#FFFFFF' ? '#000000' : '#ffffffff'
  };
 
  return (
    <div className='color-picker-container'>
        <h1><b>ColorPicker</b></h1>
        <p></p>
        <div className="color-display" style={displayStyle}>
            <p className='color-value' >Selected Color: {color}</p>
        </div>
        <br></br>
        <label>Select color: </label> 
        <input type='color' value={color} onChange={handleColor}></input>   
    </div>
  )
}

export default ColorPicker
