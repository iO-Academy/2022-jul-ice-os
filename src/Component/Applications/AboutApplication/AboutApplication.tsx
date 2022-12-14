import Draggable from 'react-draggable'
import './AboutApplication.css'
import Header from "./SubComponents/Header/Header";
import AboutIcon from './Images/aboutIconPenguin.png';
import {useState} from "react";
import AboutApplicationContent from "./AboutApplicationContent/AboutApplicationContent";

interface AboutApplicationProps {
    setAboutIsOpen: Function
    setAboutIsRunning: Function
    aboutIsOpen: boolean
    maxZIndex: number
    setMaxZIndex: Function
    aboutZIndex: number
    setAboutZIndex: Function
}

const AboutApplication = (props :AboutApplicationProps) => {
    const [aboutMaximize, setAboutMaximize] = useState(false);

    const handleClick = () => {
        props.setAboutZIndex(props.maxZIndex + 1)
        props.setMaxZIndex(props.maxZIndex + 1)
    }

    return (
        <Draggable
            defaultClassName={props.aboutIsOpen ? "draggable" : "draggable hidden"}
            handle=".handle"
            defaultPosition={{x: 0, y: 0}}
            scale={1}
            bounds={'.desktop'}>
            <div className={"draggable"} onClick={handleClick} style={{zIndex: props.aboutZIndex}}>
              <Header ApplicationName={"About"}
                      ApplicationIcon={AboutIcon}
                      setAboutIsOpen={props.setAboutIsOpen}
                      setAboutIsRunning={props.setAboutIsRunning}
                      setAboutMaximize={setAboutMaximize}
                      aboutMaximize={aboutMaximize}/>
                <AboutApplicationContent />
            </div>
        </Draggable>
    )
}

export default AboutApplication