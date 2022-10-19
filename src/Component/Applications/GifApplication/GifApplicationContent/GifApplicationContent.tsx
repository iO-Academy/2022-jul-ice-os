import './GifApplicationContent.css'
import {useEffect, useState} from "react";
import giphyLogo from '../Images/Poweredby_100px-White_VertLogo.png'

const GifApplicationContent = () => {

    const [storedGifData, setStoredGifData] = useState("")

    const getGifData = async () => {
        let fetchUrl = 'https://api.giphy.com/v1/gifs/random?api_key=Glou4K43Jc8huvJDGqjH4mMQY4iG8bZQ&rating=g'
        const gifData = await fetch(fetchUrl);
        const jsonGifData = await gifData.json()
        setStoredGifData(jsonGifData.data.images.original.url)
    }

    useEffect(() => {
        getGifData()
    }, [])


    return (
        <div className={"gifDisplayContainer"}>
            <button className={"gifButton"} onClick={getGifData}>Next Gif Please :)</button>
            <img className={"gifDisplay"} src={storedGifData} alt={"a trending giphy"}/>
            <img className={"giphyLogo"} src={giphyLogo} alt={"giphyLogo"} />
        </div>

    )
}

export default GifApplicationContent