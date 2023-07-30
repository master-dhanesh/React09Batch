import axios from "axios";
import { addmovies, updatepage } from "../Reducers/movieReducer";

export const asyncaddmovies = () => async (dispatch, getState) => {
    console.log("Action GetState: ", getState());
    try {
        const { data } = await axios.get(
            "https://api.themoviedb.org/3/movie/popular?api_key=223667d1239871fc4b6eeef8d0d6def8"
        );
        dispatch(addmovies(data.results));
        dispatch(updatepage(data.page));
    } catch (error) {
        console.log(error);
    }
};
