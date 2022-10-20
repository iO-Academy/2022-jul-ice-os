import './MusicMinimizeButton.css'

interface MinimizeButtonProps {
    setMusicIsOpen: Function
}

const MusicMinimizeButton = (props :MinimizeButtonProps) => {
    const handleMinimize = () => {
        props.setMusicIsOpen(false);
    }

    return (
        <button onClick={handleMinimize} className={"minimizeButton"}>_</button>
    )
}

export default MusicMinimizeButton