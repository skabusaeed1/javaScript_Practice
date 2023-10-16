import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios';

const FetchData = () => {
    const [state,setState] = useState([]);
    useEffect(()=>{
      getData()
    },[])

    // const getData=async()=>{
    //   const res=await fetch("https://reqres.in/api/users/")
    //   const data=await res.json()
    //   console.log(data.data);
    //   setState(data.data)
    // }

    const getData=async()=>{
        const res=await axios.get("https://reqres.in/api/users/")
        console.log(res.data.data)
        setState(res.data.data)
    }

  return (
     <div>
      {
        state.map((elme,index)=>{
            return <div key={index}>
                <h5>{elme.first_name}</h5>
                <p>{elme.email}</p>
                <img src={elme.avatar} alt="" />
            </div>
        })
      }
    </div>
  )
}

export default FetchData
