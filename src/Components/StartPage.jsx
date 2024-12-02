import React from "react";
import { Link } from "react-router-dom";
import "./startPage.style.css";

const StartPage = () => {
  return (
    <div className="container">
      <h1>Rock-paper-scissors Game!</h1>
      <button>
        <Link to="/game">Start Game</Link>
      </button>
    </div>
  );
};

export default StartPage;
