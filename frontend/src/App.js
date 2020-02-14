import React from "react";
import "./App.css";
import User from "./components/User"
import UserBalance from "./components/UserBalance"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Wallet</h1> 
        <UserBalance />
        <User />
       
      </header>
    </div>
  );
}

export default App