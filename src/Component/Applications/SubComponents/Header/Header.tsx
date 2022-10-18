import "./Header.css"
import CloseButton from "../Buttons/CloseButton/CloseButton";
import MinimizeButton from "../Buttons/MinimizeButton/MinimizeButton";

interface HeaderProps {
    ApplicationName: string
}


const Header = (props :HeaderProps) => {

    return (
        <header className={"handle"}>
            <div className={"infoContainer"}>
                <h6 className={"headerTitle"}>{props.ApplicationName}</h6>
            </div>
            <div className={"buttonContainer"}>
                <MinimizeButton />
                <CloseButton />
            </div>

        </header>
    )
}


export default Header