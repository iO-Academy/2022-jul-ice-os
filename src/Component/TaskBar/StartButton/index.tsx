import './StartButton.css';

const StartButton = (): JSX.Element => {

    return (
        <button className="startButton">
            <img className="startButtonImage" src={"../../../assets/Desktop/Images/icebergStartMenuIcon.png"} alt="Iceberg start menu logo" />
            <p className="startButtonText">Start</p>

        </button>
    )
}

export default StartButton