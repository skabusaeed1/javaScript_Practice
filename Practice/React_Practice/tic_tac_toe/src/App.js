import React from "react";
import "./App.css";
import Board from "./components/Board";
import ScoreBoard from "./components/ScoreBoard";
import { useState } from "react";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);
  const [score,setScore]=useState({xScore:0,oScore:0})

  const Win_Condition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const checkWinner = (board) => {
    for (let i = 0; i < Win_Condition.length; i++) {
      const [x, y, z] = Win_Condition[i];
      if (board[x] != null && board[x] == board[y] && board[y] == board[z]) {
        console.log(board[x]);
        return board[x];
      }
    }
  };

  const handleBox = (index) => {
    const newBoard = board.map((value, newIndex) => {
      if (index === newIndex) {
        return xPlaying ? "X" : "O";
      } else {
        return value;
      }
    });
   const winner=checkWinner(newBoard);
   if(winner){
    if(winner=="O"){
      const {oScore}=score;
      oScore++;
      setScore({...score, oScore})
    }else{
      const {xScore}=score;
      xScore++;
      setScore({...score, xScore})
    }
   }
    setBoard(newBoard);
    setXPlaying(!xPlaying);
  };

  return (
    <div className="App">
     <ScoreBoard score={score} xPlaying={xPlaying}/>
      <Board board={board} onClick={handleBox} />
    </div>
  );
}

export default App;
