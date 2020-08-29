import React from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import { Route } from 'react-router-dom';

import style from './Checkout.module.css';

class Checkout extends React.Component {

    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 1,
            meat: 1
        },
        totalPrice: 0
    }

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;
        for (let param of query.entries()) {
            // ['salad', '1']
            if(param[0] === 'price'){
                price = param[1];
            }else{

                ingredients[param[0]] = +param[1];
            }
        }
        this.setState({ingredients: ingredients, totalPrice: price});
    }

    checkoutCancelHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinueHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render(){
        return(
            <div className={style.Checkout}>
                <CheckoutSummary
                checkoutCancel={this.checkoutCancelHandler}
                checkoutContinue={this.checkoutContinueHandler} 
                ingredients={this.state.ingredients}/>

                <Route path={this.props.match.url + '/contact-data'} 
                render={() => (<ContactData ingredients={this.state.ingredients}
                                price={this.state.totalPrice}/>)}/>
            </div>
        )
    }
}

export default Checkout;