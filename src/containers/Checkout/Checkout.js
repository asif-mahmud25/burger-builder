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

        let dataForm = (
            <Route path={this.props.match.url + '/contact-data'} 
                component={ContactData}/>
        );

        if(this.props.isAuth === false){
            dataForm = <p>Please Log In to Place Order!</p>
        }
        return(
            <div className={style.Checkout}>
                <CheckoutSummary
                checkoutCancel={this.checkoutCancelHandler}
                checkoutContinue={this.checkoutContinueHandler} 
                ingredients={this.props.ingredients}/>
                {dataForm}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        ingredients: state.ingredients,
        isAuth: state.auth.idToken !== null
    }
};

export default connect(mapStateToProps)(Checkout);