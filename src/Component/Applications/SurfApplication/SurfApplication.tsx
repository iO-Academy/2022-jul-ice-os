import Draggable from 'react-draggable'
import './SurfApplication.css'
import SurfIcon from './Images/surfingPenguin.png';
import {useState} from "react";
import SurfApplicationContent from "./SurfApplicationContent/SurfApplicationContent";
import SurfHeader from "./SubComponents/Header/SurfHeader";

interface SurfApplicationProps {
    setSurfIsOpen: Function
    setSurfIsRunning: Function
    surfIsOpen: boolean
}

const SurfApplication = (props :SurfApplicationProps) => {
    const [aboutMaximize, setAboutMaximize] = useState(false);

    return (
        <Draggable
            defaultClassName={props.surfIsOpen ? "Surfdraggable" : "Surfdraggable hiden"}
            handle=".handle"
            defaultPosition={{x: 0, y: 0}}
            scale={1}
            bounds={'.desktop'}>
            <div>
                <SurfHeader ApplicationName={"Surfwave Fury"}
                        ApplicationIcon={SurfIcon}
                        setSurfIsOpen={props.setSurfIsOpen}
                        setSurfIsRunning={props.setSurfIsRunning}
                        setAboutMaximize={setAboutMaximize}
                        aboutMaximize={aboutMaximize}/>
                <SurfApplicationContent />
            </div>
        </Draggable>
    )
}

export default SurfApplication