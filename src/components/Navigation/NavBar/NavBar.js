import React from 'react';
import style from './NavBar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const NavBar = (props) => {
    return(
        <header className={style.NavBar}>
            <div>SideBar</div>
            <Logo />
            <nav>
               <NavigationItems />
            </nav>
        </header>
    )
};

export default NavBar;