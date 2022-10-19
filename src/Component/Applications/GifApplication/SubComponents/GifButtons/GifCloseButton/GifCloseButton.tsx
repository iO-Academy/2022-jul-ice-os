import './GifCloseButton.css'

interface CloseButtonProps {
    setGifIsOpen: Function
    setGifIsRunning: Function
}

const GifCloseButton = (props: CloseButtonProps) => {

    const handleClose = () => {
        props.setGifIsOpen(false);
        props.setGifIsRunning(false);
    }

    return (
        <button onClick={handleClose} className={"closeButton"}>X</button>
    )
}

export default GifCloseButton