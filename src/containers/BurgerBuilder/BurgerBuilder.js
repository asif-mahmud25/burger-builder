import React from 'react';
import Burger from '../../components/Buger/Burger'
import BuildControls from '../../components/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/UI/OrderSummary/OrderSummary';


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

        totalPrice: 4,
        purchasable: false,
        purchasing: false
    }

    updatePurchasable (ingredients){
        const igCount = Object.keys(ingredients)
        .map((igKey)=>{
            return ingredients[igKey];
        });

        let sum = 0;

        igCount.forEach((el)=>{
            sum = sum + el;
        });

        this.setState({purchasable: sum > 1});
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

        this.updatePurchasable(updatedIngredients);
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

        this.updatePurchasable(updatedIngredients);
    }

    setPurchasingHandler = () => {
        this.setState({purchasing: true});
    }

    cancelOrderHandler = () => {
        this.setState({purchasing: false});
    }

    render () {

        const disabledInfo = {
            ...this.state.ingredients
        }

        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return (
            <React.Fragment>
                <Modal show={this.state.purchasing}>
                    <OrderSummary ingredients={this.state.ingredients}
                    cancelOrder={this.cancelOrderHandler}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <div>
                    <BuildControls addIngredient={this.addIngredientHandler}
                    removeIngredient={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    purchasable={this.state.purchasable}
                    order={this.setPurchasingHandler}
                    price={this.state.totalPrice}/>
                </div>
            </React.Fragment>
        )
    }
}


export default BurgerBuilder;