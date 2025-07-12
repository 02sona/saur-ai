import React from 'react'
import Footer from './Footer';
import greenicon from '../assets/images/green-icon.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function Fourthsection() {


useEffect(() => {
  AOS.init({
    duration: 1000, // animation duration in ms
    once: true,     // animation should happen only once
  });
}, []);


   return (
      <>
        <div  className='common-section'>
         <div className="nfts-saction-three-box-five">
            <div data-aos="fade-up" className="container">
               <h2  className="aos-init aos-animate">HOW TO BUY </h2>
               <div className="row-five-section">
                  <div className="col-md-6">
                     <div className="nfts-saction-three-box-five-box">
                        <h3 data-aos="fade-up" className="nfts-saction-three-box-five-heading">$SaurAI – Presale Guide</h3>
                        <ul className='border-section'>
                           <li data-aos="fade-up" className="aos-init aos-animate">
                              <span><img src={greenicon} draggable="false" />Step 1: Set Up Your Wallet</span>
                              <p>Download and install Phantom Wallet or any Solana (SOL) compatible wallet</p>
                              <p>Create a wallet, securely back up your recovery phrase, and fund it with Solana</p>
                           </li>
                           <li data-aos="fade-up" className="aos-init aos-animate">
                              <span><img src={greenicon} draggable="false" />Step 2: Participate in Presale</span>
                              <p>Click the 'Buy Now' button at the top right corner of this page</p>
                              <p>Select 'Connect Wallet' and choose your preferred wallet provider</p>
                           </li>
                           <li data-aos="fade-up" className="aos-init">
                              <span><img src={greenicon} draggable="false" /> Step 3: Enter Purchase Amount</span>
                              <p>Input the amount of SOL you wish to exchange for $SAURAI</p>
                              <p>Review the transaction details to ensure accuracy </p>
                           </li>
                           <li data-aos="fade-up" className="aos-init">
                              <span><img src={greenicon} draggable="false" /> Step 4: Confirm Your Purchase</span>
                              <p>Click 'Swap' and approve the transaction in your wallet </p>
                              <p>Secure your place in the Saurverse and become part of the most elite crypto empire </p>
                           </li>
                        </ul>
                        <div className="copy-text aos-init" data-aos="fade-up">
                           <a className="website" href="
https://explorer.solana.com/address/FSZR4ZKHhZh5suHht6Xq43ZNsgwnJySsz5HYBfdPyMuw
" target="_blank" >https://explorer.solana.com</a>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-6">
                     <div className="nfts-saction-three-box-five-box five-box-right">
                        <h3 data-aos="fade-up" className="nfts-saction-three-box-five-sub-heading">Buy The SaurAI Labs Nfts on OpenSea.io</h3>
                        <ul>
                           <li data-aos="fade-up" className="aos-init aos-animate">
                              <span><img src={greenicon} draggable="false" /> Step 1: Set Up Your Wallet</span>
                              <p>Download and install MetaMask or any Ethereum (ETH) compatible wallet</p>
                              <p>Create a wallet, securely back up your recovery phrase, and fund it with Ethereum</p>
                           </li>
                           <li data-aos="fade-up" className="aos-init aos-animate">
                              <span><img src={greenicon} draggable="false" /> Step 2: Visit OpenSea.io</span>
                              <p className="margin-bottom-40">Visit <a href="https://opensea.io/">OpenSea.io <br></br>  <br /> </a> </p>
                              <p>Click 'Login' in the top right corner and select your wallet provider to connect
                              </p>
                           </li>
                           <li data-aos="fade-up" className="aos-init">
                              <span><img src={greenicon} draggable="false" /> Step 3: Find “The SaurAI Labs”</span>
                              <p>Search 'The SaurAI Labs' or use the direct link from the NFTs page.</p>
                              <p>Choose from Rare, Ultra Rare, or Legendary NFTs</p>
                           </li>
                           <li data-aos="fade-up" className="aos-init">
                              <span className="padding-top-less"><img src={greenicon} draggable="false" /> Step 4: Buy Yourself The SaurAI Labs Nfts</span>
                              <p>Click 'Buy Now', confirm the transaction and voilà: Welcome to the Saurverse </p>
                              <p>Repeat the process for as many NFTs as you may want to add to your collection</p>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
           
       
<Footer/>
  </div>
  </div>
      </>
   )
}
export default Fourthsection;