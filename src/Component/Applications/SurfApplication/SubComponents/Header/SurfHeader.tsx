import "./SurfHeader.css"
import SurfCloseButton from "../Buttons/SurfCloseButton/SurfCloseButton";
import MinimizeButton from "../Buttons/SurfMinimizeButton/MinimizeButton";
import SurfMaximizeButton from "../Buttons/SurfMaximizeButton/SurfMaximizeButton";

interface HeaderProps {
    ApplicationName: string
    ApplicationIcon: string
    setSurfIsOpen: Function
    setSurfIsRunning: Function
    setAboutMaximize: Function
    aboutMaximize: boolean
}

const SurfHeader = (props :HeaderProps) => {

    return (
        <header className={"handle"}>
            <div className={"infoContainer"}>
                <img className={"aboutIcon"} src={props.ApplicationIcon} alt={"about icon"} />
                <h6 className={"headerTitle"}>{props.ApplicationName}</h6>
            </div>
            <div className={"buttonContainer"}>
                <MinimizeButton setAboutIsOpen={props.setSurfIsOpen}/>
                <SurfMaximizeButton />
                <SurfCloseButton setSurfIsOpen={props.setSurfIsOpen} setSurfIsRunning={props.setSurfIsRunning} />
            </div>
        </header>
    )
}

export default SurfHeader