import React from 'react';
import './styles.css';

const Stats = () => {
  const days = [
    'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'
  ];

  const renderBars = () => {
    let maxHeight = 100;

    return days.map((item, index) => {
      const height = Math.random() * maxHeight;
      return (
        <div className="bar" key={index} style={{ height }}>
          <label>{item}</label>
        </div>
      );
    })
  }

  const InfoCard = (props) => {
    const {
      type,
      value
    } = props;

    return (
      <div className="info-card">
        <div className="info-card-icon">
          {
            type === 'money' ?
              <i className="far fa-money-bill-alt"></i> :
              <i className="far fa-calendar"></i>
          }
        </div>
        <label>{type === 'money' ? 'R$ ' : ''}<strong>{value}</strong></label>
        <label className="info-card-desc">
          {type === 'money' ? 'Total semanal' : 'Dia de maior valor'}
        </label>
      </div>
    );
  }

  return (
    <div className="stats-container">
      <div className="chart-container">
        <div className="stats-title">
          <label>Veja a sua</label><br></br>
          <label><strong>Atividades</strong></label>
        </div>
        <label className="stats-type">Gasto Semanal</label>
        <div className="chart">
          {renderBars()}
        </div>
      </div>
      <div className="info-cards">
        <InfoCard type="money" value="142,90" />
        <InfoCard type="day" value="Terça" />
      </div>
    </div>
  );
}

export default Stats;