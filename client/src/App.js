import React from 'react';
import logo from './logo.svg';
import './App.css';
import Players from "./components/Players"
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Players/>
    </div>
  );
}

export default App;
