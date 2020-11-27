import React, { useState, useEffect } from 'react'
import './styles.css';

import Header from '../../components/Header';
import Slogan from '../../components/Slogan';
import Card from '../../components/Card';
import { modalFunctions } from '../../core';

const modes = [
  {
    name: 'Compras',
    icon: <i className="fas fa-shopping-bag"></i>
  },
  {
    name: 'Histórico',
    icon: <i className="fas fa-history"></i>
  },
  {
    name: 'Estatísticas',
    icon: <i className="far fa-chart-bar"></i>
  }
];

const Home = () => {
  const [modal, setModal] = useState({ enable: false });

  useEffect(() => {
    modalFunctions(modal);
  });

  return (
    <div className="global" onClick={() => {
      if (modal.enable) setModal({ enable: false });
    }}>
      <div className="modal-container">
        <Header />
        <Slogan modal={modal} />
        <div className="cards">
          {modes.map((item, index) => {
            return <Card
              key={index}
              setModal={setModal}
              name={item.name}
              icon={item.icon}
            />
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
