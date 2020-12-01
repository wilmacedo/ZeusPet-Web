import React, { useEffect, useState } from 'react';
import './styles.css';

import Item from './Item';
import { getAllItems } from '../../../services';

import Loader from '../../Loader';

const History = () => {
  const [data, setData] = useState();
  const [searchData, setSearchData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAllItems(setData, setLoading, true);
  }, [loading]);

  const filterItems = (value) => {
    const textData = value.target.value.toLowerCase();
    const filteredItems = data.filter(item => item.title.toLowerCase().includes(textData));

    setSearchData(filteredItems);
  }

  const renderItems = () => {
    let tempData = data;
    if (searchData !== undefined) tempData = searchData;

    return loading ?
      tempData.map((item, index) => {
        return <Item
          key={index}
          title={item.title}
          value={item.value}
          date={item.date}
        />
      })
      :
      <div className="loader-center">
        <Loader size={40} />
      </div>;
  }

  return (
    <div className="history-container">
      <div className="search-container">
        <div className="search-title">
          <label>Ache suas</label><br></br>
          <label><strong>Compras</strong></label>
        </div>
        <div className="search-bar">
          <i className="fas fa-search"></i>
          <input
            type="text"
            placeholder="Procure pelo item"
            onChange={(text) => filterItems(text)}
          />
        </div>
      </div>
      <div className="history-items">
        {renderItems()}
      </div>
    </div>
  );
}

export default History;