import React from 'react'
import './styles.css';

import Header from '../../components/Header';
import Slogan from '../../components/Slogan';

const Home = () => {
  return (
    <div className="global">
      <Header />
      <Slogan />
    </div>
  );
}

export default Home;
