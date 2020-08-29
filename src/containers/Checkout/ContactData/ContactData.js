import React from 'react';
import axios from 'axios';
import Spiner from '../../../components/UI/Spinner/Spinner';
import { withRouter } from 'react-router-dom';

class ContactData extends React.Component {

    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        
        this.setState({loading: true});

        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Asif Mahmud',
                address: {
                    street: 'Malibug 1st Lane',
                    zipCode: '1217',
                    country: 'Bangladesh'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        }
        
        //Posting data to firebase
        axios.post('https://burger-builder-7fbdc.firebaseio.com/orders.json', order)
            .then(resposnse => {
                console.log(resposnse);
                this.setState({loading: false});
                this.props.history.push('/');
            })
            .catch(error => {
                console.log(error);
                this.setState({loading: false});
            });
    }


    render() {

        let form = (
            <form>
                <input type="text" name="name" placeholder="your name"/>
                <input type="email" name="email" placeholder="your email"/>
                <input type="text" name="street" placeholder="street"/>
                <input type="text" name="postal" placeholder="postal code"/>
                <button onClick={this.orderHandler}>Order</button>
            </form>
        );

        if(this.state.loading){
            form = <Spiner />;
        }
        return(
            <div>
                <h3>Enter your data</h3>
                {form}
            </div>
        )
    }
}

export default withRouter(ContactData);