import React,{useState} from 'react'

const UpdateObjects = () => {
    const[car,setCar]=useState({name:"Ferrari",
                                color:"Red",
                                year:2025});

const handleCar=(e)=>{
    setCar(prev=>
        ({...prev,name:e.target.value})
    );
};
const handleColor=(e)=>{
    setCar(prev=>
        ({...prev,color:e.target.value})
    );
    
};
const handleYear=(e)=>{
    setCar(prev=>
        ({...prev,year:e.target.value})
    );
};
  return (
    <div>
      <h1>My fav car is: {car.name} {car.color} {car.year}</h1>

      <input type='text' value={car.name} onChange={handleCar}></input><br/>
       <input type='text' value={car.color} onChange={handleColor}></input><br/>
        <input type='number' value={car.year} onChange={handleYear}></input>
    </div>
  )
}

export default UpdateObjects
