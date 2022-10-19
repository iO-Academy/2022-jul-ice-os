import "./GifHeader.css"
import GifMinimizeButton from "../GifButtons/GifMinimizeButton/GifMinimizeButton";
import GifMaximizeButton from "../GifButtons/GifMaximizeButton/GifMaximizeButton";
import GifCloseButton from "../GifButtons/GifCloseButton/GifCloseButton";


interface HeaderProps {
    ApplicationName: string
    ApplicationIcon: string
    setGifIsOpen: Function
    setGifIsRunning: Function
}

const GifHeader = (props :HeaderProps) => {

    return (
        <header className={"gifHandle"}>
            <div className={"gifInfoContainer"}>
                <img className={"aboutIcon"} src={props.ApplicationIcon} alt={"about icon"} />
                <h6 className={"headerTitle"}>{props.ApplicationName}</h6>
            </div>
            <div className={"gifButtonContainer"}>
                <GifMinimizeButton setGifIsOpen={props.setGifIsOpen}/>
                <GifMaximizeButton />
                <GifCloseButton setGifIsOpen={props.setGifIsOpen} setGifIsRunning={props.setGifIsRunning} />

            </div>
        </header>
    )
}

export default GifHeader