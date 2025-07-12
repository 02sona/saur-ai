import React, { useState } from 'react';
import logoimage from '../assets/images/logo.svg';
import nftimage from '../assets/images/NFT.png';
import Mobilemenu from './Mobilemenu';
import { Link } from 'react-router-dom';
import Booknowpopup from './Booknowpopup'; // ✅ Import popup

function Header() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <div className='common-section'>
        <Mobilemenu />

        <div className="header-saction">
          <div className="container">
            <div className="header-saction-inner">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                  <a className="navbar-brand" href="http://localhost:5175/#">
                    <img src={logoimage} alt="LOGO" className="header-logo" draggable="false" />
                  </a>

                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>

                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">About</a>
                      </li>

                      <li className="nav-item">
                        <Link className="nav-link active" to="/nfts">
                          <img src={nftimage} draggable="false" alt="NFT Link" />
                        </Link>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#whysaur">Why SaurAI</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#tokenomics">Tokenomics</a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#saurs-contact">Contact</a>
                      </li>
                    </ul>

                    <div className="button-contact">
                      {/* ✅ Replace Link with a button */}
                      <button
                        id="buy-now-button"
                        className="button-contact"
                        onClick={togglePopup}
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Render Popup if showPopup is true */}
      {showPopup && (
        <div className="popup-overlay">
         {showPopup && (
  <div className="popup-overlay">
    <div className="popup-box">
      <Booknowpopup onClose={togglePopup} />
    </div>
  </div>
)}

        </div>
      )}
    </>
  );
}

export default Header;
