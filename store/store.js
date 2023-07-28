import { configureStore } from "@reduxjs/toolkit";
import tmdbReducer from "./Reducers/tmdbReducer";
export const store = configureStore({
    reducer: {
        tmdbReducer,
    },
});
