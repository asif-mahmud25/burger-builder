import React from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

import style from './Checkout.module.css';

class Checkout extends React.Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    }

    render(){
        return(
            <div className={style.Checkout}>
                <CheckoutSummary ingredients={this.state.ingredients}/>
            </div>
        )
    }
}

export default Checkout;