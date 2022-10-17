import "./TaskBar.css"
import StartButton from './StartButton'
import UtilitiesHolder from "../UtilitiesHolder";



const TaskBar = () => {
    return (
        <div className="TaskBar">
            <StartButton />
            <UtilitiesHolder />
        </div>
    )
}

export default TaskBar