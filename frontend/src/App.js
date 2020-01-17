import React from "react";
import "./App.css";
import User from "./components/User"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Wallet</h1>
        <User />
      </header>
    </div>
  );
}

export default App