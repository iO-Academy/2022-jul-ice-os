import "./TaskBar.css"
import StartButton from './StartButton'
import UtilitiesHolder from "../UtilitiesHolder";
import TaskDock from "./TaskDock/TaskDock";

interface TaskBarProps {
    setAboutIsOpen: Function
    setAboutIsRunning: Function
    setSurfIsOpen: Function
    setSurfIsRunning: Function
    aboutIsOpen: boolean
    aboutIsRunning: boolean
    surfIsOpen: boolean
    surfIsRunning: boolean
    startMenuOpen: boolean
    setStartMenuOpen: Function
}

const TaskBar = (props: TaskBarProps):JSX.Element  => {
    return (
        <div className="TaskBar">
            <StartButton setAboutIsOpen={props.setAboutIsOpen}
                         setAboutIsRunning={props.setAboutIsRunning}
                         setSurfIsOpen={props.setSurfIsOpen}
                         setSurfIsRunning={props.setSurfIsRunning}
                         startMenuOpen={props.startMenuOpen}
                         setStartMenuOpen={props.setStartMenuOpen}/>
            <TaskDock setAboutIsOpen={props.setAboutIsOpen}
                      setAboutIsRunning={props.setAboutIsRunning}
                      surfIsOpen={props.surfIsOpen}
                      surfIsRunning={props.surfIsRunning}
                      setSurfIsRunning={props.setSurfIsRunning}
                      setSurfIsOpen={props.setSurfIsOpen}
                      aboutIsOpen={props.aboutIsOpen}
                      aboutIsRunning={props.aboutIsRunning}/>
            <UtilitiesHolder />
        </div>
    )
}

export default TaskBar