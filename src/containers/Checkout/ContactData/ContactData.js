import React from 'react';
import axios from 'axios';
import Spiner from '../../../components/UI/Spinner/Spinner';
import { connect } from 'react-redux';
import style from './ContactData.module.css';

class ContactData extends React.Component {

    state = {
        orderForm: {          
            name: '',          
            street: '',
            zipCode: '',
            country: '',              
            email: '',           
            deliveryMethod: 'fastest'
        },

        loading: false,
        inputError: false
    }   

    orderHandler = (event) => {
        event.preventDefault();       

        if(this.state.orderForm.name !== '' && this.state.orderForm.street !== '' &&
            this.state.orderForm.zipCode !== '' && this.state.orderForm.country !== '' && 
            this.state.orderForm.email !== ''){

                this.setState({loading: true, inputError: false});

                const order = {
                    ingredients: this.props.ingredients,
                    price: this.props.price,
                    orderDetails: {...this.state.orderForm}          
                }
                
                //Posting data to firebase
                axios.post('https://burger-builder-7fbdc.firebaseio.com/orders.json?auth=' + this.props.idToken, order)
                    .then(resposnse => {
                        console.log(resposnse);
                        this.setState({loading: false});
                        this.props.onRedirect();
                        this.props.history.push('/');
                    })
                    .catch(error => {
                        console.log(error.message);
                        this.setState({loading: false});
                    });
            }else{
                this.setState({inputError: true});
            }

    }

    inputChangeHandler = (event) => {

        let updatedForm = {
            ...this.state.orderForm
        }

        updatedForm[event.target.name] = event.target.value;
        
        this.setState({orderForm: updatedForm});
    }


    render() {

        let formStatus = <h3>Enter your data</h3>;

        let form = (
            <form onSubmit={this.orderHandler}>
                <input type="text" name="name" placeholder="Your name" value={this.state.orderForm.name} onChange={this.inputChangeHandler}/>
                <input type="email" name="email" placeholder="Your email" value={this.state.orderForm.email} onChange={this.inputChangeHandler}/>
                <input type="text" name="street" placeholder="Street" value={this.state.orderForm.street} onChange={this.inputChangeHandler}/>
                <input type="text" name="zipCode" placeholder="ZIP code" value={this.state.orderForm.zipcode} onChange={this.inputChangeHandler}/>
                <input type="text" name="country" placeholder="Country" value={this.state.orderForm.country} onChange={this.inputChangeHandler}/>
                <select name="deliveryMethod" value={this.state.orderForm.deliveryMethod} onChange={this.inputChangeHandler}>
                    <option value="fastest">Fastest</option>
                    <option value="cheapest">Cheapest</option>
                </select>
                <button type="submit">Order</button>
            </form>
        );

        if(this.state.loading){
            form = <Spiner />;
            formStatus = <h3>Submiting...</h3>;
        }

        let validateMsg = null;

        if(this.state.inputError){
            validateMsg = <h4 className={style.validateMsg}>Please fillup all the fields!</h4>;
        }

        return(
            <div className="container">
                <div className= {style.formStyle}>
                    {formStatus}
                    {validateMsg}
                    {form}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ingredients: state.ingredients,
        price: state.totalPrice,
        idToken: state.auth.idToken 
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onRedirect : () => dispatch({type: 'REDIRECT_AFTER_ORDER'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactData);