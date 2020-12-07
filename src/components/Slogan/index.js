import React, { useEffect } from 'react';

import './styles.css';
import Dog from '../../assets/dog.png';

const Slogan = (props) => {
  const {
    petName
  } = props;

  useEffect(() => {
    
  }, [petName]);

  return (
    <div className="slogan-container">
      <div className="slogan-text">
        <h1>
          Obtenha controle total do seu melhor amigo!
        </h1>
        <h4>
          Adicione compras, veja gastos, confira datas e muito mais em uma única plataforma!
        </h4>
      </div>
      <img className="slogan-image" src={Dog} alt="Zeus" />
    </div>
  );
}

export default Slogan;