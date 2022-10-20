import './Desktop.css'
import AboutApplication from "../Applications/AboutApplication/AboutApplication";
import MusicApplication from "../Applications/MusicApplication/MusicApplication";
import GifApplication from "../Applications/GifApplication/GifApplication";
import {useState} from "react";


interface DesktopProps  {
    aboutIsOpen: boolean
    setAboutIsOpen: Function
    setAboutIsRunning: Function
    musicIsOpen: boolean
    setMusicIsOpen: Function
    setMusicIsRunning: Function
    setStartMenuOpen: Function
    setGifIsOpen: Function
    setGifIsRunning: Function
    gifIsOpen: boolean
}
const Desktop = (props :DesktopProps): JSX.Element => {
    const[maxZIndex, setMaxZIndex] = useState(1);

    const closeStartMenu = () => {
        props.setStartMenuOpen(true)
    }

    return (
        <main onClick={closeStartMenu} className="desktop">
            <AboutApplication
                setAboutIsOpen={props.setAboutIsOpen}
                setAboutIsRunning={props.setAboutIsRunning}
                aboutIsOpen={props.aboutIsOpen}
                maxZIndex={maxZIndex}
                setMaxZIndex={setMaxZIndex}/>
            <GifApplication
                setGifIsRunning={props.setGifIsRunning}
                setGifIsOpen={props.setGifIsOpen}
                gifIsOpen={props.gifIsOpen}
                maxZIndex={maxZIndex}
                setMaxZIndex={setMaxZIndex} />
            <MusicApplication
                setMusicIsOpen={props.setMusicIsOpen}
                setMusicIsRunning={props.setMusicIsRunning}
                musicIsOpen={props.musicIsOpen} />
        </main>
    )
}

export default Desktop
