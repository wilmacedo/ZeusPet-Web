import React, { useState } from 'react';
import './styles.css';

import moment from 'moment';

const Store = () => {
  const [date, setDate] = useState({
    hour: undefined, min: undefined, day: undefined, month: undefined
  });

  const months = [
    'Janeiro', 'Fevereiro', 'Março', 'Maio', 'Abril',
    'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro',
    'Novembro', 'Dezembro'
  ];

  const submitHandler = () => {
    // console.log(typeof date);
  }

  const changeDate = (values) => {
    let {
      hour, min, day, month
    } = values;
    if (hour === undefined) hour = date.hour;
    if (min === undefined) min = date.min;
    if (day === undefined) day = date.day;
    if (month === undefined) month = date.month;

    setDate({ hour, min, day, month });
  }

  const numValid = (value, min, max) => {
    if (!isNaN(value)) {
      let val = parseInt(value);
      if (val > max) val = max;
      if (val < min) val = min;

      return val;
    }
  }

  return (
    <form className="store-form">
      <div className="store-time">
        <input
          className="store-time-text"
          type="number"
          min="0"
          max="24"
          defaultValue={moment().format('HH')}
          onChange={(event) => {
            changeDate({ hour: numValid(event.target.value, 0, 24) });
            console.log(date);
          }}
        />
        <label className="separator">:</label>
        <input
          className="store-time-text"
          type="number"
          min="0"
          max="60"
          defaultValue={moment().format('mm')}
          onChange={(event) => {
            changeDate({ min: numValid(event.target.value, 0, 60) });
            console.log(date);
          }}
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
              return <option key={index} value={index}>{name}</option>
            })}
          </select>
        </div>
      </div>
      <div className="box-form">
        <i className="far fa-keyboard"></i>
        <input
          type="text"
          maxLength={12}
          placeholder="Ração"
          style={{ marginLeft: 15 }}
        />
      </div>
      <div className="box-form">
        <i className="far fa-money-bill-alt"></i>
        <label>R$</label>
        <input
          type="number"
          placeholder="30,00"
          min="0.01"
          step="0.01"
        />
      </div>
      <div className="button-form" onClick={submitHandler}>
        <label>Adicionar</label>
      </div>
    </form>
  );
}

export default Store;