import "./Header.css"

interface HeaderProps {
    ApplicationName: string
}


const Header = (props :HeaderProps) => {

    return (
        <header className={"handle"}>
            <h6 className={"headerTitle"}>{props.ApplicationName}</h6>
        </header>
    )
}


export default Header