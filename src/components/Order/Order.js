import React from 'react';

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
            <span key={el.name}>{el.name}: {el.ammout}</span>
        );
    })

    return(
        <div>
            <p>{outputIngredients}</p>
            <p><strong>Price: {props.price.toFixed(2)}</strong></p>
        </div>
    );
}

export default Order;