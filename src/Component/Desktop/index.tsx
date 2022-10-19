import './Desktop.css'
import AboutApplication from "../Applications/AboutApplication/AboutApplication";
import SurfApplication from "../Applications/SurfApplication/SurfApplication";

interface DesktopProps  {
    aboutIsOpen: boolean
    setAboutIsOpen: Function
    setAboutIsRunning: Function
    surfIsOpen: boolean
    setSurfIsOpen: Function
    setSurfIsRunning: Function
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
            {props.surfIsOpen ? <SurfApplication setSurfIsOpen={props.setSurfIsOpen} setSurfIsRunning={props.setSurfIsRunning} />  : ""}
            {props.surfIsOpen ? props.setSurfIsRunning(true) : ""}
        </main>
    )
}

export default Desktop
