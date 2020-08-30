import React from 'react';
import Order from '../../components/Order/Order';
import axios from 'axios';
import Spinner from '../../components/UI/Spinner/Spinner';


class Orders extends React.Component {

    state = {
        orders: [],
        loading: true
    }

    componentDidMount() {
        let fetchedData = [];
        axios.get('https://burger-builder-7fbdc.firebaseio.com/orders.json')
             .then(response => {
                 for(let i in response.data){
                     fetchedData.push({
                        ...response.data[i],
                        id: i
                     });
                 }

                 this.setState({loading: false, orders: fetchedData});
             })
             .catch(error => {
                 console.log(error);
                 this.setState({loading: false});
             })
    }

    render() {

        let orders = <Spinner />;

        if(this.state.loading === false){
            orders = this.state.orders.map(el => {
                return(
                    <Order ingredients={el.ingredients}
                        price={+el.price}
                        key={el.id}/>
                )
            });
        }

        return(
            <div>
                {orders}
            </div>
        );
    }
}

export default Orders;