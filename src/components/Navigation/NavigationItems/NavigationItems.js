import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import style from './NavigationItems.module.css';

const NavigationItems = (props) => {
    console.log('from nvigate items isAuth: ' + props.isAuth);
    let orderLink = null;

    let authStat = <li><Link to="/auth">Sign Up</Link></li>;

    if (props.isAuth === true) {
        orderLink = <li><Link to="/orders">Orders</Link></li>;
        authStat = <li><Link to="/logout">Log Out</Link></li>;
    }

    return (
        <ul className={style.NavigationItems}>
            <li><Link to="/">Burger Builder</Link></li>
            {orderLink}
            {authStat}
        </ul>
    )
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.idToken != null
    }
}

export default connect(mapStateToProps)(NavigationItems);