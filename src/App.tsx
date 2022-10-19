import React from 'react';
import './App.css';
import Desktop from "./Component/Desktop";
import TaskBar from "./Component/TaskBar";
import {useState} from "react";

function App() {

    const [aboutIsOpen, setAboutIsOpen] = useState(false);
    const [aboutIsRunning, setAboutIsRunning] = useState(false);
    const [musicIsOpen, setMusicIsOpen] = useState(true);
    const [musicIsRunning, setMusicIsRunning] = useState(false);
    const [startMenuOpen, setStartMenuOpen] = useState(true);

  return (
    <div className="App" id="App">
        <Desktop aboutIsOpen={aboutIsOpen}
                 setAboutIsRunning={setAboutIsRunning}
                 setAboutIsOpen={setAboutIsOpen}
                 musicIsOpen={musicIsOpen}
                 setMusicIsRunning={setMusicIsRunning}
                 setMusicIsOpen={setMusicIsOpen}
                 setStartMenuOpen={setStartMenuOpen}/>
        <TaskBar setAboutIsOpen={setAboutIsOpen}
                 setAboutIsRunning={setAboutIsRunning}
                 aboutIsOpen={aboutIsOpen}
                 aboutIsRunning={aboutIsRunning}
                 setMusicIsOpen={setMusicIsOpen} // TODO fix this
                 setMusicIsRunning={setMusicIsRunning}
                 musicIsOpen={musicIsOpen}
                 musicIsRunning={musicIsRunning}
                 startMenuOpen={startMenuOpen}
                 setStartMenuOpen={setStartMenuOpen}/>
    </div>
  );
}

export default App;
