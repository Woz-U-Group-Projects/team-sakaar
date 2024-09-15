import React from "react";
import Project from "./components/Project";
import "./App.css";
import Genres from './components/Genres';

function App() {
  return (
    <div className="App">
      <Project />
      <Genres uri="http://localhost:3001/staticGenres" />
    </div>
  );
}

export default App;
