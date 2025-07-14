import React,{use, useState} from "react";


const SetUpdate = () => {
    const [name,setName]=useState("Ajay");
    const [age,setAge]=useState(21);
    const [isEmployed,setIsEmployed]=useState(false);


    const updateName=()=>{
      setName("Al Pacino");
    };
     const updateAge=()=>{
      setAge(age+1);
    };
    const updateEmployment=()=>{
        setIsEmployed(!isEmployed);
    }
  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set  name</button>

      <p>Age: {age}</p>
      <button onClick={updateAge}>Set  age</button>

       <p>Emplyed: {isEmployed?"Yes":"No"}</p>
      <button onClick={updateEmployment}>Set  employment</button>

    </div>
  )
}

export default SetUpdate
