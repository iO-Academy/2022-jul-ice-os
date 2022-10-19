import './GifMinimizeButton.css'

interface GifMinimizeButtonProps {
    setGifIsOpen: Function
}

const GifMinimizeButton = (props :GifMinimizeButtonProps) => {
    const handleMinimize = () => {
        props.setGifIsOpen(false);
    }

    return (
        <button onClick={handleMinimize} className={"minimizeButton"}>_</button>
    )
}

export default GifMinimizeButton