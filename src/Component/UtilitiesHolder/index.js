import Clock from './Clock'
import './UtilitiesHolder.css'
import FullScreenButton from "./FullscreenButton";

const UtilitiesHolder = () => {
    return (
        <div className="UtilitiesHolder">
            <FullScreenButton />
            <Clock />
        </div>
    )
}

export default UtilitiesHolder
