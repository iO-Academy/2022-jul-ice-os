import './FullScreenButton.css'
import screenfull from "screenfull";



const FullScreenButton = () => {

   const root = document.getElementById('root');

   const makeFullscreen = () => {
        screenfull.toggle(root);
    }

    return (
        <div className="FullScreenButton">
            <i onClick={makeFullscreen} className="fa-solid fa-maximize fullscreenButton" id="fullscreenButton"></i>
        </div>
    )
}

export default FullScreenButton