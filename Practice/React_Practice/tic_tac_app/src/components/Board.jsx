import React from 'react'  
import Square from './Square' 
import {useState,useEffect} from 'react'

const Board = () => {
  const [state,setState]=useState(Array(9).fill(null))
  const [isXval,setXval]=useState(true)

  const getWinner=()=>{
    const winner=[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]
    for(let i of winner){
       const [a,b,c]=i;
       if(state[a]!=null&& state[a]===state[b]&& state[b]===state[c]&& state[c]===state[a]){
        return state[a];
       }
    }
    return false
  }
  const checkFun=getWinner();

  const handleClick=(index)=>{
   const newState={...state};
    newState[index]=isXval ? "X" : "O";
    setState(newState);
    setXval(!isXval);
  }
  
  const handleReset=()=>{
    setState(Array(9).fill(null))
  }

  return (
    <div className='main'>
      <button className='btn' onClick={()=>handleReset()}>Reset</button>
      <div className='Board-container'>
      <div>
         <Square onClick={()=>state[0]==null && handleClick(0)} value={state[0]}/>
         <Square onClick={()=>state[1]==null &&handleClick(1)} value={state[1]}/>
         <Square onClick={()=>state[2]==null &&handleClick(2)} value={state[2]}/>
      </div>
      <div>
         <Square onClick={()=>state[3]==null &&handleClick(3)} value={state[3]}/>
         <Square onClick={()=>state[4]==null &&handleClick(4)} value={state[4]}/>
         <Square onClick={()=>state[5]==null &&handleClick(5)} value={state[5]}/>
      </div>
      <div>
         <Square onClick={()=>state[6]==null &&handleClick(6)} value={state[6]}/>
         <Square onClick={()=>state[7]==null &&handleClick(7)} value={state[7]}/>
         <Square onClick={()=>state[8]==null &&handleClick(8)} value={state[8]}/>
      </div>
      </div>
      <div className='info-div'>
      {checkFun==false ? (
        isXval ? <h1>X's turn</h1> : <h1>O's turn</h1>
       ):<h1 className='winner'>{checkFun} is Winner</h1>}
      </div>
    </div>
  )
}

export default Board
