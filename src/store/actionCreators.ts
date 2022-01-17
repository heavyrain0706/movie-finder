import { AppDispatch } from '.';
import FetchService from '../API/FetchService';
import { IMovieByID } from '../types/IMovieByID';
import { SetFetchingAction, SetFetchingSuccessAction, SetFetchingErrorAction, SetMovieByIdAction  } from '../types/movies';
import { MoviesActionTypes } from '../types/movies';


export const MoviesActionCreators = {
    setFethcing: (payload: boolean): SetFetchingAction => ({type: MoviesActionTypes.SET_MOVIES_FETCHING, payload}),
    fetchingSuccess: (payload: any[]): SetFetchingSuccessAction => ({type: MoviesActionTypes.FETCH_MOVIES_SUCCESS, payload}),
    fetchingError: (payload: string | null): SetFetchingErrorAction => ({type: MoviesActionTypes.FETCH_MOVIES_ERROR, payload}),
    setMovieById: (payload: IMovieByID): SetMovieByIdAction => ({type: MoviesActionTypes.SET_MOVIE_BY_ID, payload}),

    fetchMovies: (query: string) => async (dispatch: AppDispatch) => {
        try{
            dispatch(MoviesActionCreators.setFethcing(true))
            const response = await FetchService.getMovies(query)
            dispatch(MoviesActionCreators.fetchingSuccess(response.data.results))
            dispatch(MoviesActionCreators.fetchingError(null))
        } catch (e) {
            let result = (e as Error).message;
            dispatch(MoviesActionCreators.fetchingError(result))
        }
    },
    fetchMovieById: (id: string | undefined) => async (dispatch: AppDispatch) => {
        try{
            dispatch(MoviesActionCreators.setFethcing(true))
            const response = await FetchService.getMovieById(id)
            dispatch(MoviesActionCreators.setMovieById(response.data))
            dispatch(MoviesActionCreators.fetchingError(null))
        } catch (e) {
            let result = (e as Error).message;
            dispatch(MoviesActionCreators.fetchingError(result))
        }
    }
}