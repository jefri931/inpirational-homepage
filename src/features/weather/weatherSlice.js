import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCurrentWeather } from "./weatherAPI";

const initialState = {
    weather: {
        icon: '',
        degrees: null,
        description: 'Not Loaded',
        status: 'pending'
    }
}

export const loadCurrentWeatherAsync = createAsyncThunk(
    'weather/loadCurrentWeather',
    async () => {
        const response = await getCurrentWeather();
        const weather = response.weather[0]
        const degrees = response.main.temp
        return { icon: weather.icon, description: weather.main, degrees };
    }
);

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    extraReducers: {
        [loadCurrentWeatherAsync.pending]: (state) => {
            state.weather.status = 'pending'
        },
        [loadCurrentWeatherAsync.fulfilled]: (state, action) => {
            state.weather = {
                ...action.payload,
                status: 'fulfilled'
            }
        },
        [loadCurrentWeatherAsync.rejected]: (state) => {
            state.weather.status = 'rejected'
        },
    }
})

export const selectWeather = (state) => state.weather.weather

export default weatherSlice.reducer