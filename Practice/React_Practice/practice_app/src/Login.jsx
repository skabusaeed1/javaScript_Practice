import React from 'react'
import {useState,useEffect,useContext} from 'react'
import axios from 'axios'
import {context} from './Context'

const Login = () => {
  const {value,setValue}=useContext(context)
    const [state,setState]=useState({email:"",password:""})
    const handlechange=(e)=>{
        setState({...state,[e.target.name]:e.target.value})
    }
    const handlesubmit=async(e)=>{
      setValue(false)
        e.preventDefault();
        console.log(state)
        // const res=await axios.post("http://localhost:8080/user",state)  
        const res=await fetch("http://localhost:8080/user",{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify(state)
        })
    }
   console.log(value)
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input type="email" name="email" onChange={handlechange}  />
        <input type="password" name="password" onChange={handlechange}  />
        <input type="submit"/>
      </form>
    </div>
  )
}

export default Login
