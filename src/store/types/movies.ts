import { IMovieByID } from "../models/IMovieByID";


export interface MoviesState {
    movies: any[];
    movieById: IMovieByID;
    loading: Boolean;
    error: null | string;
}

export enum MoviesActionTypes {
    SET_MOVIES_FETCHING = 'SET_MOVIES_FETCHING',
    FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS',
    FETCH_MOVIES_ERROR = 'FETCH_MOVIES_ERROR',
    SET_MOVIE_BY_ID = 'SET_MOVIE_BY_ID'
}

export interface SetFetchingAction {
    type: MoviesActionTypes.SET_MOVIES_FETCHING;
    payload: boolean;
}

export interface SetFetchingSuccessAction {
    type: MoviesActionTypes.FETCH_MOVIES_SUCCESS;
    payload: any[];
}

export interface SetFetchingErrorAction {
    type: MoviesActionTypes.FETCH_MOVIES_ERROR;
    payload: string | null;
}

export interface SetMovieByIdAction {
    type: MoviesActionTypes.SET_MOVIE_BY_ID;
    payload: IMovieByID
}

export type MoviesAction = SetFetchingAction | SetFetchingSuccessAction | SetFetchingErrorAction | SetMovieByIdAction