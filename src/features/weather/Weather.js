import { useSelector } from "react-redux"
import { selectWeather } from "./weatherSlice"

export function Weather() {
    const { degrees, icon, description } = useSelector(selectWeather)
    return (
        <div style={{
            display: 'flex', justifyContent: 'flex-end', marginBottom: 10
        }}>
            <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="Weather icon" style={{margin: 5 }} />
            <div>
                <h3 style={{ margin: 0, color: 'white' }}>{degrees ? degrees.toFixed(1) : "--"}°C</h3>
                <p style={{ margin: 0, color: 'white'}}>{description}</p>
            </div>
        </div>
    )
}