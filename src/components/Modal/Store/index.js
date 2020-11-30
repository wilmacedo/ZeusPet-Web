import React, { useState } from 'react';
import './styles.css';

import { sendNewData } from '../../../services';

import Loader from '../../Loader';

import moment from 'moment';
import 'moment/locale/pt-br';
moment.locale('pt-br');

const Store = () => {
  let defaultWidth = 160;
  const [date, setDate] = useState({
    hour: undefined, min: undefined, day: undefined, month: undefined
  });
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();

  const [width, setWidth] = useState(defaultWidth);
  const [buttonText, setButtonText] = useState(<label>Adicionar</label>);

  const months = [
    'Janeiro', 'Fevereiro', 'Março', 'Maio', 'Abril',
    'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro',
    'Novembro', 'Dezembro'
  ];

  const submitHandler = () => {
    if (title === undefined) {
      document.getElementById('box-form-title').classList.add('empty');
    }
    if (price === undefined) {
      document.getElementById('box-form-price').classList.add('empty');
    }

    if (title !== undefined && price !== undefined) {
      let {
        hour, min, day, month
      } = date;

      const formattedDate = moment();
      if (hour !== undefined) formattedDate.set('hour', hour);
      if (min !== undefined) formattedDate.set('minute', min);
      if (day !== undefined) formattedDate.set('date', day);
      if (month !== undefined) formattedDate.set('month', month);

      const formattedTitle = title.charAt(0).toUpperCase() + title.slice(1);

      setButtonText(<Loader size={25} />);
      setWidth(100);

      sendNewData(formattedTitle, price, formattedDate, setButtonText);
    }
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
            onChange={(event) => {
              changeDate({ day: numValid(event.target.value, 1, 31) });
            }}
          />
          <select
            defaultValue={moment().format('MM')}
            className="store-date-text"
            onChange={(event) => setDate({ month: parseInt(event.target.value) })}
          >
            {months.map((name, index) => {
              return <option key={index} value={index + 1}>{name}</option>
            })}
          </select>
        </div>
      </div>
      <div id="box-form-title" className="box-form">
        <i className="far fa-keyboard"></i>
        <input
          type="text"
          maxLength={12}
          placeholder="Ração"
          style={{ marginLeft: 15 }}
          onChange={(event) => {
            let element = document.getElementById('box-form-title');
            if (element.classList.contains('empty')) {
              element.classList.remove('empty');
            }

            setTitle(event.target.value);
          }}
        />
      </div>
      <div id="box-form-price" className="box-form">
        <i className="far fa-money-bill-alt"></i>
        <label>R$</label>
        <input
          type="number"
          placeholder="30,00"
          min="0.01"
          step="0.01"
          onChange={(event) => {
            let element = document.getElementById('box-form-price');
            if (element.classList.contains('empty')) {
              element.classList.remove('empty');
            }

            setPrice(parseFloat(event.target.value))
          }}
        />
      </div>
      <div
        className="button-form"
        style={{ width }}
        onClick={submitHandler}
      >
        {buttonText}
      </div>
    </form>
  );
}

export default Store;