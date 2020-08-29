import React from 'react';
import { Link } from 'react-router-dom';
import style from './NavigationItems.module.css';

const NavigationItems = () => {
    return(
        <ul className={style.NavigationItems}>
            <li><Link to="/">Burger Builder</Link></li>
            <li><Link to="/orders">Orders</Link></li>
        </ul>
    )
};

export default NavigationItems;