import "./TaskBar.css"
import StartButton from './StartButton'
import UtilitiesHolder from "../UtilitiesHolder";

interface TaskBarProps {
    setAboutIsOpen: Function
    setAboutIsRunning: Function
}

const TaskBar = (props: TaskBarProps):JSX.Element  => {
    return (
        <div className="TaskBar">
            <StartButton setAboutIsOpen={props.setAboutIsOpen} setAboutIsRunning={props.setAboutIsRunning} />
            <UtilitiesHolder />
        </div>
    )
}

export default TaskBar