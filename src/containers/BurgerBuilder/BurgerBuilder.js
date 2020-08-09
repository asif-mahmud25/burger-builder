import React from 'react';
import Burger from '../../components/Buger/Burger'

class BurgerBuilder extends React.Component {

    render () {
        return (
            <React.Fragment>
                <Burger />
                <div>
                    Build Controls
                </div>
            </React.Fragment>
        )
    }
}


export default BurgerBuilder;