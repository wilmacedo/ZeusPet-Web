import React, { useState, useEffect } from 'react'
import './styles.css';

import Header from '../../components/Header';
import Slogan from '../../components/Slogan';
import Card from '../../components/Card';
import Modal from '../../components/Modal';

import { modalFunctions, defaultConfig, auth } from '../../core';
import { getAllItems } from '../../services';

const Home = () => {
  const [fullData, setFullData] = useState();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [petName, setPetName] = useState('Zeus');
  const [modal, setModal] = useState({
    enable: false,
    type: 'none'
  });

  useEffect(() => {
    getAllItems(setFullData, setLoading);

    for (const item in fullData) {
      let username = fullData[item].username;
      let password = fullData[item].password;

      if (auth(username, password)) {
        for (const pet in fullData[item].pets) {
          let name = fullData[item].pets[pet].name;

          if (name === petName) {
            setData(fullData[item].pets[pet].items);
          }
        }
      } else {
        // Auth error
      }
    }
  }, [fullData]);

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
    <div className="global">
      <Modal modal={modal} fullData={fullData} petName={petName} data={data} loading={loading} />
      <div className="body-container" style={{ overflow: modal.enable ? 'hidden' : 'unset' }} onClick={() => {
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
