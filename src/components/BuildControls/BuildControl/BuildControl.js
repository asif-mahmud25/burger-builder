import React from 'react';
import style from './BuildControl.module.css';

const BuildControl = (props) => {
    return(
        <div className={style.BuildControl}>
            
            <div>{props.label}</div>
            
            <button className={style.BuildControlBtn}
            onClick={props.removeIngredient}
            disabled={props.disabled}>Less</button>
            
            <button className={style.BuildControlBtn} 
            onClick={props.addIngredient}>More</button>
        
        </div>
    )
};

export default BuildControl;