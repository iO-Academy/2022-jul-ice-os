import "./Header.css"
import CloseButton from "../Buttons/CloseButton/CloseButton";
import MinimizeButton from "../Buttons/MinimizeButton/MinimizeButton";
import MaximizeButton from "../Buttons/MaximizeButton/MaximizeButton";

interface HeaderProps {
    ApplicationName: string
    setAboutIsOpen: Function
    setAboutIsRunning: Function
}


const Header = (props :HeaderProps) => {

    return (
        <header className={"handle"}>
            <div className={"infoContainer"}>
                <h6 className={"headerTitle"}>{props.ApplicationName}</h6>
            </div>
            <div className={"buttonContainer"}>
                <MinimizeButton setAboutIsOpen={props.setAboutIsOpen}/>
                <MaximizeButton />
                <CloseButton setAboutIsOpen={props.setAboutIsOpen} setAboutIsRunning={props.setAboutIsRunning} />
            </div>

        </header>
    )
}


export default Header