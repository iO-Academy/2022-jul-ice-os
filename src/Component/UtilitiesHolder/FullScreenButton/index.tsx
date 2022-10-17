
import './FullScreenButton.css'
import screenfull from "screenfull";

const FullScreenButton = ():JSX.Element => {

    const app = document.getElementById('App');
    const fullscreenButton = document.getElementById('fullscreenButton');

    fullscreenButton!.addEventListener('click', () => {
        if(screenfull.isEnabled) {
            screenfull.toggle(app!);
        }
    })



    return (
        <div className="FullScreenButton">
            <i className="fa-solid fa-maximize" id="fullscreenButton"></i>
        </div>
    )
}

export default FullScreenButton


