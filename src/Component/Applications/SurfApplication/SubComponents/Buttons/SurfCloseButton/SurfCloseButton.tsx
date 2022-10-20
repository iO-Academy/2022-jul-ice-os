import './SurfCloseButton.css'

interface CloseButtonProps {
    setSurfIsOpen: Function
    setSurfIsRunning: Function
}

const SurfCloseButton = (props: CloseButtonProps) => {

    const handleClose = () => {
        props.setSurfIsOpen(false);
        props.setSurfIsRunning(false);
    }

    return (
        <button onClick={handleClose} className={"closeButton"}>X</button>
    )
}

export default SurfCloseButton