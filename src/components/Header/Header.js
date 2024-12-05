import React from 'react';
import './Header.css';
import Logo from '../../assets/Header/logo.png';
import ContactNo from '../../assets/Header/ContactNo.png';
import Download from '../../assets/Header/Download.png';
import User from '../../assets/Header/User.png';

const Header = () => {
  return (
    <header className="header">
      <div className="logoContainer">
        <img alt="img" src={Logo} />
      </div>
      <div className="contactInfo">
        <img src={ContactNo} alt="Yatri Logo" className="ContactNo" />
      </div>
      <div className="download-app">
        <div className="image-container">
          <img src={Download} alt="Download App" className="download" />
        </div>
        <div className="image-container">
          <img src={User} alt="User Profile" className="user" />
        </div>
      </div>

    </header>
  );
};

export default Header;