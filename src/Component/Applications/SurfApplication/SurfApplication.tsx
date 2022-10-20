import Draggable from 'react-draggable'
import './SurfApplication.css'
import SurfIcon from './Images/surfingPenguin.png';
import {useState} from "react";
import SurfApplicationContent from "./SurfApplicationContent/SurfApplicationContent";
import SurfHeader from "./SubComponents/Header/SurfHeader";

interface SurfApplicationProps {
    setSurfIsOpen: Function
    setSurfIsRunning: Function
}

const SurfApplication = (props :SurfApplicationProps) => {
    const [aboutMaximize, setAboutMaximize] = useState(false);

    return (
        <Draggable
            handle=".handle"
            defaultPosition={{x: 50, y: 50}}
            grid={[25, 25]}
            scale={1}
            bounds={'.desktop'}>
            <div className={"Surfdraggable"}>
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