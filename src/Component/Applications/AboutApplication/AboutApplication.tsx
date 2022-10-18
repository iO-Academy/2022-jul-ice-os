import Draggable from 'react-draggable'
import './AboutApplication.css'
import Header from "./SubComponents/Header/Header";
import AboutIcon from './Images/aboutIconPenguin.png';
import {useState} from "react";

interface AboutApplicationProps {
    setAboutIsOpen: Function
    setAboutIsRunning: Function
}

const AboutApplication = (props :AboutApplicationProps) => {
    const [aboutMaximize, setAboutMaximize] = useState(false);

    return (

        <Draggable
            handle=".handle"
            defaultPosition={{x: 50, y: 50}}
            grid={[25, 25]}
            scale={1}>
            <div className={"draggable"}>
              <Header ApplicationName={"About"}
                      ApplicationIcon={AboutIcon}
                      setAboutIsOpen={props.setAboutIsOpen}
                      setAboutIsRunning={props.setAboutIsRunning}
                      setAboutMaximize={setAboutMaximize}
                      aboutMaximize={aboutMaximize}/>
            </div>
        </Draggable>
    )
}

export default AboutApplication