import './CloseButton.css'

interface CloseButtonProps {
    setAboutIsOpen: Function
    setAboutIsRunning: Function
}

const CloseButton = (props: CloseButtonProps) => {

    const handleClose = () => {
        props.setAboutIsOpen(false);
        props.setAboutIsRunning(false);
    }

    return (
        <button onClick={handleClose} className={"closeButton"}>X</button>
    )
}

export default CloseButton