import "./TaskBar.css"
import StartButton from './StartButton'
import UtilitiesHolder from "../UtilitiesHolder";
import TaskDock from "./TaskDock/TaskDock";

interface TaskBarProps {
    setAboutIsOpen: Function
    setAboutIsRunning: Function
    aboutIsOpen: boolean
    aboutIsRunning: boolean
    setGifIsOpen: Function
    setGifIsRunning: Function
    gifIsOpen: boolean
    gifIsRunning: boolean
    startMenuOpen: boolean
    setStartMenuOpen: Function
}

const TaskBar = (props: TaskBarProps):JSX.Element  => {
    return (
        <div className="TaskBar">
            <StartButton setAboutIsOpen={props.setAboutIsOpen}
                         setAboutIsRunning={props.setAboutIsRunning}
                         setGifIsRunning={props.setGifIsRunning}
                         setGifIsOpen={props.setGifIsOpen}
                         startMenuOpen={props.startMenuOpen}
                         setStartMenuOpen={props.setStartMenuOpen}/>
            <TaskDock setAboutIsOpen={props.setAboutIsOpen}
                      setAboutIsRunning={props.setAboutIsRunning}
                      aboutIsOpen={props.aboutIsOpen}
                      aboutIsRunning={props.aboutIsRunning}
                      setGifIsRunning={props.setGifIsRunning}
                      setGifIsOpen={props.setGifIsOpen}
                      gifIsOpen={props.gifIsOpen}
                      gifIsRunning={props.gifIsRunning}/>
            <UtilitiesHolder />
        </div>
    )
}

export default TaskBar