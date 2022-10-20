import './GifApplication.css'
import Draggable from "react-draggable";
import {useState} from "react";
import GifApplicationContent from "./GifApplicationContent/GifApplicationContent";
import GifHeader from "./SubComponents/GifHeader/GifHeader";
import GifIcon from "./Images/gifWatchingPenguin.png"
import userEvent from "@testing-library/user-event";

interface GifApplicationProps {
    setGifIsRunning: Function
    setGifIsOpen: Function
    gifIsOpen: boolean
    maxZIndex: number
    setMaxZIndex: Function
}

let GifApplication = (props :GifApplicationProps) => {

    const [gifZIndex, setGifZIndex] = useState(props.maxZIndex)

    const handleClick = () => {
        setGifZIndex(props.maxZIndex + 1)
        props.setMaxZIndex(props.maxZIndex + 1)
    }

    return (
       <Draggable
           defaultClassName={props.gifIsOpen ? "gifDraggable" : "gifDraggable hidden"}
           handle=".gifHandle"
           defaultPosition={{x: 0, y: 0}}
           scale={1}
           bounds={'.desktop'}>
           <div className={"gifDraggable"} onClick={handleClick} style={{zIndex: gifZIndex}}>
               <GifHeader
                   ApplicationName={"Gif Application"}
                   ApplicationIcon={GifIcon}
                   setGifIsOpen={props.setGifIsOpen}
                   setGifIsRunning={props.setGifIsRunning}/>
               <GifApplicationContent/>
           </div>
       </Draggable>
    )
}

export default GifApplication