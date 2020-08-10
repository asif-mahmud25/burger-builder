import React from 'react';
import Burger from '../../components/Buger/Burger'

class BurgerBuilder extends React.Component {

    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 1,
            meat: 1
        }
    }

    render () {
        return (
            <React.Fragment>
                <Burger ingredients={this.state.ingredients}/>
                <div>
                    Build Controls
                </div>
            </React.Fragment>
        )
    }
}


export default BurgerBuilder;