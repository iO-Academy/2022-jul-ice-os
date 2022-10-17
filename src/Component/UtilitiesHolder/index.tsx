import Clock from './Clock'
import './UtilitiesHolder.css'
import FullScreenButton from "./FullscreenButton";

const UtilitiesHolder = ():JSX.Element => {
    return (
        <div className="UtilitiesHolder">
            <FullScreenButton />
            <Clock />
        </div>
    )
}

export default UtilitiesHolder
