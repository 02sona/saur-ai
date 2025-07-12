import React from 'react'
import "./Nfts.css/"
import Newslider from './Newslider';
import Newslider2 from './Newslider2';
import Newslider3 from './Newslider3';
 import Footer from './Footer'
 import Header from './Header'
import Saleslider from './Saleslider';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function Nfts() {


   useEffect(() => {
  AOS.init({
    duration: 1000, // animation duration in ms
    once: true,     // animation should happen only once
  });
}, []);

  return (
    <>
   
    <div className='nfts-full-container'>
      <Saleslider/>
       
        <div  className='nfts-container'>
         <Header/>
            <div data-aos="fade-up" className='nfts-container-center'>
            <h2 data-aos="fade-up" className="aos-init aos-animate">Unlock Power Of The <br/>SaurAI Labs NFTs</h2>
            <p  className="aos-init aos-animate">Your NFTs remain your ticket to becoming part of the most exclusive<br/> crypto empire on
            Earth. These NFTs aren’t just collectables, they <br/>are your gateway to the Saurverse
         </p>
         <div className="row">
            <div className="col-md-4">
               <a href="#ultrarare">
                  <div data-aos="fade-left" className="banner-nfts-saction-tow-box margain-top aos-init aos-animate" >
                     <img src="https://saurs.ai/asset/images/icon-nfts-1.png" draggable="false" />
                     <h3>200 Ultra Rare NFTs</h3>
                     <span>Step up with increased privileges, unique utilities, and an amplified role in the Saurverse</span>
                  </div>
               </a>
            </div>
            <div className="col-md-4">
               <a href="#legendary">
                  <div data-aos="fade-up" className="banner-nfts-saction-tow-box aos-init aos-animate" >
                     <img src="https://saurs.ai/asset/images/icon-nfts-2.png" draggable="false"/>
                     <h3>77 Legendary NFTs</h3>
                     <span>The crown jewels. With only 77 ever made, these Jurassic Gems are the apex power symbols</span>
                  </div>
               </a>
            </div>
            <div className="col-md-4">
               <a href="#rare">
                  <div data-aos="fade-right" className="banner-nfts-saction-tow-box margain-top aos-init aos-animate" >
                     <img src="https://saurs.ai/asset/images/icon-nfts-3.png" draggable="false" />
                     <h3>500 Rare NFTs</h3>
                     <span> These NFTs unlock exclusive access and your Dino evolves with each passing day</span>
                  </div>
               </a>
            </div>
           
         </div>
            </div>
        </div>
       
 <h1 className='heading-slider-nfts-section'>Legendary</h1>
<Newslider/>
 <h1 className='heading-slider-nfts-section'>Ultra Rare</h1>
 <Newslider2/>
  <h1 className='heading-slider-nfts-section'>Rare</h1>
 <Newslider3/>
 
 <Footer/>
 
 
 
 
 
 

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
    </div>
    </>
  )
}
export default Nfts;