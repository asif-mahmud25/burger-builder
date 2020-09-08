import React from 'react';
import style from './NavBar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';

const NavBar = (props) => {
    return(
        <header className={style.NavBar}>
            <div>BURGER BUILDER</div>
            <nav>
               <NavigationItems />
            </nav>
        </header>
    )
};

export default NavBar;