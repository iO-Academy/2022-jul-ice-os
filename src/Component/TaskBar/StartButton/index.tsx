import './StartButton.css';
import React, {useState} from "react";

interface StartButtonProps {
    setAboutIsOpen: Function
    setAboutIsRunning: Function
}

const StartButton = (props :StartButtonProps): JSX.Element => {

    const [toggle, setToggle] = React.useState(false)
    const [width, setWidth] = React.useState(null)

    const showMenu = () => {
        setToggle(!toggle);
        if (toggle) {
            // @ts-ignore
           document.getElementById( "menu").style.display="none";
        } else {
           // @ts-ignore
            setWidth("block");document.getElementById("menu").style.display="block";
        }
    }

    const openAboutApplication = () => {
        props.setAboutIsOpen(true);
        props.setAboutIsRunning(true)
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
                    <img className={"menuImage"} src={"../../../assets/Desktop/Images/menuImage.png"} alt="Penguin in a igloo" />
                    <p className={"userInMenu"}>Nico</p>
                </div>
                <div >

                <ul className={"menuList"} onClick={openAboutApplication}>
                    <img className={"menuListImage"} src={"../../../assets/Desktop/Images/AboutImage.png"} alt="Penguin reading a book"/>
                    <p className={"menuListText"}>About</p>
                </ul>
                <ul className={"menuList"}>
                    <img className={"menuListImage"} src={"../../../assets/Desktop/Images/surfWaveFury.png"} alt="Surfing penguin, from the amazing game SurfWave Fury"/>
                    <p className={"menuListText"}>SurfWave Fury</p>
                </ul>
                <ul className={"menuList"}>
                    <img className={"menuListImage"} src={"../../../assets/Desktop/Images/musicPenguin.png"} alt="Penguin listening to music"/>
                    <p className={"menuListText"}>Music</p>
                </ul>
                <ul className={"menuList"}>
                    <img className={"menuListImage"} src={"../../../assets/Desktop/Images/gifWatchingPenguin.png"} alt="Gif watching penguin"/>
                    <p className={"menuListText"}>Gifs</p>
                </ul>
                </div>
                <div className={"menuSpacer2"}>There is no log out, you are here forever</div>
            </div>
        </div>
    )
}

export default StartButton
