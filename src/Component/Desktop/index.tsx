import './Desktop.css'
import AboutApplication from "../Applications/AboutApplication/AboutApplication";
import SurfApplication from "../Applications/SurfApplication/SurfApplication";
import MusicApplication from "../Applications/MusicApplication/MusicApplication";
import GifApplication from "../Applications/GifApplication/GifApplication";
import {useState} from "react";
import AppShortcuts from "./AppShortcuts/AppShortcuts";


interface DesktopProps  {
    aboutIsOpen: boolean
    setAboutIsOpen: Function
    setAboutIsRunning: Function
    surfIsOpen: boolean
    setSurfIsOpen: Function
    setSurfIsRunning: Function
    musicIsOpen: boolean
    setMusicIsOpen: Function
    setMusicIsRunning: Function
    setStartMenuOpen: Function
    setGifIsOpen: Function
    setGifIsRunning: Function
    gifIsOpen: boolean
    maxZIndex: number
    setMaxZIndex: Function
    aboutZIndex: number
    setAboutZIndex: Function
    gifZIndex: number
    setGifZIndex: Function
    surfZIndex: number
    setSurfZIndex: Function
    musicZIndex: number
    setMusicZIndex: Function
}

const Desktop = (props :DesktopProps): JSX.Element => {

    const closeStartMenu = () => {
        props.setStartMenuOpen(true)
    }

    return (
        <main onClick={closeStartMenu} className="desktop">
            <AboutApplication
                setAboutIsOpen={props.setAboutIsOpen}
                setAboutIsRunning={props.setAboutIsRunning}
                aboutIsOpen={props.aboutIsOpen}
                maxZIndex={props.maxZIndex}
                setMaxZIndex={props.setMaxZIndex}
                aboutZIndex={props.aboutZIndex}
                setAboutZIndex={props.setAboutZIndex}/>
            <GifApplication
                setGifIsRunning={props.setGifIsRunning}
                setGifIsOpen={props.setGifIsOpen}
                gifIsOpen={props.gifIsOpen}
                maxZIndex={props.maxZIndex}
                setMaxZIndex={props.setMaxZIndex}
                gifZIndex={props.gifZIndex}
                setGifZIndex={props.setGifZIndex}/>
            <MusicApplication
                setMusicIsOpen={props.setMusicIsOpen}
                setMusicIsRunning={props.setMusicIsRunning}
                musicIsOpen={props.musicIsOpen}
                maxZIndex={props.maxZIndex}
                setMaxZIndex={props.setMaxZIndex}
                musicZIndex={props.musicZIndex}
                setMusicZIndex={props.setMusicZIndex}/>

            <SurfApplication
                setSurfIsOpen={props.setSurfIsOpen}
                setSurfIsRunning={props.setSurfIsRunning}
                surfIsOpen={props.surfIsOpen}
                maxZIndex={props.maxZIndex}
                setMaxZIndex={props.setMaxZIndex}
                surfZIndex={props.surfZIndex}
                setSurfZIndex={props.setSurfZIndex} />

            <AppShortcuts
                setAboutIsOpen={props.setAboutIsOpen}
                setAboutIsRunning={props.setAboutIsRunning}
                setSurfIsOpen={props.setSurfIsOpen}
                setSurfIsRunning={props.setSurfIsRunning}
                setMusicIsOpen={props.setMusicIsOpen}
                setMusicIsRunning={props.setMusicIsRunning}
                setGifIsOpen={props.setGifIsOpen}
                setGifIsRunning={props.setGifIsRunning}
                maxZIndex={props.maxZIndex}
                setMaxZIndex={props.setMaxZIndex}
                aboutZIndex={props.aboutZIndex}
                setAboutZIndex={props.setAboutZIndex}
                gifZIndex={props.gifZIndex}
                setGifZIndex={props.setGifZIndex}
                surfZIndex={props.surfZIndex}
                setSurfZIndex={props.setSurfZIndex}
                musicZIndex={props.musicZIndex}
                setMusicZIndex={props.setMusicZIndex}
            />

        </main>
    )
}

export default Desktop
