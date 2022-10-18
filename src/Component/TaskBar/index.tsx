import "./TaskBar.css"
import StartButton from './StartButton'
import UtilitiesHolder from "../UtilitiesHolder";



const TaskBar = ():JSX.Element  => {
    return (
        <div className="TaskBar">
            <StartButton />
            <UtilitiesHolder />
        </div>
    )
}

export default TaskBar