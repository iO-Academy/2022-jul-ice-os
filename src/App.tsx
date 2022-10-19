import React from 'react';
import './App.css';
import Desktop from "./Component/Desktop";
import TaskBar from "./Component/TaskBar";
import {useState} from "react";

function App() {

    const [aboutIsOpen, setAboutIsOpen] = useState(false);
    const [aboutIsRunning, setAboutIsRunning] = useState(false);
    const [startMenuOpen, setStartMenuOpen] = useState(true);
    const [gifIsOpen, setGifIsOpen] = useState(true)
    const [gifIsRunning, setGifIsRunning] = useState(false)

  return (
    <div className="App" id="App">
        <Desktop aboutIsOpen={aboutIsOpen}
                 setAboutIsRunning={setAboutIsRunning}
                 setAboutIsOpen={setAboutIsOpen}
                 setGifIsOpen={setGifIsOpen}
                 setGifIsRunning={setGifIsRunning}
                 gifIsOpen={gifIsOpen}
                 setStartMenuOpen={setStartMenuOpen}/>
        <TaskBar setAboutIsOpen={setAboutIsOpen}
                 setAboutIsRunning={setAboutIsRunning}
                 aboutIsOpen={aboutIsOpen}
                 aboutIsRunning={aboutIsRunning}
                 setGifIsRunning={setGifIsRunning}
                 setGifIsOpen={setGifIsOpen}
                 gifIsOpen={gifIsOpen}
                 gifIsRunning={gifIsRunning}
                 startMenuOpen={startMenuOpen}
                 setStartMenuOpen={setStartMenuOpen}/>
    </div>
  );
}

export default App;
