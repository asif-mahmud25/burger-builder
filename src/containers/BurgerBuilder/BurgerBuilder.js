import React from 'react';
import Burger from '../../components/Buger/Burger'
import BuildControls from '../../components/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/UI/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import ErrorMessage from '../../components/UI/ErrorMessage/ErrorMessage';
import * as actionTypes from '../../store/actions';
import { connect } from 'react-redux';


class BurgerBuilder extends React.Component {

    state = {
        purchasable: false,
        purchasing: false,
        loading: false,
        error: false
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

    
    setPurchasingHandler = () => {
        this.setState({purchasing: true});
    }

    cancelOrderHandler = () => {
        this.setState({purchasing: false});
    }

    continueOrderHandler = () => {

        const queryParams = [];
        for (let i in this.props.ingredients) {
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.props.ingredients[i]));
        }

        queryParams.push('price=' + this.props.totalPrice);
        const queryString = queryParams.join('&');
        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString
        });
    }

    exitErrorHandler = () => {
        this.setState({error: false});
    }

    render () {

        const disabledInfo = {
            ...this.props.ingredients
        }

        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        let orderSummaryVar = (
            <OrderSummary ingredients={this.props.ingredients}
            cancelOrder={this.cancelOrderHandler}
            continueOrder={this.continueOrderHandler}
            totalPrice={this.props.totalPrice}/>
        );

        if(this.state.loading) {
            orderSummaryVar = <Spinner />;
        }

        if(this.state.error) {
            orderSummaryVar = <ErrorMessage exitError={this.exitErrorHandler}/>;
        }

        return (
            <React.Fragment>
                <Modal show={this.state.purchasing}>
                    {orderSummaryVar}
                </Modal>
                <Burger ingredients={this.props.ingredients}/>
                <div>
                    <BuildControls addIngredient={this.props.onIngredientAdd}
                    removeIngredient={this.props.onIngredientRemove}
                    disabled={disabledInfo}
                    purchasable={this.state.purchasable}
                    order={this.setPurchasingHandler}
                    price={this.props.totalPrice}/>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        ingredients: state.ingredients,
        totalPrice: state.totalPrice
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        onIngredientAdd: (ingredientName) => dispatch({type: actionTypes.ADD_INGREDIENT, ingredientName: ingredientName}),
        onIngredientRemove: (ingredientName) => dispatch({type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingredientName})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);