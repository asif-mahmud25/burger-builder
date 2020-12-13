import React from 'react';
import style from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const BuildControls = (props) => {

    const controls = [
        { label: 'Salad', type: 'salad' },
        { label: 'Bacon', type: 'bacon' },
        { label: 'Cheese', type: 'cheese' },
        { label: 'Meat', type: 'meat' },
    ];

    return (
        <div className="container">
            <div className={style.BuildControls}>
                <p className={style.PriceTag}>Current Price: <span style={{color: '#4EB09B'}}>${props.price.toFixed(2)}</span></p>
                {
                    controls.map((el) => {

                        return (
                            <BuildControl key={el.label}
                                label={el.label}
                                addIngredient={() => props.addIngredient(el.type)}
                                removeIngredient={() => props.removeIngredient(el.type)}
                                disabled={props.disabled[el.type]} />
                        );

                    })
                }

                <button className={style.OrderNowBtn} disabled={!props.purchasable} onClick={props.order}>Order Now</button>
            </div>
        </div>
    )
};

export default BuildControls;