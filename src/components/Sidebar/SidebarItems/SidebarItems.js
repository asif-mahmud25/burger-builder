import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import style from './SidebarItems.module.css';
import cross from '../../../assets/images/cross.svg';

const SidebarItems = (props) => {

    let sidebarStyle = style.sidebarBg;

    if (props.hidden) {
        sidebarStyle = style.sidebarHidden;
    }

    let orderLink = null;

    let authStat = <li onClick={props.close}><Link to="/auth">Sign Up</Link></li>;

    if (props.isAuth === true) {
        orderLink = <li onClick={props.close}><Link to="/orders">Orders</Link></li>;
        authStat = <li onClick={props.close}><Link to="/logout">Log Out</Link></li>;
    }

    return (
        <div className={sidebarStyle}>
            <div className={style.sidebarBox}>
                <img src={cross} className={style.cross} onClick={props.close} />
                <div>
                    <ul className={style.sidebarList}>
                        <li onClick={props.close}><Link to="/">Home</Link></li>
                        {orderLink}
                        {authStat}
                    </ul>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.idToken != null
    }
}

export default connect(mapStateToProps)(SidebarItems);