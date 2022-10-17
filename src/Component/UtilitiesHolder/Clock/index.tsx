import './clock.css'

const Clock = ():JSX.Element => {

    const currentTime = () => {
        const clockDisplay = document.getElementById('clockDisplay')
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let time = `${hours}:${minutes}:${seconds}`;
        clockDisplay!.innerText = time;
    }

    setInterval(currentTime, 1000);


    return (
        <div className="clock">
            <p className="clockDisplay" id="clockDisplay"></p>
        </div>
    )
}

export default Clock
