import React from 'react';

import './styles.css';
import Dog from '../../assets/dog.png';

const Content = (props) => {
  const { modal } = props;

  return (
    <div className="slogan-container">
      <div className="slogan-text">
        <h1>
          Obtenha controle total do seu melhor amigo!
        </h1>
        <h4>
          Adicione compras, veja gastos, confira datas emuito mais em uma única, plataforma!
        </h4>
      </div>
      <img className="slogan-image" src={Dog} alt="Zeus" style={{ opacity: modal.enable ? 0.2 : 1 }} />
    </div>
  );
}

export default Content;