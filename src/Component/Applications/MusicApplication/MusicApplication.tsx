import Draggable from 'react-draggable'
import './MusicApplication.css'
import Header from "./SubComponents/Header/Header";
import musicPenguin from './Images/musicPenguin.png'
import {useState} from "react";
import MusicApplicationContent from "./MusicApplicationContent/MusicApplicationContent";

interface MusicApplicationProps {
    setMusicIsOpen: Function
    setMusicIsRunning: Function
}

const MusicApplication = (props :MusicApplicationProps) => {
    const [aboutMaximize, setAboutMaximize] = useState(false);

    return (

        <Draggable
            handle=".handle"
            defaultPosition={{x: 50, y: 50}}
            grid={[25, 25]}
            scale={1}
            bounds={'.desktop'}>
            <div className={props.setMusicIsOpen ? "musicDraggable" : "musicDraggable hiden"}>
                <Header ApplicationName={"Music"}
                        ApplicationIcon={musicPenguin}
                        setAboutIsOpen={props.setMusicIsOpen}
                        setAboutIsRunning={props.setMusicIsRunning}
                        setAboutMaximize={setAboutMaximize}
                        aboutMaximize={aboutMaximize}/>
                <MusicApplicationContent />
            </div>
        </Draggable>
    )
}

export default MusicApplication