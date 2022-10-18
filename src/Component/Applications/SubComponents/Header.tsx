interface HeaderProps {
    ApplicationName: string
}


const Header = (props :HeaderProps) => {

    return (
        <header className={"handle"}>
            <h2 className={"headerTitle"}>{props.ApplicationName}</h2>
        </header>
    )
}


export default Header