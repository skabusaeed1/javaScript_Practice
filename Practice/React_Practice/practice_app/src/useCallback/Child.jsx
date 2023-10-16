import React from 'react';
import {memo} from 'react'

const Child = ({count1}) => {
  console.log('ChildComponent rendering');
  console.log(count1)
  return (
    <div>
      <h2>Child Component</h2>
    </div>
  );
};

export default memo(Child);

