import React from 'react';
import style from './Sidebar.module.css';
import burger from '../../assets/images/burger.svg';
import bars from '../../assets/images/bars.svg';

const Sidebar = () => {

    return (
        <div className="container">
            <div className={style.Sidebar}>
                <div className={style.brand}>
                    <img src={burger} className={style.logo}/>
                    <h3 className={style.brandName}>Burger Builder</h3>
                </div>
                <img src={bars} className={style.bars}/>
            </div>
        </div>
    )

}

export default Sidebar;