import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: [],
    page: 0,
};

export const movieReducer = createSlice({
    name: "tmdb",
    initialState,
    reducers: {
        addmovies: (state, actions) => {
            state.movies = actions.payload;
        },
        updatepage: (state, actions) => {
            state.page = actions.payload;
        },
    },
});

export default movieReducer.reducer;
export const { addmovies, updatepage } = movieReducer.actions;
