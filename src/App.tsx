import React from 'react';
import logo from './logo.svg';
import './App.css';
import Desktop from "./Desktop";
import TaskBar from "./Component/TaskBar";

function App() {
  return (
    <div className="App">
        <Desktop/>
      <TaskBar/>
    </div>
  );
}

export default App;
