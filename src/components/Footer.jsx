import React from 'react';
import footerimg1 from '../assets/images/x-icon.png';
import footerimg2 from '../assets/images/g-icon.png';
import footercopyright from '../assets/images/c-icon.png';

import Autoslider2 from './Autoslider2';
 function Footer() {
  return (
 <>
  <div  data-aos="fade-up" className="nfts-saction-three-box-six" >
                <h2  className="nfts-saction-three-box-six-heading" >The Saurverse Awaits</h2>
             </div>
 <Autoslider2/>
 <div className="footer-saction footer-saction-nfts">
   <div className="container" id="saurs-contact">
      <ul data-aos="fade-up" className="aos-init aos-animate">
         <li><a href="https://twitter.com/SaurAI_Official" target="_blank"><img src={footerimg1} draggable="false" /></a></li>
         <li><a href="https://discord.gg/GdxGKBkD6N" target="_blank"><img src={footerimg2} draggable="false" /></a></li>
      </ul>
      <p data-aos="fade-up" className="aos-init aos-animate"><a href="">info@saurs.ai</a></p>
      <p className="copy-right aos-init" data-aos="fade-up"><img src={footercopyright} draggable="false" />2025.  SAUR AI | TheSaurAI Labs</p>
   </div>
</div>
 </>
  )
}
export default Footer;