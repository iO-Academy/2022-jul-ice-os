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
            <p className="startButtonText">start</p>
        </button>
            </div>
            <div className="menuDisplay" id="menu">
                <div className={"menuSpacer"}>
                    <img className={"menuImage"} src={"../../../assets/Desktop/Images/menuImage.png"} alt="Iceberg start menu logo" />
                    <p className={"userInMenu"}>Nico</p>
                </div>
                <ul>It</ul>
                <ul>is</ul>
                <ul>so</ul>
                <ul>beautiful</ul>
                <div className={"menuSpacer2"}>There is no log out, you are here forever</div>
            </div>
        </div>
    )
}

export default StartButton
