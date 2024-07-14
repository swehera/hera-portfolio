"use client";

import "../styles/HireMe.css";
import { myResume } from "@/images";

const HireMe = () => {
  return (
    <a href={myResume} target="_blank">
      <button class="splash-custom-btn btn-11">Hire Me</button>
    </a>
  );
};

export default HireMe;
