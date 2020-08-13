import React from 'react';
import AppLogo from '../../assets/images/burger-logo.png';
import style from './Logo.module.css';

const Logo = () => {
    return(
        <div className={style.Logo}>
            <img src={AppLogo} alt="Burger Builder" />
        </div>
    )
};

export default Logo;