import React from 'react';
import style from './NavigationItems.module.css';

const NavigationItems = () => {
    return(
        <ul className={style.NavigationItems}>
            <li><a href="/">Burger Builder</a></li>
            <li><a href="/">Checkout</a></li>
        </ul>
    )
};

export default NavigationItems;