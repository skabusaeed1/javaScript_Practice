import React from 'react'
import {useState,useMemo} from 'react'

const Memo = () => {
    const [countOne,setcountOne]=useState(0);
    const [countTwo,setcountTwo]=useState(0);
    const increaseOne=()=>{
        setcountOne(countOne+1)
    }
    const increaseTwo=()=>{
        setcountTwo(countTwo+1);
    }
    const isEven=()=>{
    let i=0;
    while(i<2000000000) i++;
    return countOne%2===0;
    }

  return (
    <div>
      <span>{isEven()?"Even":"Odd"}</span>
      <button onClick={increaseOne}>countOne: {countOne}</button>
      <button onClick={increaseTwo}>countTwo: {countTwo}</button>
    </div>
  )
}

export default Memo
