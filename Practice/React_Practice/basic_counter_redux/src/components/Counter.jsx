import React from "react";
import { useSelector } from "react-redux";
import CounterBtn from "./CounterBtn";

function Counter() {
  const { count } = useSelector((store) => {
    return store;
  });
  return (
    <div>
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <CounterBtn />
    </div>
  );
}

export default Counter;
