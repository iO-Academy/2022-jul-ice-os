import React from 'react';
import './App.css';
import Desktop from "./Component/Desktop";
import TaskBar from "./Component/TaskBar";
import screenfull from "screenfull";

function App() {
    const app = document.getElementById('App');
    const fullscreenButton = document.getElementById('fullscreenButton');

    fullscreenButton!.addEventListener('click', () => {
        if(screenfull.isEnabled) {
            screenfull.toggle(app!);
        }
    })

  return (
    <div className="App" id="App">
        <Desktop/>
      <TaskBar/>
    </div>
  );
}

export default App;
