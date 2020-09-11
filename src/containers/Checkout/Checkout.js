import React from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import style from './Checkout.module.css';

class Checkout extends React.Component {

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
                ingredients={this.props.ingredients}/>

                <Route path={this.props.match.url + '/contact-data'} 
                component={ContactData}/>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        ingredients: state.ingredients
    }
};

export default connect(mapStateToProps)(Checkout);