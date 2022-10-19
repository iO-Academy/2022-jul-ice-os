import './MinimizeButton.css'

interface MinimizeButtonProps {
    setAboutIsOpen: Function
}

const MinimizeButton = (props :MinimizeButtonProps) => {
    const handleMinimize = () => {
        props.setAboutIsOpen(false);
    }

    return (
        <button onClick={handleMinimize} className={"minimizeButton"}>_</button>
    )
}

export default MinimizeButton