import React from "react";
import "./game.style.css";
import { useState } from "react";

const Game = () => {
  const [selected, setSelected] = useState("");
  const [answer, setAnswer] = useState("");
  const [botChoice, setBotChoice] = useState("");
  const [score, setScore] = useState(0);

  const options = ["Rock", "Paper", "Scissors"];

  const handleClick = (playerChoice) => {
    setSelected(playerChoice);
    let bot = options[Math.floor(Math.random() * options.length)];
    setBotChoice(bot);
    winOrLose(playerChoice, bot);
  };

  const winOrLose = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
      setAnswer("It's a tie!");
      return;
    }

    const winningCombinations = {
      Rock: "Scissors",
      Scissors: "Paper",
      Paper: "Rock",
    };

    if (winningCombinations[playerChoice] === computerChoice) {
      setAnswer("You won!");
      setScore(score + 1);
    } else {
      setAnswer("You lost!");
    }
  };

  return (
    <>
      <div className="count">Wins: {score}</div>
      <div className="players">
        <div>Player 1: {selected}</div>
        <div>{answer}</div>
        <div>
          Player 2:
          {botChoice}
        </div>
      </div>
      <div className="cards-wrapper">
        <div className="wrapper">
          {options.map((elem, index) => (
            <div
              className="card"
              key={index}
              onClick={() => {
                handleClick(elem);
              }}
            >
              {elem}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Game;
