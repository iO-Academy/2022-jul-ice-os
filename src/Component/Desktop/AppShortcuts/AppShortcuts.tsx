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
}
const AppShortcuts = (props:AppShortcutsProps) => {

    const handleClickAbout = () => {
        props.setAboutIsOpen(true)
        props.setAboutIsRunning(true)

    }
    const handleClickSurf = () => {
        props.setSurfIsOpen(true)
        props.setAboutIsRunning(true)
    }

    const handleClickMusic = () => {
        props.setMusicIsOpen(true)
        props.setMusicIsRunning(true)
    }

    const handleClickGif = () => {
        props.setGifIsOpen(true)
        props.setGifIsRunning(true)
    }

    return (
        <div className={"appShortcuts"}>
            <div className={"app"}> <img onClick={handleClickAbout} src={"../../../assets/Desktop/Images/AboutImage.png"}alt={"About Icon"}/>
            <p>About</p>
            </div>
            <div className={"app"}> <img onClick={handleClickSurf} id={"surfwaveIcon"} src={"../../../assets/Desktop/Images/surfingPenguinIcon.png"}alt={"Surfwave Fury Icon"}/>
                <p>Surfwave Fury</p>
            </div>
            <div className={"app"}> <img onClick={handleClickMusic} src={"../../../assets/Desktop/Images/musicPenguin.png"}alt={"Music Icon"}/>
                <p>Music</p>
            </div>
            <div className={"app"}> <img onClick={handleClickGif} id={"gifsicon"}src={"../../../assets/Desktop/Images/gifWatchingPenguin.png"}alt={"Gif Icon"}/>
                <p>Gifs</p>
            </div>
        </div>
    )
}

export default AppShortcuts