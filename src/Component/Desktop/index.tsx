import './Desktop.css'
import AboutApplication from "../Applications/AboutApplication/AboutApplication";
import MusicApplication from "../Applications/MusicApplication/MusicApplication";

interface DesktopProps  {
    aboutIsOpen: boolean
    setAboutIsOpen: Function
    setAboutIsRunning: Function
    musicIsOpen: boolean
    setMusicIsOpen: Function
    setMusicIsRunning: Function
    setStartMenuOpen: Function


}
const Desktop = (props :DesktopProps): JSX.Element => {

    const closeStartMenu = () => {
        props.setStartMenuOpen(true)
    }

    return (
        <main onClick={closeStartMenu} className="desktop">
            {props.aboutIsOpen ? <AboutApplication setAboutIsOpen={props.setAboutIsOpen} setAboutIsRunning={props.setAboutIsRunning} />  : ""}
            {props.aboutIsOpen ? props.setAboutIsRunning(true) : ""}
            {props.musicIsOpen ? <MusicApplication setMusicIsOpen={props.setMusicIsOpen} setMusicIsRunning={props.setMusicIsRunning} />  : ""}
            {props.musicIsOpen ? props.setMusicIsRunning(true) : ""}
        </main>
    )
}

export default Desktop
