import React, { useState } from 'react';
import logoimage from '../assets/images/logo.svg';
import nftimage from '../assets/images/NFT.png';
import Booknowpopup from './Booknowpopup'; // 👈 import popup
import { useNavigate } from 'react-router-dom';

const Mobilemenu = () => {
  const navigate = useNavigate();
 

  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false); // 👈 modal state

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
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
         <li>
  <button
    onClick={() => navigate('/nfts')}
    style={{ background: 'none', border: 'none', padding: 0 }}
  >
    <img src={nftimage} alt="NFT" />
  </button>
</li>

          <li><a href="#">Why SaurAI</a></li>
          <li><a href="#">Tokenomics</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        {/* Buy Now triggers popup */}
        <div className="buy-now-wrapper">
          <button className="buy-now-btn" onClick={openPopup}>Buy Now</button>
        </div>
      </div>

      {/* Conditional Popup */}
      {showPopup && <Booknowpopup onClose={closePopup} />}
    </header>
  );
};

export default Mobilemenu;
