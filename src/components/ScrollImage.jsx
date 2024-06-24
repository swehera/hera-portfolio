"use client";

import { useState } from "react";
import "../styles/ScrollingImage.css";

const ScrollImage = ({ imageUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  const style = {
    backgroundImage: `url(${imageUrl})`,
    height: "250px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPositionY: isHovered ? "100%" : "0%",
    transition: "background 3s ease-in-out",
  };

  return (
    <div
      className="templates-gallery-showcase-img"
      style={style}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    ></div>
  );
};

export default ScrollImage;
