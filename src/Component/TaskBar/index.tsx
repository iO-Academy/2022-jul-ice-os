import "./TaskBar.css"
import StartButton from './StartButton'
import UtilitiesHolder from "../UtilitiesHolder";
import TaskDock from "./TaskDock/TaskDock";

interface TaskBarProps {
    setAboutIsOpen: Function
    setAboutIsRunning: Function
    aboutIsOpen: boolean
    aboutIsRunning: boolean
    startMenuOpen: boolean
    setStartMenuOpen: Function
}

const TaskBar = (props: TaskBarProps):JSX.Element  => {
    return (
        <div className="TaskBar">
            <StartButton setAboutIsOpen={props.setAboutIsOpen}
                         setAboutIsRunning={props.setAboutIsRunning}
                         startMenuOpen={props.startMenuOpen}
                         setStartMenuOpen={props.setStartMenuOpen}/>
            <TaskDock setAboutIsOpen={props.setAboutIsOpen}
                      setAboutIsRunning={props.setAboutIsRunning}
                      aboutIsOpen={props.aboutIsOpen}
                      aboutIsRunning={props.aboutIsRunning}/>
            <UtilitiesHolder />
        </div>
    )
}

export default TaskBar