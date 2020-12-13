import React from 'react';
import style from './OrderSummary.module.css';

const OrderSummary = (props) => {

    const itemsList = Object.keys(props.ingredients)
        .map((igKey) => {
            return <li key={igKey}>{igKey}: {props.ingredients[igKey]}</li>;
        });

    return (
        <div>
            <h3 className={style.OrderHeading}>Your burger is ready to be ordered!</h3>
            <ul className={style.orderList}>
                {itemsList}
            </ul>
            <hr />
            <p className={style.orderPrice}>Total: ${props.totalPrice.toFixed(2)}</p>
            <button className={style.continueBtn} onClick={props.continueOrder}>Continue</button>
            <button className={style.cancelBtn} onClick={props.cancelOrder}>Cancel</button>
        </div>
    )
};

export default OrderSummary;