import React from 'react';
import Burger from '../../Buger/Burger';
import style from './CheckoutSummery.module.css';

const CheckoutSummery = (props) => {
    return(
        <div className={style.CheckoutSummery}>
            <h2>We hope it tastes good!</h2>
            <div>
                <Burger ingredients={props.ingredients} />
            </div>
            <button>CANCEL</button> 
            <button>CONTINUE</button>   
        </div>
    )
}

export default CheckoutSummery;