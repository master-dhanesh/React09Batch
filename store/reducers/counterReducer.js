import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
};

export const counterReducer = createSlice({
    name: "counter",
    initialState,
    reducers: {
        // collects the action
        increment: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { increment } = counterReducer.actions;

export default counterReducer.reducer;
