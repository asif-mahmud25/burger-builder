import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import style from './Burger.module.css';

const Burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredients)
        .map((igKey) => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />;
            });
        }).reduce((arr, el) => {
            return arr.concat(el);
        }, []);

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p className={style.AddText}>Start adding ingredients</p>
    }

    return (
        <div className="container">
            <div className={style.BurgerShowcase}>
                <div className={style.Burger}>
                    <BurgerIngredient type="bread-top" />
                    {transformedIngredients}
                    <BurgerIngredient type="bread-bottom" />
                </div>
            </div>
        </div>

    );
};

export default Burger;