import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getImages } from "./backgroundAPI";

const initialState = {
    background: {
        currentImageIndex: 0,
        images: [],
        status: 'pending'
    }
}

export const loadImagesAsync = createAsyncThunk(
    'background/loadImages',
    async () => {
      const response = await getImages();
      return response.results.map(i => i.urls.regular);
    }
);

export const backgroundSlice = createSlice({
    name: 'background',
    initialState,
    reducers: {
        nextImage: (state) => {
            if(state.background.images.length - 1 === state.background.currentImageIndex){
                state.background.currentImageIndex = 0
            }
            else {
                state.background.currentImageIndex++
            }
        },
        previousImage: (state) => {
            if(state.background.currentImageIndex === 0){
                state.background.currentImageIndex = state.background.images.length - 1
            }
            else {
                state.background.currentImageIndex--
            }
        }
    },
    extraReducers: {
        [loadImagesAsync.pending]: (state) => {
            state.background.status = 'pending'
        },
        [loadImagesAsync.fulfilled]: (state, action) => {
            state.background.status = 'fulfilled'
            state.background.images = action.payload
        },
        [loadImagesAsync.rejected]: (state) => {
            state.background.status = 'rejected'
        }
      },
})

export const selectBackground = (state) => state.background.background

export const { nextImage, previousImage } = backgroundSlice.actions

export default backgroundSlice.reducer