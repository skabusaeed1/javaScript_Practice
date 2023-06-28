import React from "react";
import { useState, useEffect } from "react";

const Timer = () => {
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [watch, setWatch] = useState(false);
  var timer;
  useEffect(() => {
    if (watch) {
      timer = setInterval(() => {
        setSecond(second + 1);
        if (second === 59) {
          setMinute(minute + 1);
          setSecond(0);
        }
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => {
      clearInterval(timer);
    };
  });

  const clearTimeout = () => {
    setMinute(0);
    setSecond(0);
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <h1>Timer App</h1>
      <h1>
        {minute < 10 ? "0" + minute : minute}:
        {second < 10 ? "0" + second : second}
      </h1>
      <div>
        <button onClick={() => setWatch(true)}>Start</button>
        <button onClick={() => setWatch(false)}>Stop</button>
        <button onClick={() => clearTimeout()}>Reset</button>
      </div>
    </div>
  );
};

export default Timer;
