# Table of contents 
* [General Information of Ice OS](https://github.com/iO-Academy/2022-jul-ice-os/blob/read-me/README.md#ice-os)
  * [General Information of About App](https://github.com/iO-Academy/2022-jul-ice-os/blob/read-me/README.md#about-app)
  * [General Information of SurfWave Fury](https://github.com/iO-Academy/2022-jul-ice-os/blob/read-me/README.md#surfwave-fury)
  * [General Information of Music App](https://github.com/iO-Academy/2022-jul-ice-os/blob/read-me/README.md#music-app)
  * [General Information of Random GIFs App](https://github.com/iO-Academy/2022-jul-ice-os/blob/read-me/README.md#random-gifs-app)
* [Technologies](https://github.com/iO-Academy/2022-jul-ice-os/blob/read-me/README.md#technologies)
* [Setup](https://github.com/iO-Academy/2022-jul-ice-os/blob/read-me/README.md#setup)

# General Information
### Ice OS

Ice OS is a browser based OS inspired by Windows xp, the theme has be altered to fit an ice penguin aesthetic. 

Ice OS features include the applications: About, Surfwave Fury, Music, and Random GIFs.
All Apps are able to resize, drag, close and minimize. The taskbar displays a start menu that lists all applications, a clock in the bottom right along with a fullscreen button, and stores open applications.

The log off button on the start menu will redirect the user to a YouTube video of Rick Astley - Never Gonna Give You Up (Official Music Video)
The link in use is : https://www.youtube.com/watch?v=dQw4w9WgXcQ.

#### About App
Displays Ice OS README.Md's content.
#### SurfWave Fury
The SurfWave Fury App is a JavaScript game created by the Surfing Penguins in 2022. Please find the GitHub link here: https://github.com/iO-Academy/2022-july-keyboard-race.
The application can be opened from the start menu on the Browser OS, to launch the application you need to open the start menu and then click on the SurfWave Fury button. Once the app has been launched you would be able to play the game, view the local leaderboard, and minimise and close the App.
#### Music App
The music application is a React Player media player, set to play https://soundcloud.com/vista-boy/macintosh-plus-floral-shoppe-full-album.
The application can be opened from the start menu on the Browser OS, to launch the music application you need to open the start menu and then click on the Music button. Once the app has been launched you would be able to play and pause the music, and minimise and close. This application makes use of the React Player installed via npm.
#### Random GIFs App
The Random GIFs application display randomly generated GIFs from GIPHY via api. 
# Technologies
The project was made using the following:

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" height="40px" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height="40px" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="40px" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" height="40px" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" height="40px"/>

* npm React Player
* npm React Draggable 
* npm Screenfull

# Setup
To run this project, install locally using npm:

    $ cd ../newDirectoryName 
    $ npm install 
    $ npm start


## React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

    npx create-react-app my-new-typescript-app --template typescript

## To run

Clone the repository with this bash command:

    git clone git@github.com:iO-Academy/2022-jul-ice-os.git

### `cd` into `2022-jul-ice-os`

### `npm install` then `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Bug List
* The feature to minimize and maximize applications on the header has not been implemented
* You will also see any lint errors in the console.
* The ReactPlayer package is causing issues with the display of the window when the splash screen appears when you stop the playlist. 

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
