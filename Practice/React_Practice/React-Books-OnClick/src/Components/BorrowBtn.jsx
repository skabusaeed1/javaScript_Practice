import React from "react";
import axios from "axios";
import { useState } from "react";

const BorrowBtn = () => {
  const [text, setText] = useState(true);
  return (
    <div>
      {/* Add the buttons as per the requirement */}
      <button onClick={() => setText(false)}>
        {text ? "Borrow" : "Borrowed"}
      </button>
      {!text ? <button onClick={() => setText(true)}>Return</button> : null}
    </div>
  );
};

export default BorrowBtn;
