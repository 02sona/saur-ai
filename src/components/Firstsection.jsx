import React from 'react'
import Header from './Header';
import Firstsectionslider from './Firstsectionslider';
import firstimg from '../assets/images/nfts-icon-1.png';
import Saleslider from './Saleslider';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
// File is Firstsectionslider.js
 // No need to specify .js


 function Firstsection() {

 useEffect(() => {
  AOS.init({
    duration: 1000, // animation duration in ms
    once: true,     // animation should happen only once
  });
}, []);

  return (
    <>
    <Saleslider/>
    <div className='common-section'>
      
    <div className='first-section-bg'>
 <Header/>

<div className="nfts-saction-banner">
   <div data-aos="fade-up" className="container">
      <h2  className="section-one">Welcome to $SaurAI: The Apex MEME Predator!</h2>
      <div className="row-first-section">
         <div className="content-area">
            <div className="nfts-saction-banner-left">
               <p data-aos="fade-right" className="aos-init">In a world dominated by doggos and frog themed tokens, it’s time for the true
                  king to reclaim the throne!
               </p>
               <p data-aos="fade-right" className="aos-init">$SaurAI &amp; The SaurAI Labs are fused with AI technology and armed with blockchain supremacy 
               </p>
               <Firstsectionslider/>
             
            </div>
         </div>
         <div className="img-area">
            <div className="nfts-saction-banner-right aos-init" data-aos="fade-up">
               <img src={firstimg} alt="#" className="nfts-icon-1" draggable="false"/>
            </div>
         </div>
      </div>
   </div>
</div>

    
</div>
    </div>
    </>
  )
}
export default Firstsection;