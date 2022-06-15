import axios from "axios"

const API_URL = 'https://type.fit/api/'

export async function getQuotes() {
    const path = 'quotes'
    const result = await axios.get(API_URL + path)
    return result.data
}