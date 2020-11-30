import React from 'react';
import { defaultConfig } from '../../core';
import './styles.css';

const Modal = (props) => {
  const { modal } = props;

  const modalStyle = {
    width: modal.enable ? 510 : 0,
    height: modal.enable ? 580 : 0,
  };

  const renderModal = () => {
    if (modal.type !== 'none') {
      for (const item in defaultConfig) {
        if (modal.type === defaultConfig[item].type) {
          return defaultConfig[item].component;
        }
      }
    }
  }

  return (
    <div className="modal-container" style={modalStyle} >
      {renderModal()}
    </div>
  );
}

export default Modal;