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
            <button onClick={props.checkoutCancel}>CANCEL</button> 
            <button onClick={props.checkoutContinue}>CONTINUE</button>   
        </div>
    )
}

export default CheckoutSummary;