import React from 'react'
import image from "../assets/images/nfts-icon-2.png";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



function Secondsection() {

   useEffect(() => {
  AOS.init({
    duration: 1000, // animation duration in ms
    once: true,     // animation should happen only once
  });
}, []);


   return (
      <>
         <div className='common-section'>
            <div  className="nfts-saction-tow" id="whysaur">
            <div className="container">
               <div data-aos="fade-up" className="row">
                  <div className="col-md-6">
                     <div className="nfts-saction-one-left aos-init aos-animate" data-aos="fade-up">
                        <img data-aos="fade-up" src={image}
                           alt="#" draggable="false" style={{ userSelect: 'none' }}
                        />
                     </div>
                  </div>
                  <div  className="col-md-6">
                     <div className="nfts-saction-one-right aos-init aos-animate" data-aos="fade-up">
                        <h2 >Why SaurAI ?</h2>
                        <p data-aos="fade-up">Backed by The SaurAI Labs NFTs and Solana Meme tokens, the power of the two best blockchains is here to
                           rule supreme in the Meme domain
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         </div>
      </>
   )
}
export default Secondsection;