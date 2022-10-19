import './TaskDock.css'

interface TaskDockProps {
    setAboutIsOpen: Function
    setAboutIsRunning: Function
    aboutIsOpen: boolean
    aboutIsRunning: boolean
    setMusicIsOpen: Function
    setMusicIsRunning: Function
    musicIsOpen: boolean
    musicIsRunning: boolean
}

const TaskDock = (props :TaskDockProps) => {

    const handleCloseAbout = () => {
        props.setAboutIsOpen(false)
        props.setAboutIsRunning(false)
    }
    const handleCloseMusic = () => {
        props.setMusicIsOpen(false)
        props.setMusicIsRunning(false)
    }

    const handleOpenAbout = () => {
        props.setAboutIsOpen(true);
    }
    const handleOpenMusic = () => {
        props.setMusicIsOpen(true);
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
            {props.musicIsRunning ?
                <div className={"taskDockApplication"}>
                    <img onClick={handleOpenMusic} className={"applicationIcon"} src={"../../../assets/Desktop/Images/musicPenguin.png"} alt={"Music Icon"} />
                    <p onClick={handleOpenMusic} className={"applicationText"}>Music</p>
                    <button onClick={handleCloseMusic} className={"closeButtonTaskDock"}>X</button>
                </div>
                : "" }
        </div>
    )
}

export default TaskDock