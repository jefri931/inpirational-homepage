import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getImages } from "./backgroundAPI";

const initialState = {
    currentImageIndex: 0,
    images: [],
    loading: false,
    failed: false
}

export const loadImagesAsync = createAsyncThunk(
    'background/loadImages',
    async () => {
      const response = await getImages();
      return response;
    }
);

export const backgroundSlice = createSlice({
    name: 'background',
    initialState,
    reducers: {
        nextImage: (state) => {
            if(state.images.length - 1 === state.currentImageIndex){
                state.currentImageIndex = 0
            }
            else {
                state.currentImageIndex++
            }
        },
        previousImage: (state) => {
            if(state.currentImageIndex === 0){
                state.currentImageIndex = state.images.length - 1
            }
            else {
                state.currentImageIndex--
            }
        }
    },
    extraReducers: {
        [loadImagesAsync.pending]: (state) => {
            state.loading = true
            state.failed = false
        },
        [loadImagesAsync.fulfilled]: (state, action) => {
            state.loading = false
            state.failed = false
            state.images = action.payload
        },
        [loadImagesAsync.rejected]: (state) => {
            state.loading = false
            state.failed = true
        }
      },
})

export const selectBackground = (state) => state.background

export const { nextImage, previousImage } = backgroundSlice.actions

export default backgroundSlice.reducer