import React from 'react';
import style from './Layout.module.css';

const Layout = (props) => {
    return(
        <React.Fragment>
            <div>
                Toolbar, SideDrawer, BackDrop
            </div>
            <main className={style.content}>
                {props.children}
            </main>
        </React.Fragment>
    )
};

export default Layout;