import './GifApplicationContent.css'
import {useEffect} from "react";

const GifApplicationContent = () => {
    useEffect(() => {
        fetch('api.giphy.com/v1/gifs/random?api_key=Glou4K43Jc8huvJDGqjH4mMQY4iG8bZQ&rating=g')
    }, [])

    return (
        <div></div>
    )
}

export default GifApplicationContent