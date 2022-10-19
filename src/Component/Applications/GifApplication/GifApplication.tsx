import './GifApplication.css'
import Draggable from "react-draggable";
import {useState} from "react";
import GifApplicationContent from "./GifApplicationContent/GifApplicationContent";
import GifHeader from "./SubComponents/GifHeader/GifHeader";
import GifIcon from "./Images/gifWatchingPenguin.png"

interface GifApplicationProps {
    setGifIsRunning: Function
    setGifIsOpen: Function
}

const GifApplication = (props :GifApplicationProps) => {
    return (
       <Draggable
           handle=".gifHandle"
           defaultPosition={{x: 500, y: 50}}
           grid={[25, 25]}
           scale={1}
           bounds={'.desktop'}>
           <div className={"gifDraggable"}>
               <GifHeader
                   ApplicationName={"Gif Application"}
                   ApplicationIcon={GifIcon}
                   setGifIsOpen={props.setGifIsOpen}
                   setGifIsRunning={props.setGifIsRunning} />
               <GifApplicationContent />
           </div>
       </Draggable>
    )
}

export default GifApplication