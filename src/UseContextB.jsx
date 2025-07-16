import React,{useContext} from 'react'
import UseContextC from './UseContextC'
import { UserContext } from './UseContextA'

const UseContextB = () => {
  const user=useContext(UserContext)
  return (
    <div className='box'>
            <h1 >Component B</h1>
            <h2>{`Re lanja ${user}`}</h2>

            <UseContextC/>

    </div>
  )
}

export default UseContextB
