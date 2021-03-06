import {combineReducers} from "redux";
import { setMoviesReducers, GetMovieDetailsReducers, AddMovieToCart} from "./MoviesReducers";


export const reducers = combineReducers({
    allMovies : setMoviesReducers,
    movie : GetMovieDetailsReducers,
    addToCart : AddMovieToCart,
});

