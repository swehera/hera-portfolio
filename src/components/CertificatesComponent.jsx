"use client";

import { diploma, freecodecamp } from "@/images";
import Image from "next/image";

const CertificatesComponent = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 p-3  gap-2  mt-5">
      <div className=" flex justify-center items-center gap-2 ">
        <div
          // key={item.id}
          className=" border-solid border-2 border-[#632DFC] p-3 rounded-md "
        >
          <div className=" overflow-hidden">
            {/* <img
              src={item.img}
              alt="diploma-certificate"
              className=" w-auto md:w-[450px] rounded-md hover:scale-125 duration-300"
            /> */}
            <Image
              src={diploma}
              alt="hera"
              className=" w-auto md:w-[450px] rounded-md hover:scale-125 duration-1000"
            />
          </div>
        </div>
      </div>
      <div className=" flex justify-center items-center gap-2 ">
        <div
          // key={item.id}
          className=" border-solid border-2 border-[#632DFC] p-3 rounded-md "
        >
          <div className=" overflow-hidden">
            {/* <img
              src={item.img}
              alt="diploma-certificate"
              className=" w-auto md:w-[450px] rounded-md hover:scale-125 duration-300"
            /> */}
            <Image
              src={freecodecamp}
              alt="hera"
              className=" w-auto md:w-[450px] rounded-md hover:scale-125 duration-1000"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificatesComponent;
