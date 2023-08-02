
import React, { useState } from 'react'
import Board from './Board'

const Square = ({value, onSquareClick}) => {

  const [valuestate, setValueState] = useState(null)

  function handleClick(){
    console.log('clicked')
    setValueState('X');
  }


  return (
 
     <>
     <button className="square" onClick={onSquareClick}>{value}</button>
     </> 
    
      

  )
}

export default Square



