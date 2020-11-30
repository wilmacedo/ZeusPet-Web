import React, { useState, useEffect } from 'react'
import './styles.css';

import Header from '../../components/Header';
import Slogan from '../../components/Slogan';
import Card from '../../components/Card';
import Modal from '../../components/Modal';

import { modalFunctions, defaultConfig } from '../../core';

const Home = () => {
  const [modal, setModal] = useState({
    enable: false,
    type: 'none'
  });

  useEffect(() => {
    modalFunctions(modal);
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        if (modal.enable) {
          setModal({ enable: false, type: 'none' });
        }
      }
    }, false);
  });

  return (
    <div
      className="global">
      <Modal modal={modal} />
      <div className="body-container" onClick={() => {
        if (modal.enable) setModal({ enable: false, type: 'none' });
      }}>
        <Header />
        <Slogan modal={modal} />
        <div className="cards">
          {defaultConfig.map((item, index) => {
            return <Card
              key={index}
              setModal={setModal}
              name={item.name}
              icon={item.icon}
              type={item.type}
            />
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
