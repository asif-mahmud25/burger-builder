import React from 'react';
import style from './BurgerIngredient.module.css';


const BurgerIngredient = (props) => {
    let ingredient = null;

    if(props.type === 'bread-bottom'){
        ingredient = <div className={style.BreadBottom}></div>
    }else if(props.type === 'bread-top'){
        ingredient = (
            <div className={style.BreadTop}>
                <div className={style.Seeds1}></div>
                <div className={style.Seeds2}></div>
            </div>
        );
    }else if(props.type === 'meat'){
        ingredient = <div className={style.Meat}></div>
    }else if(props.type === 'cheese'){
        ingredient = <div className={style.Cheese}></div>
    }else if(props.type === 'bacon'){
        ingredient = <div className={style.Bacon}></div>
    }else if(props.type === 'salad'){
        ingredient = <div className={style.Salad}></div>
    }else {
        ingredient = null;
    }

    return ingredient;
};

export default BurgerIngredient;