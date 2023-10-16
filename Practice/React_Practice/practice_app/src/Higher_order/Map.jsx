import React from 'react'
import {useState,useEffect} from 'react'

const Map = () => {
    const [state,setState]=useState([1,2,3,4,5,6])
    const [state1,setState1]=useState([])

    useEffect(()=>{
        // let data=[...state].filter((elem,index)=>{
        //     return elem%2==0
        // })
        // setState1(data)
        let data=[...state].reduce((acc,curEle)=>{
            return acc+curEle;
        })
        setState1(data)
    },[])
    console.log(state1)
  return (
    <div>
      {/* {
        state1.map((elem,index)=>{
           return <h2 key={index}>{elem}</h2>
        })
      } */}
      <h2>{state1}</h2>
    </div>
  )
}

export default Map
