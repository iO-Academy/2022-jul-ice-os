import "./TaskBar.css"
import StartButton from './StartButton'
import UtilitiesHolder from "../UtilitiesHolder";
import TaskDock from "./TaskDock/TaskDock";
import {useState} from "react";

interface TaskBarProps {
    setAboutIsOpen: Function
    setAboutIsRunning: Function
    setSurfIsOpen: Function
    setSurfIsRunning: Function
    aboutIsOpen: boolean
    aboutIsRunning: boolean
    surfIsOpen: boolean
    surfIsRunning: boolean
    setMusicIsOpen: Function
    setMusicIsRunning: Function
    musicIsOpen: boolean
    musicIsRunning: boolean
    setGifIsOpen: Function
    setGifIsRunning: Function
    gifIsOpen: boolean
    gifIsRunning: boolean
    startMenuOpen: boolean
    setStartMenuOpen: Function
    maxZIndex: number
    setMaxZIndex: Function
    aboutZIndex: number
    setAboutZIndex: Function
    gifZIndex: number
    setGifZIndex: Function
    surfZIndex: number
    setSurfZIndex: Function
    musicZIndex: number
    setMusicZIndex: Function
}



const TaskBar = (props: TaskBarProps): JSX.Element => {
    return (
        <div className="TaskBar">
            <StartButton setAboutIsOpen={props.setAboutIsOpen}
                         setAboutIsRunning={props.setAboutIsRunning}
                         setSurfIsOpen={props.setSurfIsOpen}
                         setSurfIsRunning={props.setSurfIsRunning}
                         setMusicIsOpen={props.setMusicIsOpen}
                         setMusicIsRunning={props.setMusicIsRunning}
                         setGifIsRunning={props.setGifIsRunning}
                         setGifIsOpen={props.setGifIsOpen}
                         startMenuOpen={props.startMenuOpen}
                         setStartMenuOpen={props.setStartMenuOpen}
                         maxZIndex={props.maxZIndex}
                         setMaxZIndex={props.setMaxZIndex}
                         aboutZIndex={props.aboutZIndex}
                         setAboutZIndex={props.setAboutZIndex}
                         gifZIndex={props.gifZIndex}
                         setGifZIndex={props.setGifZIndex}
                         surfZIndex={props.surfZIndex}
                         setSurfZIndex={props.setSurfZIndex}
                         musicZIndex={props.musicZIndex}
                         setMusicZIndex={props.setMusicZIndex}/>

            <TaskDock setAboutIsOpen={props.setAboutIsOpen}
                      setAboutIsRunning={props.setAboutIsRunning}
                      surfIsOpen={props.surfIsOpen}
                      surfIsRunning={props.surfIsRunning}
                      setSurfIsRunning={props.setSurfIsRunning}
                      setSurfIsOpen={props.setSurfIsOpen}
                      aboutIsOpen={props.aboutIsOpen}
                      aboutIsRunning={props.aboutIsRunning}
                      gifIsOpen={props.gifIsOpen}
                      gifIsRunning={props.gifIsRunning}
                      setGifIsOpen={props.setGifIsOpen}
                      setGifIsRunning={props.setGifIsRunning}
                      setMusicIsOpen={props.setMusicIsOpen}
                      setMusicIsRunning={props.setMusicIsRunning}
                      musicIsOpen={props.musicIsOpen}
                      musicIsRunning={props.musicIsRunning}
                      maxZIndex={props.maxZIndex}
                      setMaxZIndex={props.setMaxZIndex}
                      aboutZIndex={props.aboutZIndex}
                      setAboutZIndex={props.setAboutZIndex}
                      gifZIndex={props.gifZIndex}
                      setGifZIndex={props.setGifZIndex}
                      surfZIndex={props.surfZIndex}
                      setSurfZIndex={props.setSurfZIndex}
                      musicZIndex={props.musicZIndex}
                      setMusicZIndex={props.setMusicZIndex}/>
            <UtilitiesHolder/>
        </div>
    )
}

export default TaskBar