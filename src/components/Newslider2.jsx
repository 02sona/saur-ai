import React, { useEffect, useRef, useState } from "react";
import "./Newslider.css";

import image1nfts from "../assets/images/slidewr-8.png";
import image2nfts from "../assets/images/slidewr-6.png";
import image3nfts from "../assets/images/slidewr-3.png";
import image5nfts from "../assets/images/slidewr-7.png";
import image4nfts from "../assets/images/nfts-icon-1.png";

const images = [image1nfts, image2nfts, image3nfts, image4nfts,image5nfts];

const Newslider = () => {
  const containerRef = useRef(null);
  const scrollPosRef = useRef(0);
  const [paused, setPaused] = useState(false);

  const scrollSpeed = 0.5;
  const scrollInterval = 10;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    scrollPosRef.current = container.scrollWidth / 2;
    container.scrollLeft = scrollPosRef.current;

    const scroll = () => {
      if (paused) return; // ✅ Fully stop if paused

      scrollPosRef.current -= scrollSpeed;
      container.scrollLeft = scrollPosRef.current;

      // ✅ Only reset when not paused AND at the edge
      if (scrollPosRef.current <= 0 && !paused) {
        scrollPosRef.current = container.scrollWidth / 2;
        container.scrollLeft = scrollPosRef.current;
      }
    };

    const interval = setInterval(scroll, scrollInterval);
    return () => clearInterval(interval);
  }, [paused]);

  return (
    <div
      className="slider-wrapper-nfts-page"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="slider-container" ref={containerRef}>
        {[...images, ...images].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`slide-${index}`}
            className="slider-image-nfts-page"
          />
        ))}
      </div>
    </div>
  );
};

export default Newslider;
