import { TaskCreator } from "../TaskCreator/TaskCreator"
import { Weather } from "../../features/weather/Weather"
import { Tasks } from "../../features/task/Tasks"
import { Quote } from "../../features/quote/Quote"
import { loadImagesAsync, selectBackground, nextImage, previousImage } from "../../features/background/backgroundSlice"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Spinner } from "react-bootstrap"
import { TransparentButton } from "../TransparentButton"
import './Wrapper.css'


export function Wrapper() {
    const background = useSelector(selectBackground)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadImagesAsync())
    }, [])

    const handleNextImageClick = () => {
        dispatch(nextImage())
    }

    const handlePreviousImageClick = () => {
        dispatch(previousImage())
    }

    if(background.loading) {
        return <Spinner animation="border" />
    }
    else if(background.failed || !background.images.length) {
        return <h1>Something went wrong! Please refresh!</h1>
    }
    else{
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
}