"use client";

import { FaEye, FaGithub } from "react-icons/fa";
import ScrollImage from "./ScrollImage";

const Portfolio = () => {
  const imageUrls = [
    "https://didar.adoffsolution.xyz/go/img/6365504db84fb.webp", // project one link
    "https://didar.adoffsolution.xyz/go/img/6374b73656d3a.webp", // project two link
    "https://didar.adoffsolution.xyz/go/img/6365501ded175.webp", // project three link
  ];

  return (
    <div className="    flex flex-col items-center gap-y-2 mt-5 mb-4 ">
      {/* text info work */}
      <div className="flex flex-col items-center justify-center gap-y-2">
        <p className="uppercase text-[#632DFC] text-sm font-semibold">
          PORTFOLIO
        </p>
        <h2 className="text-3xl font-bold text-[#4E4E4E]">My Portfolio</h2>
      </div>
      <div>
        {/* project show work */}
        <div className="  grid grid-cols-1 md:grid-cols-3 gap-x-3 gap-y-3">
          {imageUrls.map((url, index) => (
            <div key={index} className="py-2 px-4 bg-[#EAEAEA] rounded-md">
              <ScrollImage imageUrl={url} />
              <div className="my-2 flex flex-col items-center gap-y-2">
                <button className="w-full py-1 bg-white hover:border-none hover:bg-[#632DFC] border border-[#632DFC] text-[#632DFC] hover:text-white duration-200 rounded-md flex items-center justify-center gap-x-2">
                  <FaEye />
                  View
                </button>
                <button className="w-full py-1 bg-[#632DFC] text-white rounded-md flex items-center justify-center gap-x-2">
                  <FaGithub />
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
