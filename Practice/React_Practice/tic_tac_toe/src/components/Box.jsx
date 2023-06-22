import React from "react";
import "./Box.css";

const Box = ({ value, onClick }) => {
  const styles = value == "X" ? "box x" : "box o";
  return (
    <div>
      <button className={styles} onClick={onClick}>
        {value}
      </button>
    </div>
  );
};

export default Box;
