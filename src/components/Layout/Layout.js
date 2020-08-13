import React from 'react';
import style from './Layout.module.css';
import NavBar from '../Navigation/NavBar/NavBar';

const Layout = (props) => {
    return(
        <React.Fragment>
            <NavBar />
            <main className={style.content}>
                {props.children}
            </main>
        </React.Fragment>
    )
};

export default Layout;