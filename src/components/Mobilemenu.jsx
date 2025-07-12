import React, { useState } from 'react';
import logoimage from '../assets/images/logo.svg';
import nftimage from '../assets/images/NFT.png';

const Mobilemenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="mobile-header">
      <div className="header-top">
        <img src={logoimage} alt="Logo" className="logo" />
        <button className="menu-toggle" onClick={toggleNavbar}>
          <span className="menu-icon"></span>
        </button>
      </div>

      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          <li><a href="#">About</a></li>
          <li><a href="#"><img src={nftimage}/></a></li>
          <li><a href="#">Why SaurAI</a></li>
          <li><a href="#">Tokenomics</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <div className="buy-now-wrapper">
          <a href="#" className="buy-now-btn">Buy Now</a>
        </div>
      </div>
    </header>
  );
};

export default Mobilemenu;
