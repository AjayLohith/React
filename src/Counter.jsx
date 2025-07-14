import React,{useState} from "react";
import './Styles/Counter.css';

 const Counter = () => {
    const [count,setCount]=useState(0);
    const inCounter=()=>{
      //updater function are needed to update the state
        setCount(prev=>prev+1);
        setCount(prev=>prev+1);
        setCount(prev=>prev+1);
    }
    const deCounter=()=>{
        setCount(prev=>prev-1);
        setCount(prev=>prev-1);
        setCount(prev=>prev-1);
    }
    const reset=()=>{
        setCount(0);
    }
   return (
     <div className="counter-container">
        <h1 className="counter-heading">Counter</h1>
       <h2 className="count-display">{count}</h2>
       <button className="counter-button" onClick={deCounter}>Decrease⬅️</button>
       <button className="counter-button" mx-1 onClick={reset}>Reset0️⃣</button>
       <button className="counter-button"mx-1 onClick={inCounter}>Increase➡️</button>


     </div>
   )
 }
 
 export default Counter
 