import React from "react";
import image from "../assets/images/marque-icon.png";
import "./Saleslider.css";

export default function Saleslider() {
  const content = (
    <span>
      PRESALEISLIVE!
      <span className="star-icon">
        <img
          src={image}
          alt=""
          className="mar-img"
          draggable="false"
          style={{ userSelect: "none" }}
        />
      </span>
      PRESALEISLIVE!
      <span className="star-icon">
        <img
          src={image}
          alt=""
          className="mar-img"
          draggable="false"
          style={{ userSelect: "none" }}
        />
      </span>
    </span>
    
  );

  return (
    <div className="marquee-wrapper-sale">
      <div className="marquee">
        <div className="marquee-content-sale">
          {Array.from({ length: 20 }).map((_, i) => (
            <React.Fragment key={i}>{content}</React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
