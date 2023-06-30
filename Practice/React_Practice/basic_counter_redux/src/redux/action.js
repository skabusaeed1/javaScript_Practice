import { ADD, REDUCE } from "./actionTypes";

const handleAdd = (payload) => {
  return {
    type: ADD,
    payload: payload
  };
};

const handleReduce = (payload) => {
    return {
      type: REDUCE,
      payload: payload
    };
  };

  export  {handleAdd,handleReduce}
