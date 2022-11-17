import './AppShortcuts.css'

interface AppShortcutsProps {
    setAboutIsOpen: Function
    setAboutIsRunning: Function
    setSurfIsOpen: Function
    setSurfIsRunning: Function
    setMusicIsOpen: Function
    setMusicIsRunning: Function
    setGifIsOpen: Function
    setGifIsRunning: Function
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

const AppShortcuts = (props: AppShortcutsProps) => {

    const handleClickAbout = () => {
        props.setAboutIsOpen(true)
        props.setAboutIsRunning(true)
        props.setAboutZIndex(props.maxZIndex + 1)
        props.setMaxZIndex(props.maxZIndex + 1)
    }
    const handleClickSurf = () => {
        props.setSurfIsOpen(true)
        props.setSurfIsRunning(true)
        props.setSurfZIndex(props.maxZIndex + 1)
        props.setMaxZIndex(props.maxZIndex + 1)
    }

    const handleClickMusic = () => {
        props.setMusicIsOpen(true)
        props.setMusicIsRunning(true)
        props.setMusicZIndex(props.maxZIndex + 1)
        props.setMaxZIndex(props.maxZIndex + 1)
    }

    const handleClickGif = () => {
        props.setGifIsOpen(true)
        props.setGifIsRunning(true)
        props.setGifZIndex(props.maxZIndex + 1)
        props.setMaxZIndex(props.maxZIndex + 1)
    }

    return (
        <div className={"appShortcuts"}>
            <div className={"app"}><img onDoubleClick={handleClickAbout} src={process.env.PUBLIC_URL + "/assets/Desktop/Images/aboutImage.png"}
                                        alt={"About Icon"}/>
                <p>About</p>
            </div>
            <div className={"app"}><img onDoubleClick={handleClickSurf} id={"surfwaveIcon"}
                                        src={process.env.PUBLIC_URL + "/assets/Desktop/Images/surfingPenguinIcon.png"}
                                        alt={"Surfwave Fury Icon"}/>
                <p>Surfwave Fury</p>
            </div>
            <div className={"app"}><img onDoubleClick={handleClickMusic}
                                        src={process.env.PUBLIC_URL + "/assets/Desktop/Images/musicPenguin.png"} alt={"Music Icon"}/>
                <p>Music</p>
            </div>
            <div className={"app"}><img onDoubleClick={handleClickGif} id={"gifsicon"}
                                        src={process.env.PUBLIC_URL + "/assets/Desktop/Images/gifWatchingPenguin.png"} alt={"Gif Icon"}/>
                <p>Gifs</p>
            </div>
        </div>
    )
}

export default AppShortcuts