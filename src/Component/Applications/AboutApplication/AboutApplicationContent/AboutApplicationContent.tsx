import './AboutApplicationContent.css'

const AboutApplicationContent = () => {
    return (
        <main className={"aboutApplicationContentContainer"}>
            <div className={"aboutApplicationText"}>
                <h1>General Information</h1>
                <hr className="solid"></hr>
                <p>The project was made using the following:</p>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
                     />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                     height="40px"/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="40px"/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" height="40px"/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
                     height="40px"/>
                <hr className="solid"></hr>
                <h2>Ice OS</h2>
                <p> Ice OS is a browser based OS inspired by Windows xp, the theme has be altered to fit an ice penguin
                    aesthetic.</p>
                <p>The log off button on the start menu will redirect the user to a youtube video of Rick Astley - Never
                    Gonna Give You Up (Official Music Video) The video in use is :
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"> here</a>.</p>
                <hr className="dotted"></hr>
                <h3>Surfwave Fury</h3>
                <p>The SurfWave Fury App is a JavaScript game created by the Surfing Penguins in 2022. Please find the
                    GitHub link <a href="https://github.com/iO-Academy/2022-july-keyboard-race"> here</a>. The
                    application can be opened from the start menu on the Browser OS, to launch the application you need
                    to open the start menu and then click on the SurfWave Fury button. Once the app has been launched
                    you would be able to play the game, view the local leaderboard, and minimise and close the App.
                </p>
                <hr className="dotted"></hr>
                <h3>Music</h3>
                <p>The music application is a React Player media player, set to <a
                    href="https://soundcloud.com/vista-boy/macintosh-plus-floral-shoppe-full-album">play</a>. The
                    application can be opened from the start menu on the Browser OS, to launch the music application you
                    need to open the start menu and then click on the Music button. Once the app has been launched you
                    would be able to play and pause the music, and minimise and close. This application makes use of the
                    React Player installed via npm.
                </p>
                <hr className="dotted"></hr>
                <h3>Random Gifs</h3>
                <p>The Random GIFs application display randomly generated GIFs from GIPHY via api.
                </p>
                <hr className="dotted"></hr>
            </div>
        </main>
    )
}

export default AboutApplicationContent