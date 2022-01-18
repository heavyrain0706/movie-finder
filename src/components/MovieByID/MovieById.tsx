import { FC, useEffect } from "react"; 
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useNavigate, useParams } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import classes from './MovieById.module.scss'
 
const MovieById: FC = () => {
    
    const {movieById} = useTypedSelector(state => state.filmsReducer)
    const params = useParams()
    const {fetchMovieById} = useActions()
    const navigate = useNavigate()
    const IMG_BASE_URL: string = 'https://image.tmdb.org/t/p/w500'

    useEffect( () => {
        if(params.id) {
            fetchMovieById(params.id)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return ( 
        <section className="movie-by-id">
            <div className="container">
                <button className={classes.goBackBtn} onClick={() => navigate('/')}>
                    <svg width={16} height={16} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="long-arrow-alt-left" className="svg-inline--fa fa-long-arrow-alt-left fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"></path></svg>
                    Вернуться к поиску
                </button>
                <div className={classes.movie}>
                    <div className={classes.movie__media}>
                        <img style={{ borderRadius: 20 }} src={IMG_BASE_URL + movieById.poster_path} alt="poster" />
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