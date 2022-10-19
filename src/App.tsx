import React from 'react';
import './App.css';
import Desktop from "./Component/Desktop";
import TaskBar from "./Component/TaskBar";
import {useState} from "react";

function App() {

    const [aboutIsOpen, setAboutIsOpen] = useState(false);
    const [aboutIsRunning, setAboutIsRunning] = useState(false);
    const [surfIsOpen, setSurfIsOpen] = useState(false);
    const [surfIsRunning, setSurfIsRunning] = useState(false);
    const [startMenuOpen, setStartMenuOpen] = useState(true);

  return (
    <div className="App" id="App">
        <Desktop aboutIsOpen={aboutIsOpen}
                 setAboutIsRunning={setAboutIsRunning}
                 setAboutIsOpen={setAboutIsOpen}
                 surfIsOpen={surfIsOpen}
                 setSurfIsRunning={setSurfIsRunning}
                 setSurfIsOpen={setSurfIsOpen}
                 setStartMenuOpen={setStartMenuOpen}/>
        <TaskBar setAboutIsOpen={setAboutIsOpen}
                 setAboutIsRunning={setAboutIsRunning}
                 setSurfIsOpen={setSurfIsOpen}
                 setSurfIsRunning={setSurfIsRunning}
                 aboutIsOpen={aboutIsOpen}
                 aboutIsRunning={aboutIsRunning}
                 surfIsOpen={surfIsOpen}
                 surfIsRunning={surfIsRunning}
                 startMenuOpen={startMenuOpen}
                 setStartMenuOpen={setStartMenuOpen}/>
    </div>
  );
}

export default App;
