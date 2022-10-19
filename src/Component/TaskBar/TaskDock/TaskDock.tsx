import './TaskDock.css'

interface TaskDockProps {
    setAboutIsOpen: Function
    setAboutIsRunning: Function
    setSurfIsOpen: Function
    setSurfIsRunning: Function
    surfIsOpen: boolean
    surfIsRunning: boolean
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

    const handleCloseSurf = () => {
        props.setSurfIsOpen(false)
        props.setSurfIsRunning(false)
    }

    const handleOpenSurf = () => {
        props.setSurfIsOpen(true);
    }

    return (
        <div className={"taskDock"}>
            {props.aboutIsRunning ?
                <div className={"taskDockApplication"}>
                    <img onClick={handleOpenAbout} className={"applicationIcon"} src={"../../../assets/Desktop/Images/AboutImage.png"} alt={"About Icon"} />
                    <p onClick={handleOpenAbout} className={"applicationText"}>About</p>
                    <button onClick={handleCloseAbout} className={"closeButtonTaskDock"}>X</button>
                </div>
                : "" }
            {props.surfIsRunning ?
                <div className={"taskDockApplication"}>
                    <img onClick={handleOpenSurf} className={"applicationIcon"} src={"../../../assets/Desktop/Images/surfWaveFury.png"} alt={"About Icon"} />
                    <p onClick={handleOpenSurf} className={"applicationText"}>Surfwave Fury</p>
                    <button onClick={handleCloseSurf} className={"closeButtonTaskDock"}>X</button>
                </div>
                : "" }
        </div>
    )
}

export default TaskDock