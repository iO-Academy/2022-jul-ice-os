import './AppShortcuts.css'

interface AppShortcutsProps {
    setAboutIsOpen: Function
    setAboutIsRunning: Function
    setSurfIsOpen: Function
    setSurfIsRunning: Function
}
const AppShortcuts = (props:AppShortcutsProps) => {

    const handleClick = () => {
        props.setAboutIsOpen(true)
        props.setAboutIsRunning(true)
        props.setSurfIsOpen(true)
        props.setAboutIsRunning(true)
    }

    return (
        <div className={"appShortcuts"}>
            <div className={"app"}> <img onClick={handleClick} src={"../../../assets/Desktop/Images/AboutImage.png"}alt={"About Icon"}/>
            <p>About</p>
            </div>
            <div className={"app"}> <img onClick={handleClick} src={"../../../assets/Desktop/Images/surfingPenguinIcon.png"}alt={"Surfwave Fury Icon"}/>
                <p>Surfwave Fury</p>
            </div>
        </div>
    )
}

export default AppShortcuts