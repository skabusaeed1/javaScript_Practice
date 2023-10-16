import React, { useMemo } from 'react'
import {useState} from 'react'

const UseMemo = () => {
  const [one,setOne]=useState(0);
  const [two,setTwo]=useState(0);

  const isEven=useMemo(()=>{
    let i=0;
    while(i<2000000000)i++;
    return one%2===0;
  },[one])

  // const isEven=()=>{
  //   let i=0;
  //   while(i<2000000000)i++;
  //   return one%2===0;
  // }

  return (
    <div>
      <span>{isEven ?"Even" :"Odd"}</span>
      <button onClick={()=>setOne(one+1)}>AddOne :{one}</button>
      <button onClick={()=>setTwo(two+2)}>AddTwo :{two}</button>
    </div>
  )
}

export default UseMemo
