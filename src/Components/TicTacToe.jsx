import React, { useState } from "react";

const TicTacToe = () => {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player_turn, setPlayerTurn] = useState("X");

  const clickHandler = (idx) => {
    setPlayerTurn(player_turn === "X" ? "O" : "X");
    board[idx] = player_turn;
    setBoard(board);

    const winner_comb = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i <= winner_comb.length; i++) {
      let winning_row = winner_comb[0];
      let p1 = winning_row[0];
      let p2 = winning_row[1];
      let p3 = winning_row[2];
      if (
        board[p1] == board[p2] &&
        board[p2] == board[p3] &&
        board[p3] == board[p1]
      ) {
        alert(`${player_turn} is winner`);
      }
    }
  };

  console.log(board);
  return (
    <div style={{ width: "40rem", height: "30rem" }}>
      <h1>TIC TAC TOE</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          backgroundColor: "antiquewhite",
          margin: "0.5rem",
          justifyContent: "center",
        }}
      >
        {board.map((item, idx) => {
          return (
            <div
              className="square"
              style={{
                height: "10rem",
                width: "10rem",
                border: "1px solid black",
                fontSize: "8rem",
              }}
              onClick={() => clickHandler(idx)}
              key={idx}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TicTacToe;
