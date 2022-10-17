import Clock from './Clock'
import FullScreenButton from "./FullScreenButton";
import './UtilitiesHolder.css'

const UtilitiesHolder = ():JSX.Element => {
    return (
        <div className="UtilitiesHolder">
            <FullScreenButton />
            <Clock />
        </div>
    )
}

export default UtilitiesHolder
