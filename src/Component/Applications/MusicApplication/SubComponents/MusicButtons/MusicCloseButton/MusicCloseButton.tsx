import './MusicCloseButton.css'

interface CloseButtonProps {
    setMusicIsOpen: Function
    setMusicIsRunning: Function
}

const MusicCloseButton = (props: CloseButtonProps) => {

    const handleClose = () => {
        props.setMusicIsOpen(false);
        props.setMusicIsRunning(false);
    }

    return (
        <button onClick={handleClose} className={"closeButton"}>X</button>
    )
}

export default MusicCloseButton