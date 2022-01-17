import React, { FC } from "react"; 
import classes from './Header.module.scss'
 
const Header: FC = () => { 
    return (
        <header className="header">
            <div className="container">
                <h3 className={classes.header__title}>Movie Finder Assistant</h3>
            </div>
        </header> 
    ) 
} 
 
export default Header;