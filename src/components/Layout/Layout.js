import React from 'react';
import style from './Layout.module.css';
import NavBar from '../Navigation/NavBar/NavBar';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';

const Layout = (props) => {
    return(
        <React.Fragment>
            <NavBar />
            <Sidebar />
            <main className={style.content}>
                {props.children}
            </main>
            <Footer />
        </React.Fragment>
    )
};

export default Layout;