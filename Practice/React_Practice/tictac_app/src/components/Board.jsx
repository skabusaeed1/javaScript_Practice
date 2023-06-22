import React from "react";
import Square from "./Square";
import { useState } from "react";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXval, setXval] = useState(true);
  const [isval, setVal] = useState(false);

  const getWinner = () => {
    const winner = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i of winner) {
      const [a, b, c] = i;
      if (
        state[a] != null &&
        state[a] == state[b] &&
        state[b] == state[c] &&
        state[c] == state[a]
      ) {
        return state[a];
      }
    }
    return false;
  };

  const isWinner = getWinner();

  const handleclick = (index) => {
    const newState = { ...state };
    newState[index] = isXval ? "X" : "O";
    setState(newState);
    setXval(!isXval);
  };
  return (
    <>
      <button
        style={{
          padding: "8px 10px",
          textAlign: "center",
          marginTop: "8%",
          marginBottom: "3%",
          marginLeft: "46%",
          border: "none",
          fontSize: "2rem",
          backgroundColor: "black",
          color: "white",
          borderRadius: "10px",
        }}
        onClick={() => {
          setState(Array(9).fill(null));
          // setXval(true);
        }}
      >
        Restart
      </button>
      <div className="board-container">
        <>
          <div className="board-row">
            <Square
              onClick={() => state[0] == null && handleclick(0)}
              value={state[0]}
            />
            <Square
              onClick={() => state[1] == null && handleclick(1)}
              value={state[1]}
            />
            <Square
              onClick={() => state[2] == null && handleclick(2)}
              value={state[2]}
            />
          </div>
          <div className="board-row">
            <Square
              onClick={() => state[3] == null && handleclick(3)}
              value={state[3]}
            />
            <Square
              onClick={() => state[4] == null && handleclick(4)}
              value={state[4]}
            />
            <Square
              onClick={() => state[5] == null && handleclick(5)}
              value={state[5]}
            />
          </div>
          <div className="board-row">
            <Square
              onClick={() => state[6] == null && handleclick(6)}
              value={state[6]}
            />
            <Square
              onClick={() => state[7] == null && handleclick(7)}
              value={state[7]}
            />
            <Square
              onClick={() => state[8] == null && handleclick(8)}
              value={state[8]}
            />
          </div>
        </>
      </div>
      <div style={{ textAlign: "center", fontSize: "2.5rem" }}>
        {isWinner == false ? (
          isXval ? (
            <h2>X's turn</h2>
          ) : (
            <h2>O's turn</h2>
          )
        ) : (
          <h1>{isWinner} has won the match</h1>
        )}
      </div>
      {isval ? <h1>Match drawn</h1> : null}
    </>
  );
};

export default Board;
