import { configureStore } from '@reduxjs/toolkit';
import backgroundReducer from '../features/background/backgroundSlice'
import weatherRecuder from '../features/weather/weatherSlice'
import quoteReducer from '../features/quote/quoteSlice'
import tasksReducer from '../features/task/tasksSlice'
export const store = configureStore({
  reducer: {
    background: backgroundReducer,
    weather: weatherRecuder,
    quote: quoteReducer,
    tasks: tasksReducer
  },
});
