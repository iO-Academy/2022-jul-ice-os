import './TaskDock.css'

interface TaskDockProps {
    setAboutIsOpen: Function
    setAboutIsRunning: Function
    setSurfIsOpen: Function
    setSurfIsRunning: Function
    surfIsOpen: boolean
    surfIsRunning: boolean
    setGifIsRunning: Function
    setGifIsOpen: Function
    gifIsOpen: boolean
    gifIsRunning: boolean
    aboutIsOpen: boolean
    aboutIsRunning: boolean
    setMusicIsOpen: Function
    setMusicIsRunning: Function
    musicIsOpen: boolean
    musicIsRunning: boolean
    maxZIndex: number
    setMaxZIndex: Function
    aboutZIndex: number
    setAboutZIndex: Function
    gifZIndex: number
    setGifZIndex: Function
    surfZIndex: number
    setSurfZIndex: Function
    musicZIndex: number
    setMusicZIndex: Function
}

const TaskDock = (props :TaskDockProps) => {

    const handleCloseAbout = (e: { stopPropagation: () => void }) => {
        e.stopPropagation()
        props.setAboutIsOpen(false)
        props.setAboutIsRunning(false)
    }
    const handleCloseMusic = (e: { stopPropagation: () => void }) => {
        e.stopPropagation()
        props.setMusicIsOpen(false)
        props.setMusicIsRunning(false)
    }

    const handleOpenAbout = (e: { stopPropagation: () => void }) => {
        e.stopPropagation()
        props.setAboutIsOpen(true);
        props.setAboutZIndex(props.maxZIndex + 1)
        props.setMaxZIndex(props.maxZIndex + 1)
    }
    const handleOpenMusic = (e: { stopPropagation: () => void }) => {
        e.stopPropagation()
        props.setMusicIsOpen(true);
        props.setMusicZIndex(props.maxZIndex + 1)
        props.setMaxZIndex(props.maxZIndex + 1)
    }

    const handleCloseGif = (e: { stopPropagation: () => void }) => {
        e.stopPropagation()
        props.setGifIsOpen(false)
        props.setGifIsRunning(false)
    }

    const handleOpenGif = (e: { stopPropagation: () => void }) => {
        e.stopPropagation()
        props.setGifIsOpen(true)
        props.setGifZIndex(props.maxZIndex + 1)
        props.setMaxZIndex(props.maxZIndex + 1)
    }

    const handleCloseSurf = (e: { stopPropagation: () => void }) => {
        e.stopPropagation()
        props.setSurfIsOpen(false)
        props.setSurfIsRunning(false)
    }

    const handleOpenSurf = (e: { stopPropagation: () => void }) => {
        e.stopPropagation()
        props.setSurfIsOpen(true);
        props.setSurfZIndex(props.maxZIndex + 1)
        props.setMaxZIndex(props.maxZIndex + 1)
    }

    return (
        <div className={"taskDock"}>
            {props.aboutIsRunning ?
                <div className={"taskDockApplication"} onClick={handleOpenAbout}>
                    <img onClick={handleOpenAbout} className={"applicationIcon"} src={process.env.PUBLIC_URL + "/assets/Desktop/Images/AboutImage.png"} alt={"About Icon"} />
                    <p onClick={handleOpenAbout} className={"applicationText"}>About</p>
                    <button onClick={handleCloseAbout} className={"closeButtonTaskDock"}>X</button>
                </div>
                : "" }
                
            {props.surfIsRunning ?
                <div className={"taskDockApplication"} onClick={handleOpenSurf}>
                    <img onClick={handleOpenSurf} className={"applicationIcon"} src={process.env.PUBLIC_URL + "/assets/Desktop/Images/surfingPenguinIcon.png"} alt={"About Icon"} />
                    <p onClick={handleOpenSurf} className={"applicationText"}>Surfwave Fury</p>
                    <button onClick={handleCloseSurf} className={"closeButtonTaskDock"}>X</button>
                </div>
                : "" }
                
            {props.musicIsRunning ?
                <div className={"taskDockApplication"} onClick={handleOpenMusic}>
                    <img onClick={handleOpenMusic} className={"applicationIcon"} src={process.env.PUBLIC_URL + "/assets/Desktop/Images/musicPenguin.png"} alt={"Music Icon"} />
                    <p onClick={handleOpenMusic} className={"applicationText"}>Music</p>
                    <button onClick={handleCloseMusic} className={"closeButtonTaskDock"}>X</button>
                </div>
                : "" }
        
            {props.gifIsRunning ?
                <div className={"taskDockApplication"} onClick={handleOpenGif}>
                    <img onClick={handleOpenGif} className={"applicationIcon"} src={process.env.PUBLIC_URL + "/assets/Desktop/Images/gifWatchingPenguin.png"} alt={"About Icon"} />
                    <p onClick={handleOpenGif} className={"applicationText"}>Gif</p>
                    <button onClick={handleCloseGif} className={"closeButtonTaskDock"}>X</button>
                </div>
                : ""}
        </div>
    )
}

export default TaskDock