import './MusicApplicationContent.css'
import ReactPlayer from "react-player";

const MusicApplicationContent = () => {
    return (
        <main className={"musicApplicationContentContainer"}>
            <div className={"musicApplicationPlayer"}>
                <ReactPlayer
                    url="https://soundcloud.com/vista-boy/macintosh-plus-floral-shoppe-full-album"
                />
            </div>
        </main>
    )
}

export default MusicApplicationContent