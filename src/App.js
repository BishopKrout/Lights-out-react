import React from "react";
import Board from "./Board";
import "./App.css";

/** Simple app that just shows the LightsOut game. */

<h1>Lights Out</h1>

function App() {
  return (
      <div className="App">
        <h1>Lights Out</h1>
        <p>Try to clear the board by getting rid of all of the colored cells.</p>
        <p>Tap one to begin.</p>
        <Board />
      </div>
  );
}

export default App;
