import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
};

export const tmdbReducer = createSlice({
    name: "tmdb",
    initialState,
    reducers: {
        savepopularmovies: (state, action) => {
            state.data = action.payload;
        },
    },
});

export const { savepopularmovies } = tmdbReducer.actions;
export default tmdbReducer.reducer;
