import './TaskDock.css'

interface TaskDockProps {
    setAboutIsOpen: Function
    setAboutIsRunning: Function
    aboutIsOpen: boolean
    aboutIsRunning: boolean
}


const TaskDock = (props :TaskDockProps) => {

    const handleCloseAbout = () => {
        props.setAboutIsOpen(false)
        props.setAboutIsRunning(false)
    }

    const handleOpenAbout = () => {
        props.setAboutIsOpen(true);
    }

    return (
        <div className={"taskDock"}>
            {props.aboutIsRunning ?
                <div className={"taskDockApplication"}>
                    <img onClick={handleOpenAbout} className={"applicationIcon"} src={"../../../assets/Desktop/Images/AboutImage.png"} alt={"About Icon"} />
                    <p className={"applicationText"}>About</p>
                    <button onClick={handleCloseAbout} className={"closeButtonTaskDock"}>X</button>
                </div>
                : "" }
        </div>
    )
}

export default TaskDock