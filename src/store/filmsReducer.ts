import { IMovieByID } from './models/IMovieByID';
import { MoviesState, MoviesAction, MoviesActionTypes } from './types/movies';



const initialState: MoviesState = {
    movies: [],
    movieById: {} as IMovieByID,
    loading: false,
    error: null
}

export const filmsReducer = (state = initialState, action: MoviesAction): MoviesState => {
    switch (action.type) {
        case MoviesActionTypes.SET_MOVIES_FETCHING:
            return { ...state, loading: true }
        case MoviesActionTypes.FETCH_MOVIES_SUCCESS:
            return { ...state, loading: false, movies: action.payload }
        case MoviesActionTypes.FETCH_MOVIES_ERROR:
            return { ...state, loading: false, error: action.payload }
        case MoviesActionTypes.SET_MOVIE_BY_ID:
            return { ...state, movieById: action.payload}
        default:
            return state
    }
}