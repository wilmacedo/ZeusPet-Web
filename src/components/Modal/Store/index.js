import React from 'react';
import './styles.css';

import moment from 'moment';

const Store = () => {
  const months = [
    'Janeiro', 'Fevereiro', 'Março', 'Maio', 'Abril',
    'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro',
    'Novembro', 'Dezembro'
  ];

  return (
    <form action="" className="store-form">
      <div className="store-time">
        <input
          className="store-time-text"
          type="number"
          min="0"
          max="24"
          defaultValue={moment().format('HH')}
        />
        <label className="separator">:</label>
        <input
          className="store-time-text"
          type="number"
          min="0"
          max="60"
          defaultValue={moment().format('mm')}
        />
        <div className="store-date">
          <input
            type="number"
            className="store-date-text"
            min="1"
            max="31"
            defaultValue={moment().format('DD')}
            style={{ marginLeft: 2 }}
          />
          <select
            defaultValue={moment().format('MM')}
            className="store-date-text"
          >
            {months.map((name, index) => {
              return <option value={index}>{name}</option>
            })}
          </select>
        </div>
      </div>
    </form>
  );
}

export default Store;