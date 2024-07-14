"use client";
import { FaFileCode } from "react-icons/fa";
import { CgIfDesign } from "react-icons/cg";
import { TbWorld } from "react-icons/tb";

const Services = () => {
  return (
    <div className=" min-h-[100vh] flex flex-col items-center gap-y-2 mt-5 mb-4 px-12">
      {/* text info work */}
      <div className="flex flex-col items-center justify-center gap-y-2">
        <p className="uppercase text-[#632DFC] text-sm font-semibold">
          my services
        </p>
        <h2 className="text-3xl font-bold text-[#4E4E4E]">What I do</h2>
      </div>

      {/* that is for show what i am do */}
      <div className=" w-full  grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className=" bg-white p-4 rounded-md">
          <div>
            <div>
              <FaFileCode className=" text-6xl text-gray-600 my-3" />
            </div>
            <p className=" text-[#632DFC] text-xl font-semibold tracking-wide">
              Web Development
            </p>
            <div>
              <p className=" text-left w-full ">
                From design to integration to maintenance, I offer full-cycle
                web application development services besides being Able to build
                apps that are secure, scalable, fast, and work well across all
                devices and platforms.
              </p>
            </div>
          </div>
        </div>
        <div className=" bg-white p-4 rounded-md">
          <div>
            <div>
              <CgIfDesign className=" text-6xl text-gray-600 my-3" />
            </div>
            <p className=" text-[#632DFC] text-xl font-semibold tracking-wide">
              UI/UX
            </p>
            <div>
              <p className=" text-left w-full ">
                Speed up your product development process with revolutionary
                Merge technology. From UI designing to UI developing – create
                consistent interfaces using the same building blocks with me.
              </p>
            </div>
          </div>
        </div>
        <div className=" bg-white p-4 rounded-md">
          <div>
            <div>
              <TbWorld className=" text-6xl text-gray-600 my-3" />
            </div>
            <p className=" text-[#632DFC] text-xl font-semibold tracking-wide">
              SEO / Web Hosting
            </p>
            <div>
              <p className=" text-left w-full ">
                With a deep understanding of the latest algorithms and
                technologies, I provide top-notch services to help businesses
                and individuals increase their online visibility and improve
                their web presence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
