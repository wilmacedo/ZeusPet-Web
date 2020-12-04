import React from 'react';
import './styles.css';

const Header = () => {
  return (
    <div className="header-container">
      <span>ZEUS</span>
      <div className="profile-container">
        <div className="profile">
          <img src="https://previews.123rf.com/images/iamcitrus/iamcitrus1601/iamcitrus160100028/50909996-cartoon-animal-head-icon-cat-face-avatar-for-profile-of-social-networks-hand-drawn-design-.jpg" />
        </div>
        <div className="profile">
          <img src="https://i.pinimg.com/originals/78/54/84/7854843699c1893928012a442386a129.jpg" />
        </div>
      </div>
    </div>
  )
}

export default Header;