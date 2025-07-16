import React,{useState,createContext} from 'react'
import './Styles/UseContextA.css'
import UseContextB from './UseContextB'
import UseContextD from './UseContextD';
export const UserContext=createContext();

const UseContextA = () => {

  const [user,setUser]=useState("maxi")
  return (
    <div className='box'>
      <h1 >Component A</h1>
      <h2>{`Rey puka ${user}`}</h2>
      <UserContext.Provider value={user}>
        <UseContextB user={user}/>
      </UserContext.Provider>
    </div>
  )
}

export default UseContextA
