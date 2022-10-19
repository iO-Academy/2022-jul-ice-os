import './GifApplicationContent.css'
import {useEffect, useState} from "react";

const GifApplicationContent = () => {

    const [storedGifData, setStoredGifData] = useState()

    const getGifData = async () => {
        let fetchUrl = 'https://api.giphy.com/v1/gifs/random?api_key=Glou4K43Jc8huvJDGqjH4mMQY4iG8bZQ&rating=g'
        const gifData = await fetch(fetchUrl);
        const jsonGifData = await gifData.json()
        console.log(jsonGifData)
        await setStoredGifData(jsonGifData.data.url)
        await console.log(storedGifData)
    }

    useEffect(() => {
        getGifData()
    }, [])


    return (
        <div>Hello</div>
    )
}

export default GifApplicationContent