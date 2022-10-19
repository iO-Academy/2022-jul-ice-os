import './Desktop.css'
import AboutApplication from "../Applications/AboutApplication/AboutApplication";

interface DesktopProps  {
    aboutIsOpen: boolean
    setAboutIsOpen: Function
    setAboutIsRunning: Function
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
        </main>
    )
}

export default Desktop
