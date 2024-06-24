"use client";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { FaInstagramSquare } from "react-icons/fa";
import { RiMenu2Fill } from "react-icons/ri";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [open, setOpen] = useState(false);

  console.log("is open ", open);

  return (
    <div className=" relative w-full bg-[#14192D] h-14 flex items-center justify-between px-6 md:px-12">
      {/* menu icon work */}
      <div className=" block md:hidden">
        {open ? (
          <p
            onClick={() => setOpen(!open)}
            className=" text-3xl font-semibold text-gray-400"
          >
            X
          </p>
        ) : (
          <div className=" flex items-center justify-center">
            <RiMenu2Fill
              onClick={() => setOpen(!open)}
              className=" text-4xl text-[#632DFC] cursor-pointer"
            />
          </div>
        )}
      </div>

      {/* mobile menu work start here */}

      {open && (
        <div>
          <div
            onClick={() => setOpen(false)}
            className=" min-h-screen w-full bg-black/75 z-50 absolute  top-[56px] left-0"
          >
            <div className=" flex flex-col items-center justify-center gap-y-3 mt-5">
              <Link href={"/"} className=" text-white uppercase font-semibold">
                Home
              </Link>
              <Link
                href={"/portfolio"}
                className=" text-white uppercase font-semibold"
              >
                portfolio
              </Link>
              <Link
                href={"/resume"}
                className=" text-white uppercase font-semibold"
              >
                resume
              </Link>
              <Link
                href={"/services"}
                className=" text-white uppercase font-semibold"
              >
                services
              </Link>
              <Link
                href={"/about"}
                className=" text-white uppercase font-semibold"
              >
                about
              </Link>
              <Link
                href={"/contact"}
                className=" text-white uppercase font-semibold"
              >
                contact
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* mobile menu work end here */}
      {/* social icon work */}
      <div className=" hidden md:block">
        <div className="  text-[#D9D9D9]  text-xl flex items-center gap-x-3">
          <FaGithub className="hover:text-[#632DFC] duration-200" />
          <FaFacebook className="hover:text-[#632DFC] duration-200" />
          <GrLinkedin className="hover:text-[#632DFC] duration-200" />
          <FaInstagramSquare className="hover:text-[#632DFC] duration-200" />
        </div>
      </div>

      <div className=" hidden md:block  relative cursor-pointer ">
        <p className=" text-white sm:text-xl md:text-[16px] font-semibold ">
          MY BLOGS
        </p>
        <span className=" py-[0.5px] bg-white w-full absolute top-6  duration-300" />
      </div>

      <div className=" flex items-center justify-center">
        <button className=" text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl  focus:outline-none   font-medium rounded-lg text-sm px-5 py-1.5 text-center  uppercase">
          Hire Me
        </button>
      </div>
    </div>
  );
};

export default Header;
