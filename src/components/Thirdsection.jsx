import React from 'react'
import image5 from '../assets/images/image-nfts-1.png';
import image6 from '../assets/images/image-nfts-2.png';
import greenicon from '../assets/images/green-icon.png';
import image7 from '../assets/images/image-nfts-3.png';
import chartimg from '../assets/images/chart.png';
import tableimg from '../assets/images/table-image.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



function Thirdsection() {
   


useEffect(() => {
  AOS.init({
    duration: 3000, // animation duration in ms
    once: true,     // animation should happen only once
  });
}, []);




   return (
      <>
      <div className='common-section'>
         <div className='main-section'>
            <div data-aos="fade-up" className='nfts-saction-three-box-one'>
               <h2  className="aos-init aos-animate">2 Blockchains | 1 Goal : To Dominate</h2>
               <div className="row-third-section ">
                  <div className="col-md-6">
                     <div className="nfts-saction-three-box-one-left aos-init aos-animate" data-aos="fade-up">
                        <ul>
                           <li data-aos="fade-up">$SaurAI: 10 Billion tokens on Solana </li>
                           <li data-aos="fade-up">The SaurAI Labs: 777 Saurverse NFTs on <br />Ethereum</li>
                        </ul>
                        <p data-aos="fade-up" >Together, the most unstoppable force in the meme industry gets built</p>
                     </div>
                  </div>
                  <div className="col-md-6">
                     <div className="nfts-saction-three-box-one-right aos-init aos-animate" data-aos="fade-left">
                        <img src={image5} alt="#" draggable="false" />
                     </div>
                  </div>
               </div>
            </div>


            <div  data-aos="fade-up" className="nfts-saction-three-box-tow" id="nfts">
               <h2 className="nfts-saction-three-box-tow-heading">Saurverse: The Digital Empire <br />Where Dinosaurs Rule</h2>
               <div data-aos="fade-up"  className="nfts-saction-three-box-tow-row">
                  <div className="col-md-6">
                     <div className="nfts-saction-three-box-tow-left aos-init aos-animate" data-aos="fade-right">
                        <img src={image6} alt="#" draggable="false" />
                     </div>
                  </div>
                  <div className="col-md-6">
                     <div className="nfts-saction-three-box-tow-right aos-init aos-animate" data-aos="fade-up">
                        <ul>
                           <li><img data-aos="fade-up" src={greenicon} draggable="false" /> Step into the Saurverse: Imagine a world where humans didn’t evolve from apes — but from the mighty Dinosaurs. This isn’t just a virtual realm; it’s a resurrection of ancient power, where AI, Dino-Humans, and Blockchain&nbsp;reign&nbsp;supreme
                           </li>
                           <li><img data-aos="fade-up" src={greenicon} draggable="false" /> Your SaurAI Labs NFTs are more than collectibles: They evolve over
                              time, growing stronger and unlocking exclusive powers and rewards. From epic conquests to rewards, the
                              Saurverse is your playground
                           </li>
                           <li><img data-aos="fade-up" src={greenicon} draggable="false" /> At the heart of it all is $SaurAI! It's not just a currency:
                              It's the force that drives the entire Dino civilization forward
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>

            <div data-aos="fade-up" className="nfts-saction-three-box-three">
               <span  className="aos-init aos-animate">ROADMAP</span>
               <h2 data-aos="fade-up" className="nfts-saction-three-box-three-heading">ROADMAP: The Rise of the Saurverse</h2>
               <div data-aos="fade-up"  className="nfts-saction-three-box-three-row">
                  <div className="col-md-6">
                     <div className="nfts-saction-three-box-three-left">
                        <ul>
                           <li data-aos="fade-up" className="aos-init aos-animate">
                              <img src={greenicon} draggable="false" />
                              <em>The Genesis</em>
                              <h3>Phase 1</h3>
                              <p>Artificial Intelligence is Integrated |<br /> The Saurverse springs to life</p>
                           </li>
                           <li data-aos="fade-up" className="aos-init">
                              <img src={greenicon} draggable="false" />
                              <em>The Big Bang</em>
                              <h3>Phase 2</h3>
                              <p>Unleash 10B $SaurAI |<br /> Drop 777 The SaurAI Labs NFTs</p>
                           </li>
                           <li data-aos="fade-up" className="aos-init">
                              <img src={greenicon} draggable="false" />
                              <em>Dino’s Grand Debut</em>
                              <h3>Phase 3</h3>
                              <p>Presale | DEX Launch | Liquidity Pool Burn |<br /> Contract Ownership Renounced</p>
                           </li>
                           <li data-aos="fade-up" className="aos-init">
                              <img src={greenicon} draggable="false" />
                              <em> Coronation as Meme Royalty</em>
                              <h3>Phase 4</h3>
                              <p>$SAURAI ascends the throne as the<br /> Emperor of the Meme Empire</p>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div className="col-md-6">
                     <div className="nfts-saction-three-box-three-right aos-init aos-animate" data-aos="fade-left">
                        <img src={image7} alt="#" draggable="false" />
                     </div>
                  </div>
               </div>
            </div>

            <div data-aos="fade-up" className="nfts-saction-three-box-four" id="tokenomics">
               <h2  className="aos-init aos-animate">TOKENOMICS</h2>
               <div className="nfts-saction-three-box-four-row">
                  <div className="col-md-6-img">
                     <div className="nfts-saction-three-box-four-left padding-top text-left aos-init aos-animate" data-aos="fade-up">
                        <img data-aos="fade-up"  src={chartimg} draggable="false" />
                        {/* <div className="buton-chart-table"><a href="#">Explore Now</a></div> */}
                     </div>
                  </div>
                  <div className="col-md-6-img padding-0">
                     <div className="nfts-saction-three-box-four-right aos-init aos-animate" data-aos="fade-up">
                        <img data-aos="fade-up"  src={tableimg} draggable="false" />
                        {/* <div class="buton-chart-table"><a href="#">Explore Now</a></div>  */}
                     </div>
                  </div>
               </div>
            </div>





         </div>
      </div>
      </>
   )
}
export default Thirdsection