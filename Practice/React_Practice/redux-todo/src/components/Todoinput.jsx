import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { requestAction, successAction, errorAction } from "../Redux/action";

const Todoinput = () => {
  const [state, setState] = useState("");
  const dispatch = useDispatch();

  const addTodo=()=>{
    axios.post("http://localhost:3000/todos",{
        title:state,
        status:false
    }).then(()=>{
       dispatch(requestAction());
       axios.get("http://localhost:3000/todos")
       .then((res)=>dispatch(successAction(res.data)))
       .catch(()=>dispatch(errorAction()))
    })
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Enter a Todo"
        onChange={(e) => setState(e.target.value)}
      />
      <button onClick={()=>addTodo()}>Add</button>
    </div>
  );
};

export default Todoinput;
