import axios, { AxiosResponse } from "axios";

//TMDB API
const API_KEY: string = 'api_key=4e999d34d86c060126d18c6c6a05aa5b'
const BASE_URL: string = 'https://api.themoviedb.org/3'
const SEARCH_URL: string = BASE_URL + '/search/movie?' + API_KEY + '&query=';

export default class FetchService {
    static async getMovies(query: string): Promise<AxiosResponse> {
        return axios.get(SEARCH_URL+query)
    }

    static async getMovieById(id: string): Promise<AxiosResponse> {
        return axios.get(`${BASE_URL}/movie/${id}?${API_KEY}`)
    }
}

