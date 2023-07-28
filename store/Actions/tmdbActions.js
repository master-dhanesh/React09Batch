import axios from "axios";
import { savepopularmovies } from "../Reducers/tmdbReducer";

export const asyncGetPopularMovies = () => async (dispatch, getState) => {
    try {
        const { data } = await axios.get(
            "https://api.themoviedb.org/3/movie/popular?api_key=223667d1239871fc4b6eeef8d0d6def8"
        );
        dispatch(savepopularmovies(data.results));
    } catch (error) {
        console.log(error);
    }
};
