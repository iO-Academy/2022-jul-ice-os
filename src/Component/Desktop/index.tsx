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
            <AboutApplication
                setAboutIsOpen={props.setAboutIsOpen}
                setAboutIsRunning={props.setAboutIsRunning}
                aboutIsOpen={props.aboutIsOpen} />
            <GifApplication
                setGifIsRunning={props.setGifIsRunning}
                setGifIsOpen={props.setGifIsOpen}
                gifIsOpen={props.gifIsOpen} />
        </main>
    )
}

export default Desktop
