import './Desktop.css'
import AboutApplication from "../Applications/AboutApplication/AboutApplication";
import GifApplication from "../Applications/GifApplication/GifApplication";

interface DesktopProps  {
    aboutIsOpen: boolean
    setAboutIsOpen: Function
    setAboutIsRunning: Function
    setStartMenuOpen: Function
    setGifIsOpen: Function
    setGifIsRunning: Function
    gifIsOpen: boolean
}
const Desktop = (props :DesktopProps): JSX.Element => {

    const closeStartMenu = () => {
        props.setStartMenuOpen(true)
    }

    return (
        <main onClick={closeStartMenu} className="desktop">
            {props.aboutIsOpen ? <AboutApplication setAboutIsOpen={props.setAboutIsOpen} setAboutIsRunning={props.setAboutIsRunning} />  : ""}
            {props.aboutIsOpen ? props.setAboutIsRunning(true) : ""}
            {props.gifIsOpen ? <GifApplication setGifIsOpen={props.setGifIsOpen} setGifIsRunning={props.setGifIsRunning} /> : ""}
            {props.gifIsOpen ? props.setGifIsRunning(true) : ""}
        </main>
    )
}

export default Desktop
