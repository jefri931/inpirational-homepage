import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getQuotes } from "./quoteAPI";
const initialState = {
    quote: {
        text: '',
        author: '',
        status: 'pending'
    }
}

export const loadQuoteAsync = createAsyncThunk(
    'quote/loadQuoteAsync',
    async () => {
        const quotes = await getQuotes();
        const index = Math.floor(Math.random() * quotes.length)
        const quote = quotes[index]
        return quote
    }
);

export const quoteSlice = createSlice({
    name: 'quote',
    initialState,
    extraReducers: {
        [loadQuoteAsync.pending]: (state) => {
            state.quote.status = 'pending'
        },
        [loadQuoteAsync.fulfilled]: (state, action) => {
            state.quote = {
                ...action.payload,
                status: 'fulfilled'
            }
        },
        [loadQuoteAsync.rejected]: (state) => {
            state.quote.status = 'rejected'
        }
    }
})

export const selectQuote = (state) => state.quote.quote

export default quoteSlice.reducer