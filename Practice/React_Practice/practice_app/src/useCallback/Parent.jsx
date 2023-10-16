import React, { useState, useCallback } from 'react';
import Child from './Child';

function Parent() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

//   const incrementCount = useCallback(() => {
//     setCount(count + 1);
//   }, [count]);


const incrementCount=()=>{
    setCount(count + 1);
} 

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment Count</button>
      <Child  count1={count1}/>
    </div>
  );
}

export default Parent;


