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

 return(
     <div className={style.BuildControls}>
         {
             controls.map((el) => {
                
                return (
                <BuildControl key={el.label} 
                label={el.label} 
                addIngredient={() => props.addIngredient(el.type)}
                removeIngredient={() => props.removeIngredient(el.type)}/>
                );
             
            })
         }
     </div>
 )
};

export default BuildControls;