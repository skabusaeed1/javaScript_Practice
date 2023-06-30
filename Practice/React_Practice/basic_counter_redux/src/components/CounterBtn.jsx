import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleAdd, handleReduce } from "../redux/action";

const CounterBtn = () => {
  const { count } = useSelector((store) => {
    return store;
  });
  const dispatch = useDispatch();
  const addCount = (val) => {
    dispatch(handleAdd(val));
  };
  const reduceCount = (val) => {
    dispatch(handleReduce(val));
  };
  return (
    <div>
      <button onClick={() => addCount(1)}>Add</button>
      <button onClick={() => reduceCount(1)} disabled={count == 0}>
        Reduce
      </button>
    </div>
  );
};

export default CounterBtn;
