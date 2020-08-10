import React from 'react';
import style from './BuildControl.module.css';

const BuildControl = (props) => {
    return(
        <div className={style.BuildControl}>
            <div>{props.label}</div>
            <button className={style.BuildControlBtn}>Less</button>
            <button className={style.BuildControlBtn} onClick={props.added}>More</button>
        </div>
    )
};

export default BuildControl;