import Draggable from 'react-draggable'
import './AboutApplication.scss'
import Header from "../SubComponents/Header";

const About = (props) => {
    return (
        <Draggable className={"draggable"}>
            <div>
              <Header/>
            </div>
        </Draggable>
    )
}