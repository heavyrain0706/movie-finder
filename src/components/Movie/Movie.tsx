import { FC } from "react";
import { useNavigate } from "react-router-dom";
import classes from './Movie.module.scss'

interface MovieProps {
    title: string;
    date: string;
    poster: string;
    id: number;
}

const Movie: FC<MovieProps> = ({title, poster, date, id}) => { 

    const navigation = useNavigate()
    const IMG_BASE_URL: string = 'https://image.tmdb.org/t/p/w500'

    return ( 
        <div className={classes.movie}>
            <h1 className={classes.movieTitle}>{title}</h1>
            <img className={classes.movieImage}
                    width="200"
                    alt={`The movie titled: ${title}`}
                    src={IMG_BASE_URL + poster}
            />
            <p className={classes.movieYear}>{date}</p>
            <button className={classes.detailsBtn} onClick={() => navigation(`/movies/${id}/${title}`)}>Подробней</button>
        </div>
    ) 
} 
 
export default Movie;
