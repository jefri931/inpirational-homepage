import { configureStore } from '@reduxjs/toolkit';
import backgroundReducer from '../features/background/backgroundSlice'
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    background: backgroundReducer
  },
});
