import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
};

export const counterReducer = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state, action) => {
            state.value += action.payload;
        },
        decrement: (state, action) => {
            state.value -= action.payload;
        },
        incrementby5: (state, action) => {
            state.value += 5;
        },
    },
});

export const { increment, decrement, incrementby5 } = counterReducer.actions;

export default counterReducer.reducer;
