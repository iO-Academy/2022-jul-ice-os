import './StartButton.css';
import React, {useState} from "react";


const StartButton = (): JSX.Element => {
    const [toggle, setToggle] = React.useState(false)
    const [width, setWidth] = React.useState(null)

    const showMenu = () => {
        setToggle(!toggle);
        if (toggle === true) {
            // @ts-ignore
           document.getElementById( "menu").style.display="none";
        } else {
           // @ts-ignore
            setWidth("block");document.getElementById("menu").style.display="block";
        }
    }


    return (
        <div className="startMenu">
            <div>
        <button onClick={showMenu} className="startButton">
            <img className="startButtonImage" src={"../../../assets/Desktop/Images/icebergStartMenuIcon.png"} alt="Iceberg start menu logo" />
            <p className="startButtonText">Start</p>
        </button>
            </div>
            <div className="menuDisplay" id="menu">
                <ul>text</ul>
                <ul>text</ul>
                <ul>text</ul>
                <ul>text</ul>
            </div>
        </div>
    )
}

export default StartButton