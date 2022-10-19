import "./MusicHeader.css"
import MusicCloseButton from "../MusicButtons/MusicCloseButton/MusicCloseButton";
import MusicMinimizeButton from "../MusicButtons/MusicMinimizeButton/MusicMinimizeButton";
import MusicMaximizeButton from "../MusicButtons/MusicMaximizeButton/MusicMaximizeButton";

interface MusicHeaderProps {
    ApplicationName: string
    ApplicationIcon: string
    setMusicIsOpen: Function
    setMusicIsRunning: Function
    setAboutMaximize: Function
    aboutMaximize: boolean
}

const MusicHeader = (props :MusicHeaderProps) => {

    return (
        <header className={"musicHandle"}>
            <div className={"infoContainer"}>
                <img className={"musicIcon"} src={props.ApplicationIcon} alt={"music icon"} />
                <h6 className={"headerTitle"}>{props.ApplicationName}</h6>
            </div>
            <div className={"buttonContainer"}>
                <MusicMinimizeButton setMusicIsOpen={props.setMusicIsOpen}/>
                <MusicMaximizeButton />
                <MusicCloseButton setMusicIsOpen={props.setMusicIsOpen} setMusicIsRunning={props.setMusicIsRunning} />
            </div>
        </header>
    )
}

export default MusicHeader
