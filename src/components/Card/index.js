import React from 'react';
import './styles.css';

const Card = (props) => {
  const {
    name,
    icon,
    modal,
    setModal
  } = props;

  return (
    <div className="card" onClick={() => setModal({ enable: !modal.enable})}>
      <div className="card-icon">{icon}</div>
      <span className="card-title">{name}</span>
    </div>
  );
}

export default Card;