import { TaskCreator } from "../../features/task/TaskCreator/TaskCreator"
import { Weather } from "../../features/weather/Weather"
import { loadCurrentWeatherAsync } from "../../features/weather/weatherSlice"
import { Tasks } from "../../features/task/Tasks"
import { Quote } from "../../features/quote/Quote"
import { loadQuoteAsync, selectQuote } from "../../features/quote/quoteSlice"
import { loadImagesAsync, selectBackground, nextImage, previousImage } from "../../features/background/backgroundSlice"
import { selectWeather } from "../../features/weather/weatherSlice"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Spinner } from "react-bootstrap"
import { TransparentButton } from "../TransparentButton"
import './Wrapper.css'


export function Wrapper() {
    const background = useSelector(selectBackground)
    const weather = useSelector(selectWeather)
    const quote = useSelector(selectQuote)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadImagesAsync())
        dispatch(loadCurrentWeatherAsync())
        dispatch(loadQuoteAsync())
    }, [])

    const handleNextImageClick = () => {
        dispatch(nextImage())
    }

    const handlePreviousImageClick = () => {
        dispatch(previousImage())
    }
    
    if(background.status === 'rejected' || weather.status === 'rejected' || quote.status === 'rejected') {

        return (
            <div>
                <h2 className="text-danger error-text">Something went wrong! Please refresh!</h2>
            </div>
        )
    }
    else if(background.status === 'fulfilled' && weather.status === 'fulfilled' && quote.status === 'fulfilled'){
        const imageUrl = background.images[background.currentImageIndex]

        return (
            <div className="wrapper" style={{
                    backgroundImage: `url(${imageUrl})`, 
                }}>
                <Weather />
                <TaskCreator />
                <div className="row" style={{ marginTop: 10 }}>
                    <div className="col-sm-6 transparent-button">
                        <TransparentButton text="<" onClick={handlePreviousImageClick} ></TransparentButton>
                    </div>
                    <div className="col-sm-6 transparent-button">
                        <TransparentButton text=">" onClick={handleNextImageClick} ></TransparentButton>
                    </div>
                </div>
                <Tasks />
                <Quote />
            </div>
        )
    }

    return <Spinner className="center-spinner" animation="border" />
}