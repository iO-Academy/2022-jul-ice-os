import "./TaskBar.css"
import StartButton from './StartButton'
import UtilitiesHolder from "../UtilitiesHolder";
import TaskDock from "./TaskDock/TaskDock";

interface TaskBarProps {
    setAboutIsOpen: Function
    setAboutIsRunning: Function
    aboutIsOpen: boolean
    aboutIsRunning: boolean
    setMusicIsOpen: Function
    setMusicIsRunning: Function
    musicIsOpen: boolean
    musicIsRunning: boolean
    startMenuOpen: boolean
    setStartMenuOpen: Function
}

const TaskBar = (props: TaskBarProps): JSX.Element => {
    return (
        <div className="TaskBar">
            <StartButton setAboutIsOpen={props.setAboutIsOpen}
                         setAboutIsRunning={props.setAboutIsRunning}
                         setMusicIsOpen={props.setMusicIsOpen}
                         setMusicIsRunning={props.setMusicIsRunning}
                         startMenuOpen={props.startMenuOpen}
                         setStartMenuOpen={props.setStartMenuOpen}/>
            <TaskDock setAboutIsOpen={props.setAboutIsOpen}
                      setAboutIsRunning={props.setAboutIsRunning}
                      aboutIsOpen={props.aboutIsOpen}
                      aboutIsRunning={props.aboutIsRunning}
                      setMusicIsOpen={props.setMusicIsOpen}
                      setMusicIsRunning={props.setMusicIsRunning}
                      musicIsOpen={props.musicIsOpen}
                      musicIsRunning={props.musicIsRunning}/>
            <UtilitiesHolder/>
        </div>
    )
}

export default TaskBar