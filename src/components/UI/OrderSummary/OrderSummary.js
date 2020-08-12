import React from 'react';

const OrderSummary = (props) => {

    const itemsList = Object.keys(props.ingredients)
        .map((igKey)=>{
            return <li key={igKey}>{igKey}: {props.ingredients[igKey]}</li>;
        });
    
    return(
        <div>
            <h3>Your burger is ready to be ordered!</h3>
        <ul>
            {itemsList}
        </ul>
        <button>CONTINUE</button>
        <button onClick={props.cancelOrder}>CANCEL</button>
        </div>
        
    )
};

export default OrderSummary;