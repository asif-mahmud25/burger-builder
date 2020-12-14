import React, {useState} from 'react';
import style from './Sidebar.module.css';
import burger from '../../assets/images/burger.svg';
import bars from '../../assets/images/bars.svg';
import SidebarItems from './SidebarItems/SidebarItems'

const Sidebar = () => {

    const [sidebarHide, setSidebarHide] = useState(true);

    let sidebarShow = () => {
        if (sidebarHide) {
            setSidebarHide(false);
        }
    }

    let sidebarClose = () => {
        if (sidebarHide === false) {
            setSidebarHide(true);
        }
    }

    return (
        <React.Fragment>
            <SidebarItems hidden={sidebarHide}
                close={sidebarClose}/>
            <div className="container">
                <div className={style.Sidebar}>
                    <div className={style.brand}>
                        <img src={burger} className={style.logo} alt=""/>
                        <h3 className={style.brandName}>Burger Builder</h3>
                    </div>
                    <img src={bars} className={style.bars} onClick={sidebarShow} alt="Menu"/>
                </div>
            </div>
        </React.Fragment>
    )

}

export default Sidebar;