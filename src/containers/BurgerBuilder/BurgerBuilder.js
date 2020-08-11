import React from 'react';
import Burger from '../../components/Buger/Burger'
import BuildControls from '../../components/BuildControls/BuildControls';


const INGREDIENT_PRICES =    {
    salad: 0.4,
    cheese: 0.5,
    meat: 1.3,
    bacon: 0.8
};

class BurgerBuilder extends React.Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },

        totalPrice: 4
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = newCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        });
     }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount - 1;
        if(oldCount <= 0){
            return;
        }
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = newCount;
        const priceReduce = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceReduce;
        
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        });
    }

    render () {

        return (
            <React.Fragment>
                <Burger ingredients={this.state.ingredients}/>
                <div>
                    <BuildControls addIngredient={this.addIngredientHandler}
                    removeIngredient={this.removeIngredientHandler}/>
                </div>
            </React.Fragment>
        )
    }
}


export default BurgerBuilder;