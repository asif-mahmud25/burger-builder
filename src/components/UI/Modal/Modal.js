import React from 'react';
import style from './Modal.module.css';

const Modal = (props) => {

    let modalStyle;
    if(props.show){
        modalStyle = style.TransBgShow;
    }else {
        modalStyle = style.TransBgHide;
    }

    return(
        <div className={modalStyle}>
            <div className={style.Modal}>
                {props.children}
            </div>
        </div>
   )
};

export default Modal;