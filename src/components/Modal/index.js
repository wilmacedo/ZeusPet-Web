import React from 'react';
import { defaultConfig } from '../../core';
import './styles.css';

const Modal = (props) => {
  const {
    modal,
    fullData,
    petName,
    data,
    loading
  } = props;

  const modalStyle = {
    opacity: modal.enable ? 1 : 0,
  };

  const renderModal = () => {
    if (modal.type !== 'none') {
      for (const item in defaultConfig) {
        if (modal.type === defaultConfig[item].type) {
          if (modal.type === 'store') return defaultConfig[item].component(fullData, petName);
          return defaultConfig[item].component(data, loading);
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