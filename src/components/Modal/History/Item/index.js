import React from 'react';
import './styles.css';

import { formatToMoney } from '../../../../core';

import moment from 'moment';

const Item = (props) => {
  const {
    title,
    value,
    date
  } = props;

  const hour =
    moment(date).format('HH') + ':' + moment(date).format('mm');
  const day =
    moment(date).format('DD') + ' de ' +
    moment(date).format('MMMM').toLowerCase();

  return (
    <div className="item">
      <div className="item-top">
        <label>{title}</label>
        <label className="price">R${formatToMoney(value)}</label>
      </div>
      <div className="item-bottom">
        <i className="far fa-clock"></i>
        <label>{hour + ' - ' + day}</label>
      </div>
    </div>
  );
}

export default Item;