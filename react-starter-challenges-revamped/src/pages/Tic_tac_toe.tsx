import React from "react";
import { Alert, Card, Typography } from "@mui/material";
import { useState } from "react";

const TURNS = {
  X: "x",
  O: "o",
};
interface SquareProps {
  children: React.ReactNode;
  updateBoard?: (index: number) => void;
  index?: number;
  isSelected: boolean;
}

const Square = ({ children, isSelected, updateBoard, index }: SquareProps) => {
  const className = `square ${isSelected ? "is-selected" : ""}`;
  return (
    <div
      className={className}
      onClick={() => updateBoard && index !== undefined && updateBoard(index)}
    >
      {children}
    </div>
  );
};
//Formas de ganar
const WinnnerCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export function Tic_tac_toe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null);
  const [selectedIndex] = useState<number | null>(null);

  //Checar si hay ganador en el tablero
  const checkWinner = (boardToCheck: any[]) => {
    for (const combo of WinnnerCombos) {
      const [a, b, c] = combo;
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a];
      }
    }
    return null;
  };

  const updateBoard = (index: number): void => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    if (!newBoard[index]) {
      newBoard[index] = turn;
      setBoard(newBoard);
      // Cambiar de turno
      const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
      setTurn(newTurn);
      // Checar si hay ganador
      const newWinner = checkWinner(newBoard);
      if (newWinner) {
        setWinner(newWinner);
      }
    }
  };

  return (
    <Card sx={{ backgroundColor: "#444950" }}>
      <main className="board">
        <Typography variant="h3" sx={{ color: "#eee", marginBottom: "15px" }}>
          Tic-tac-toe
        </Typography>

        <section className="game">
          {board.map((_, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
                isSelected={selectedIndex === index}
              >
                {board[index]}
              </Square>
            );
          })}
        </section>

        {/*Señala el turno que sigue */}
        <section className="rectangle">
          <h1 className={turn === TURNS.X ? "is-selected" : "not-selected"}>
            {TURNS.X}
          </h1>
          <h1 className={turn === TURNS.O ? "is-selected" : "not-selected"}>
            {TURNS.O}
          </h1>
        </section>

        {/*alert para mencionar al ganador */}
        {winner !== null && (
          <Alert severity={winner === false ? "info" : "success"}>
            {winner === false
              ? "El juego terminó en empate."
              : `¡Ganó ${winner}!`}
          </Alert>
        )}
      </main>
    </Card>
  );
}
