import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "@/store/Reducers/movieReducer";
export const store = configureStore({
    reducer: {
        movieReducer,
    },
});
