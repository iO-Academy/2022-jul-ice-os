import React from 'react';
import './App.css';
import Desktop from "./Component/Desktop";
import TaskBar from "./Component/TaskBar";
import {useState} from "react";

function App() {

    const [aboutIsOpen, setAboutIsOpen] = useState(false);
    const [aboutIsRunning, setAboutIsRunning] = useState(false);

  return (
    <div className="App" id="App">
        <Desktop aboutIsOpen={aboutIsOpen}
                 setAboutIsRunning={setAboutIsRunning}
                 setAboutIsOpen={setAboutIsOpen}/>
        <TaskBar setAboutIsOpen={setAboutIsOpen}
                 setAboutIsRunning={setAboutIsRunning}/>
    </div>
  );
}

export default App;
