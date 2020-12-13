import React from 'react';
import style from './NavBar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import logo from '../../../assets/images/burger.svg';

const NavBar = (props) => {
    return (
        <header className="container">
            <div className={style.NavBar}>
                <div className={style.brand}>
                   <img src={logo}/>
                   <h2>Burger Builder</h2>
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </header>
    )
};

export default NavBar;