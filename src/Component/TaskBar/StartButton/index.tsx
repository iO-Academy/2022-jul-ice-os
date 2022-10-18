import './StartButton.css';
import React, {useState} from "react";


const StartButton = (): JSX.Element => {
    const [toggle, setToggle] = React.useState(false)
    const [hidden, setHidden] = React.useState(null) // :(

    const showMenu = () => {
        setToggle(!toggle);
        if (toggle === true) {
            // @ts-ignore
            document.getElementById( "menu").style.display="none";
        } else {
           // @ts-ignore
            document.getElementById("menu").style.display="block";
        }
    }

    // @ts-ignore
    // @ts-ignore
    return (
        <div className={"startMenu"}>
        <button onClick={showMenu} className="startButton">
            <img className="startButtonImage" src={"../../../assets/Desktop/Images/icebergStartMenuIcon.png"} alt="Iceberg start menu logo" />
            <p className="startButtonText">Start</p>
        </button>
            <div id="menu" > // :(
                <li>text</li>
                <li>text</li>
                <li>text</li>
                <li>text</li>
            </div>
        </div>
    )
}

export default StartButton