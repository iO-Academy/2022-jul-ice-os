import Draggable from 'react-draggable'
import './AboutApplication.css'
import Header from "../SubComponents/Header/Header";


const AboutApplication = () => {
    return (

        <Draggable
            handle=".handle"
            defaultPosition={{x: 50, y: 50}}
            grid={[25, 25]}
            scale={1}>
            <div className={"draggable"}>
              <Header ApplicationName={"About"} />
            </div>
        </Draggable>
    )
}

export default AboutApplication