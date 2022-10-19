import React from 'react';
import './App.css';
import Desktop from "./Component/Desktop";
import TaskBar from "./Component/TaskBar";
import {useState} from "react";

function App() {

    const [aboutIsOpen, setAboutIsOpen] = useState(false);
    const [aboutIsRunning, setAboutIsRunning] = useState(false);
    const [musicIsOpen, setMusicIsOpen] = useState(false);
    const [musicIsRunning, setMusicIsRunning] = useState(false);
    const [startMenuOpen, setStartMenuOpen] = useState(true);
    const [gifIsOpen, setGifIsOpen] = useState(false)
    const [gifIsRunning, setGifIsRunning] = useState(false)

  return (
    <div className="App" id="App">
        <Desktop aboutIsOpen={aboutIsOpen}
                 setAboutIsRunning={setAboutIsRunning}
                 setAboutIsOpen={setAboutIsOpen}

                 musicIsOpen={musicIsOpen}
                 setMusicIsRunning={setMusicIsRunning}
                 setMusicIsOpen={setMusicIsOpen}

                 setGifIsOpen={setGifIsOpen}
                 setGifIsRunning={setGifIsRunning}
                 gifIsOpen={gifIsOpen}
                 setStartMenuOpen={setStartMenuOpen}/>
      
        <TaskBar setAboutIsOpen={setAboutIsOpen}
                 setAboutIsRunning={setAboutIsRunning}
                 aboutIsOpen={aboutIsOpen}
                 aboutIsRunning={aboutIsRunning}

                 setMusicIsOpen={setMusicIsOpen} 
                 setMusicIsRunning={setMusicIsRunning}
                 musicIsOpen={musicIsOpen}
                 musicIsRunning={musicIsRunning}

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
