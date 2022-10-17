import React from 'react';
import './App.css';
import Desktop from "./Component/Desktop";
import TaskBar from "./Component/TaskBar";

function App() {

  return (
    <div className="App" id="App">
        <Desktop/>
        <TaskBar/>
    </div>
  );
}

export default App;
