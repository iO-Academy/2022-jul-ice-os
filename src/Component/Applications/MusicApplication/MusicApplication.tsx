import Draggable from 'react-draggable'
import './MusicApplication.css'
import MusicHeader from "./SubComponents/MusicHeader/MusicHeader";
import musicPenguin from './Images/musicPenguin.png'
import {useState} from "react";
import MusicApplicationContent from "./MusicApplicationContent/MusicApplicationContent";

interface MusicApplicationProps {
    setMusicIsOpen: Function
    setMusicIsRunning: Function
    musicIsOpen: boolean
    maxZIndex: number
    setMaxZIndex: Function
    musicZIndex: number
    setMusicZIndex: Function
}

const MusicApplication = (props :MusicApplicationProps) => {
    const [aboutMaximize, setAboutMaximize] = useState(false);

    const handleClick = () => {
        props.setMusicZIndex(props.maxZIndex + 1)
        props.setMaxZIndex(props.maxZIndex + 1)
    }

    return (

        <Draggable
            defaultClassName={props.musicIsOpen ? "musicDraggable" : "musicDraggable hidden"}
            handle=".musicHandle"
            defaultPosition={{x: 0, y: 0}}
            scale={1}
            bounds={'.desktop'}>
            <div onClick={handleClick} style={{zIndex: props.musicZIndex}}>
                <MusicHeader ApplicationName={"Music"}
                             ApplicationIcon={musicPenguin}
                             setMusicIsOpen={props.setMusicIsOpen}
                             setMusicIsRunning={props.setMusicIsRunning}
                             setAboutMaximize={setAboutMaximize}
                             aboutMaximize={aboutMaximize}/>
                <MusicApplicationContent />
            </div>
        </Draggable>
    )
}

export default MusicApplication