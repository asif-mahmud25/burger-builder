import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import style from './Burger.module.css';

const Burger = () => {

    return(
        <div className={style.Burger}> 
            <BurgerIngredient type="bread-top"/>
            <BurgerIngredient type="cheese"/>
            <BurgerIngredient type="meat"/>
            <BurgerIngredient type="salad"/>
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default Burger;