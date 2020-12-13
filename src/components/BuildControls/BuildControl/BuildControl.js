import React from 'react';
import style from './BuildControl.module.css';

const BuildControl = (props) => {
    return(
        <div className={style.BuildControl}>
            
            <div className={style.ControlLabel}>{props.label}</div>
            
            <button className={style.BuildControlBtnLess}
            onClick={props.removeIngredient}
            disabled={props.disabled}>Less</button>
            
            <button className={style.BuildControlBtnMore} 
            onClick={props.addIngredient}>More</button>
        
        </div>
    )
};

export default BuildControl;