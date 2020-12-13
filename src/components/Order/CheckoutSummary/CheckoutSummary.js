import React from 'react';
import Burger from '../../Buger/Burger';
import style from './CheckoutSummary.module.css';

const CheckoutSummary = (props) => {
    return (
        <div>
            <div>
                <Burger ingredients={props.ingredients} />
            </div>
            <h2 className={style.checkoutHeading}>We hope it tastes good!</h2>
            <div className={style.btnContainer}>
                <button className={style.cancelBtn} onClick={props.checkoutCancel}>Cancel</button>
                <button className={style.continueBtn} onClick={props.checkoutContinue}>Continue</button>
            </div>
        </div>
    )
}

export default CheckoutSummary;