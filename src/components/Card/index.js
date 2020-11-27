import React, { useEffect } from 'react';
import './styles.css';

const Card = (props) => {
  const {
    name,
    icon,
    setModal
  } = props;

  return (
    <div className="card" onClick={() => setModal({ enable: true })}>
      <div className="card-icon">{icon}</div>
      <span className="card-title">{name}</span>
    </div>
  );
}

export default Card;