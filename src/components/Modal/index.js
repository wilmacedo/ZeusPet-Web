import React from 'react';
import './styles.css';

const Modal = (props) => {
    const { modal } = props;

    return (
        <div className="modal-container" style={{ opacity: modal.enable ? 1 : 0 }}>

        </div>
    );
}

export default Modal;