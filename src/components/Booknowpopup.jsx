import React from "react";
import "./Booknowpopup.css";

const Booknowpopup = ({ onClose }) => {
  return (
    <div className="modal-content">
      {/* ✅ Close icon in top-right */}
      <button className="modal-close-icon" onClick={onClose}>×</button>

      <div className="modal-header-heading">
        <h5 id="solToSauraiConversion-title">1 SaurAI = $0.001</h5>
      </div>

      {/* Swap UI */}
      <div id="swapContainer">
        <div className="outer-box" id="solColumn">
          <label htmlFor="solValue" className="form-label">From</label>
          <div className="form-group">
            <div className="input-wrapper">
              <div className="input-inner">
                <div className="currency-label">
                  <img src="https://saurs.ai/asset/images/solana-sol-logo.png" alt="SOL" className="currency-logo" />
                  <span>SOL</span>
                </div>
                <input type="number" id="solValue" className="form-input form-input-count" placeholder="0.0" min="0" step="0.00000001" />
                <span id="solValueUsdt">~$0.000</span>
              </div>
            </div>
          </div>
        </div>

        <div className="form-group swap-arrow-wrapper">
          <div id="swapArrow"></div>
        </div>

        <div className="outer-box" id="sauraiColumn">
          <label htmlFor="sauraiAmount" className="form-label">To</label>
          <div className="form-group">
            <div className="input-wrapper">
              <div className="input-inner">
                <div className="currency-label">
                  <img src="https://saurs.ai/asset/images/logo.svg" alt="$SAURAI" className="saurai-logo" />
                </div>
                <input type="number" id="sauraiAmount" className="form-input form-input-count" placeholder="0.0" min="0" step="0.01" />
                <span id="sauraiValueUsdt">~$0</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Email entry */}
      <div id="conversionColumn">
        <div className="outer-box">
          <div className="form-group">
            <input type="email" id="emailInput" className="form-input-email" placeholder="Enter your email address" />
          </div>
          <div className="conversion-display">
            <span id="solToSauraiConversion">*</span>
            <span id="solToSauraiConversion1">
              Share your email to enter our lucky draw and stand a chance to win exclusive NFTs from The SaurAI Labs
            </span>
          </div>
        </div>
      </div>

      {/* Connect wallet button only */}
      <div className="modal-buttons">
        <button className="btn btn-primary" id="connectWalletButton">
          Connect Wallet
        </button>
      </div>
    </div>
  );
};

export default Booknowpopup;
