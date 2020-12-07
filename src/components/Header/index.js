import React, { useEffect } from 'react';
import './styles.css';

import CroppedDog from '../../assets/cropped-dog.png';
import CroppedCat from '../../assets/cropped-cat.png';

const Header = (props) => {
  const {
    petName,
    setPetName
  } = props;

  useEffect(() => {
    let dog = document.getElementById('Zeus');
    let cat = document.getElementById('Cat');

    if (petName === 'Zeus') {
      dog.classList.remove('inactive-first');
      cat.classList.remove('active-second');
    } else {
      dog.classList.add('inactive-first');
      cat.classList.add('active-second');
    }
  }, [petName]);

  return (
    <div className="header-container">
      <span>ZEUS</span>
      <div className="profile-container" onClick={() => {
        setPetName(petName === 'Zeus' ? 'Cat' : 'Zeus');
      }}>
        <div className="profile" id="Zeus">
          <img src={CroppedDog} alt="Zeus" />
        </div>
        <div className="profile" id="Cat">
          <img src={CroppedCat} alt="Cat" />
        </div>
      </div>
    </div>
  )
}

export default Header;