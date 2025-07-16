import React,{useContext} from 'react'
import UseContextD from './UseContextD'
import { UserContext } from './UseContextA'

const UseContextC = () => {
  const user=useContext(UserContext)
  return (
    <div className='box'>
            <h1 >Component C</h1>
            <h2>{`lawada ${user}`}</h2>
            <UseContextD/>

    </div>
  )
}

export default UseContextC
