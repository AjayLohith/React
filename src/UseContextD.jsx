import React, { useContext } from 'react'
import { UserContext } from './UseContextA'


const UseContextD = () => {
  const user=useContext(UserContext)
  return (
    <div className='box'>
        <h1 >Component D</h1>
        <h2>{`Denge ra ${user}`}</h2>

    </div>
  )
}

export default UseContextD
