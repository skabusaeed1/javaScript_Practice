import React from 'react'


const Square = ({onClick,value}) => {
  return (
    <div 
    className='Square-div'
    onClick={onClick}
    >
      <p>{value}</p>
    </div>
  )
}

export default Square
