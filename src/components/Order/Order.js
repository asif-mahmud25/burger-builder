import React from 'react';
import style from './Order.module.css';

const Order = (props) => {

    const ingredients = [];

    for (let i in props.ingredients){
        ingredients.push({
            name: i,
            ammout: props.ingredients[i]
        });
    }

    let outputIngredients = ingredients.map(el => {
        return(
            <span key={el.name}>{el.name}: {el.ammout} </span>
        );
    })

    return(
        <div className={style.order}>
            <p className={style.orderDetails}>{outputIngredients}</p>
            <p className={style.orderPrice}>Price: ${props.price.toFixed(2)}</p>
        </div>
    );
}

export default Order;