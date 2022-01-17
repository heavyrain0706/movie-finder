import { FC } from "react"; 
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Error from "../Error/Error";
import Movie from "../Movie/Movie";
import Search from "../Search/Search";
import classes from './Movies.module.scss'
 
const Movies: FC = () => { 

    const {movies, error} = useTypedSelector(state => state.filmsReducer)

    if(error) {
        return (
            <Error error={error}/>
        )
    }

    return (
        <>
            <Search />
            <section className="movies">
                <div className="container">
                    <div className={classes.moviesBody}>
                        {
                            movies?.map(movie =>
                                <Movie key={movie.id}
                                    id={movie.id}
                                    title={movie.title}
                                    date={movie.release_date}
                                    poster={movie.poster_path} />
                            )
                        }
                    </div>
                </div>
            </section>
        </>
    ) 
} 
 
export default Movies;