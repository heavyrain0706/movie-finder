import React, { FC } from "react"; 
import classes from './Error.module.scss'
 
interface ErrorProps {
    error: string
}

const Error: FC<ErrorProps> = ({error}) => { 
    return ( 
        <section className="error">
            <div className="container">
                <h1 className={classes.moviesError}>{error}</h1>
            </div>
        </section>
    ) 
} 
 
export default Error;