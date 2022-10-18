import './TaskDock.css'

interface TaskDockProps {
    setAboutIsOpen: Function
    setAboutIsRunning: Function
    aboutIsOpen: boolean
    aboutIsRunning: boolean
}


const TaskDock = (props :TaskDockProps) => {
    return (
        <div className={"taskDock"}>
            {props.aboutIsRunning ? <div>Hello World</div> : "" }
        </div>
    )
}

export default TaskDock