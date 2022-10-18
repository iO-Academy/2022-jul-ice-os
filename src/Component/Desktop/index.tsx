import './Desktop.css'
// TODO Big D for desktop, also big I for index??
import AboutApplication from "../Applications/AboutApplication/AboutApplication";

interface DesktopProps  {
    aboutIsOpen: boolean
    setAboutIsOpen: Function
    setAboutIsRunning: Function
}
const Desktop = (props :DesktopProps): JSX.Element => {


    return (
        <main  className="desktop">
            {props.aboutIsOpen ? <AboutApplication setAboutIsOpen={props.setAboutIsOpen} setAboutIsRunning={props.setAboutIsRunning} />  : ""}
            {props.aboutIsOpen ? props.setAboutIsRunning(true) : ""}
        </main>
    )
}

export default Desktop
