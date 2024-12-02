import React from "react";
import { Routes, Route } from "react-router-dom";
import Game from "./Components/Game";
import StartPage from "./Components/StartPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/game" element={<Game />} />
    </Routes>
  );
};

export default App;
