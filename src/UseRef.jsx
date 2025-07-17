import React,{useRef} from 'react'

const UseRef = () => {
  const inputRef1=useRef(null);
  const inputRef2=useRef(null);
  const inputRef3=useRef(null);

  const handleClick1=()=>{
    inputRef1.current.focus();
    inputRef1.current.style.backgroundColor="grey"
    inputRef2.current.style.backgroundColor=""
    inputRef3.current.style.backgroundColor=""
  }

  const handleClick2=()=>{
    inputRef2.current.focus();
    inputRef2.current.style.backgroundColor="blue"
    inputRef1.current.style.backgroundColor=""
    inputRef3.current.style.backgroundColor=""
  }

  const handleClick3=()=>{
    inputRef3.current.focus();
    inputRef3.current.style.backgroundColor="black"
    inputRef1.current.style.backgroundColor=""
    inputRef2.current.style.backgroundColor=""
  }

  return (
    <div>
      <button onClick={handleClick1}>click me</button>
      <input ref={inputRef1}/>

      <button onClick={handleClick2}>click me</button>
      <input ref={inputRef2}/>

      <button onClick={handleClick3}>click me</button>
      <input ref={inputRef3}/>
    </div>
  )
}

export default UseRef
