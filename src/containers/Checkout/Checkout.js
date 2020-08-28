import React from 'react';
import CheckoutSummery from '../../components/Order/CheckoutSummery/CheckoutSummery';

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
                <CheckoutSummery ingredients={this.state.ingredients}/>
            </div>
        )
    }
}

export default Checkout;