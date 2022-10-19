import './TaskDock.css'

interface TaskDockProps {
    setAboutIsOpen: Function
    setAboutIsRunning: Function
    setGifIsRunning: Function
    setGifIsOpen: Function
    gifIsOpen: boolean
    gifIsRunning: boolean
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

    const handleCloseGif = () => {
        props.setGifIsOpen(false)
        props.setGifIsRunning(false)
    }

    const handleOpenGif = () => {
        props.setGifIsOpen(true)
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
            {props.gifIsRunning ?
                <div className={"taskDockApplication"}>
                    <img onClick={handleOpenGif} className={"applicationIcon"} src={"../../../assets/Desktop/Images/gifWatchingPenguin.png"} alt={"About Icon"} />
                    <p onClick={handleOpenGif} className={"applicationText"}>Gif</p>
                    <button onClick={handleCloseGif} className={"closeButtonTaskDock"}>X</button>
                </div>
                : ""}
        </div>
    )
}

export default TaskDock