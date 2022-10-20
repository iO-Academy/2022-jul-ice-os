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

const GifApplication = (props :GifApplicationProps) => {

    return (
       <Draggable
           defaultClassName={props.gifIsOpen ? "gifDraggable" : "gifDraggable hiden"}
           handle=".gifHandle"
           defaultPosition={{x: 50, y: 50}}
           scale={1}
           bounds={'.desktop'}>
           <div className={"gifDraggable"}>
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