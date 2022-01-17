import { FC, useEffect } from "react"; 
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useParams } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import classes from './MovieById.module.scss'
 
const MovieById: FC = () => {
    
    const {movieById} = useTypedSelector(state => state.filmsReducer)
    const params = useParams()
    const {fetchMovieById} = useActions()
    const IMG_BASE_URL: string = 'https://image.tmdb.org/t/p/w500'

    useEffect( () => {
        fetchMovieById(params.id)
    }, [])

    return ( 
        <section className="movie-by-id">
            <div className="container">
                <div className={classes.movie}>
                    <div className={classes.movie__media}>
                        <img style={{borderRadius: 20}} src={IMG_BASE_URL + movieById.poster_path} alt="poster"/>
                    </div>
                    <div className={classes.movie__texbox}>
                        <div className={classes.movie__texbox_top}>
                            <h1 className={classes.movie__title}>{movieById.title}</h1>
                            <span className={classes.movie__date}>{movieById.release_date}</span>
                        </div>
                        <p className={classes.movie__overview}>{movieById.overview}</p>
                        <span className={classes.movie__tagline}>{movieById.tagline}</span>
                    </div>
                </div>
            </div>
        </section> 
    ) 
} 
 
export default MovieById;