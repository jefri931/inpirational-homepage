import { configData } from "../../config"
import axios from "axios"

const API_URL = 'https://api.openweathermap.org/data/2.5/'

export async function getCurrentWeather() {
    const path = `weather?lat=${configData.weather.lat}&lon=${configData.weather.lon}&units=metric&appid=${configData.weather.APIKey}`
    const result = await axios.get(API_URL + path)
    return result.data
}