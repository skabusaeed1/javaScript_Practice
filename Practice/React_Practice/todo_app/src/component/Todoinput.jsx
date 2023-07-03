import React from 'react'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {getData} from'../Redux/action'

const Todoinput = () => {
    const [state,setState]=useState('');
    const dispatch = useDispatch();

    const handleData=(e)=>{
        e.preventDefault()
        console.log("hi")
       dispatch(getData(state))
       setState('');
    }
    console.log(state);
  return (
    <div>
      <form onSubmit={(e)=>handleData(e)}>
        <input type="text" placeholder='Enter a Todo..' onChange={(e)=>setState(e.target.value)}/>
        <button type='submit'>ADD</button>
      </form>
    </div>
  )
}

export default Todoinput
