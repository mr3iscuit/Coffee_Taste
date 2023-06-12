import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

interface CoffeeState {
    datas: any[];
    loading: string;
    error: string;
    data: any[];
}


const initialState: CoffeeState = {
    datas: [],
    loading: 'pending' || 'fulfilled' || 'rejected',
    error: '',
    data: [],
};


export const getAllcoffee = createAsyncThunk('coffee/getAllcoffee', async () => {
    const response = await axios.get(
        'https://64458406b80f57f581bbe0a4.mockapi.io/coffees/',
    );
    return response.data;
});

export const coffeeSlice = createSlice({
    name: 'coffee',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getAllcoffee.pending, (state, action) => {
            state.loading = 'pending';
        });
        builder.addCase(getAllcoffee.fulfilled, (state, action) => {
            state.datas = action.payload;
            state.loading = 'fulfilled';
        });
        builder.addCase(getAllcoffee.rejected, (state, action) => {
            state.error = action.error.message || '';
            state.loading = 'rejected';
        });
    },
});

export const coffeeReducer = coffeeSlice.reducer;