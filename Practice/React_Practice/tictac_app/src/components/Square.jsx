import React from "react";

const Square = ({value,onClick}) => {
  return (
    <div
      className="square"
      style={{
        border: "1px solid black",
        width: "100px",
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={onClick}
    >
      <h5>{value}</h5>
    </div>
  );
};

export default Square;
