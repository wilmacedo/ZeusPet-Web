import React from 'react';
import './styles.css';

const Loader = (props) => {
  const { size } = props;
  return (
    <div
      className="loader"
      style={{ width: size, height: size }}
    />
  );
}

export default Loader;