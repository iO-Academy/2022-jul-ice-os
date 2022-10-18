import './clock.css'

const Clock = ():JSX.Element => {

    function addZero(timeDigit: number): string|number {
        if (timeDigit < 10) {
            const timeString: string = "0" + timeDigit
            return timeString
        } else {
                return timeDigit
        }

    }

    const currentTime = () => {
        const clockDisplay = document.getElementById('clockDisplay')
        let date: Date = new Date()
        let hours: string|number = addZero(date.getHours())
        let minutes: string|number = addZero(date.getMinutes())
        let time: string|number = hours + ':' + minutes
        clockDisplay!.innerText = time

    }

    setInterval(currentTime, 1000);

    return (
        <div className="clock">
            <p className="clockDisplay" id="clockDisplay"></p>
        </div>
    )
}

export default Clock
