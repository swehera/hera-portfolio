"use client";
import { profileImage } from "@/images";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Sidebar = () => {
  const pathname = usePathname();
  const [active, setActive] = useState(true);

  //Active section work
  const [home, setHome] = useState(true);
  const [about, setAbout] = useState(false);
  const [contact, setContact] = useState(false);
  const [portfolio, setPortfolio] = useState(false);
  const [resume, setResume] = useState(false);
  const [services, setServices] = useState(false);

  const HomeActive = () => {
    setActive(true);
    setAbout(false);
    setContact(false);
    setPortfolio(false);
    setResume(false);
    setServices(false);
  };
  const AboutActive = () => {
    setActive(false);
    setAbout(true);
    setContact(false);
    setPortfolio(false);
    setResume(false);
    setServices(false);
  };
  const ContactActive = () => {
    setActive(false);
    setAbout(false);
    setContact(true);
    setPortfolio(false);
    setResume(false);
    setServices(false);
  };
  const PortfolioActive = () => {
    setActive(false);
    setAbout(false);
    setContact(false);
    setPortfolio(true);
    setResume(false);
    setServices(false);
  };

  const ResumeActive = () => {
    setActive(false);
    setAbout(false);
    setContact(false);
    setPortfolio(false);
    setResume(true);
    setServices(false);
  };

  const ServicesActive = () => {
    setActive(false);
    setAbout(false);
    setContact(false);
    setPortfolio(false);
    setResume(false);
    setServices(true);
  };

  console.log("pathname", pathname);
  return (
    <div className=" hidden md:block  md:w-[20%] lg:w-[18%] bg-[#171C31] min-h-screen px-6 top-0 ">
      <div className=" sticky top-3 z-50">
        {/* image and info section */}
        <div className=" flex flex-col items-center gap-y-2 mt-10 mb-5">
          <div className=" w-[78px] h-20 rounded-full  ring-1 ring-purple-600 ">
            <Image
              src={profileImage}
              alt="hera"
              className=" w-full h-full rounded-full"
            />
          </div>
          <div className=" flex flex-col items-center ">
            <h2 className=" text-[17px] text-[#EAEAEA] font-semibold">
              Lutfor Rahman Hira
            </h2>
            <p className=" text-[#E74C3C] text-xs font-bold uppercase">
              web developer
            </p>
          </div>
          <span className=" bg-black w-full py-[0.5px]" />
        </div>

        {/* menu option work  */}
        <div className=" flex flex-col gap-y-6 ">
          <Link
            href={"/"}
            onClick={HomeActive}
            className={` w-full ${
              pathname === "/" && home === true
                ? "bg-[#632DFC] "
                : "hover:bg-[#632DFC]  duration-200"
            }  py-1 text-center uppercase text-sm rounded-md text-white`}
          >
            Home
          </Link>
          <Link
            href={"/portfolio"}
            onClick={PortfolioActive}
            className={` w-full ${
              pathname === "/portfolio" || portfolio === true
                ? "bg-[#632DFC] "
                : "hover:bg-[#632DFC]  duration-200"
            }  py-1 text-center uppercase text-sm rounded-md text-white`}
          >
            projects
          </Link>
          <Link
            href={"/resume"}
            onClick={ResumeActive}
            className={` w-full ${
              pathname === "/resume" || resume === true
                ? "bg-[#632DFC] "
                : "hover:bg-[#632DFC]  duration-200"
            }  py-1 text-center uppercase text-sm rounded-md text-white`}
          >
            RESUME
          </Link>
          <Link
            href={"/services"}
            onClick={ServicesActive}
            className={` w-full ${
              pathname === "/services" || services === true
                ? "bg-[#632DFC] "
                : "hover:bg-[#632DFC]  duration-200"
            }  py-1 text-center uppercase text-sm rounded-md text-white`}
          >
            SERVICES
          </Link>
          <Link
            href={"/about"}
            onClick={AboutActive}
            className={` w-full ${
              pathname === "/about" || about === true
                ? "bg-[#632DFC] "
                : "hover:bg-[#632DFC]  duration-200"
            }  py-1 text-center uppercase text-sm rounded-md text-white`}
          >
            ABOUT
          </Link>
          <Link
            href={"/contact"}
            onClick={ContactActive}
            className={` w-full ${
              pathname === "/contact" || contact === true
                ? "bg-[#632DFC] "
                : "hover:bg-[#632DFC]  duration-200"
            }  py-1 text-center uppercase text-sm rounded-md text-white`}
          >
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
