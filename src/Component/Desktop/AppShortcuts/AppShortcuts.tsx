import './AppShortcuts.css'

interface AppShortcutsProps {
    setAboutIsOpen: Function
    setAboutIsRunning: Function
}
const AppShortcuts = (props:AppShortcutsProps) => {

    const handleClick = () => {
        props.setAboutIsOpen(true)
        props.setAboutIsRunning(true)
    }

    return (
        <div className={"appShortcuts"}>
            <div className={"app"}> <img onClick={handleClick} src={"../../../assets/Desktop/Images/AboutImage.png"}alt={"About Icon"}/>
            <p>About</p>
            </div>
        </div>
    )
}

export default AppShortcuts