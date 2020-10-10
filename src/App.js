import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TicTacToe from "./Components/TicTacToe";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="game">
        <TicTacToe />
      </div>
    </div>
  );
}

export default App;
