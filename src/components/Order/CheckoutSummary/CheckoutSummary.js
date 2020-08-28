import React from 'react';
import Burger from '../../Buger/Burger';
import style from './CheckoutSummary.module.css';

const CheckoutSummary = (props) => {
    return(
        <div className={style.CheckoutSummary}>
            <h2>We hope it tastes good!</h2>
            <div>
                <Burger ingredients={props.ingredients} />
            </div>
            <button>CANCEL</button> 
            <button>CONTINUE</button>   
        </div>
    )
}

export default CheckoutSummary;