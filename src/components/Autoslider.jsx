import React from "react";
import image from "../assets/images/marque-icon.png";


export default function AutoSlider() {
  return (
    <div className="marquee-wrapper">
      <div className="marquee">
        <div className="marquee-content">
          {Array(2).fill(
            <span>
              - It’s got Depth, AI, NFTs, and a whole prehistoric revolution behind it.
              <span className="star-icon">
                <img
                  src={image}
                  alt=""
                  className="mar-img"
                  draggable="false"
                  style={{ userSelect: "none" }}
                />
              </span>
              SaurAI is built different. It’s not just another Meme Coronation
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
