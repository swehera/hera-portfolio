"use client";
import { Typewriter } from "react-simple-typewriter";
import { FaCode } from "react-icons/fa";
import Image from "next/image";
import { heraIcon } from "@/images";
import Link from "next/link";
const HomePage = () => {
  const words = [
    "Mern stack developer",
    "Frontend developer",
    "Backend developer",
    "Full stack developer",
  ];
  return (
    <div className=" min-h-[100vh] flex flex-col items-center gap-y-2 mt-5 mb-4 px-12">
      <div className=" flex flex-col items-center justify-center gap-y-2 ">
        {/* <FaCode className="animate-bounce animate-infinite animate-ease-in text-6xl text-[#949494]" /> */}
        <div className=" mt-5">
          <Image
            src={heraIcon}
            alt="hera"
            width={250}
            height={250}
            className="animate-bounce-slow"
          />
        </div>
        <div className=" w-full flex items-center justify-center px-3">
          <h1 className=" font-semibold text-3xl text-[#4E4E4E] ">
            Hi, I am {" "}
            <span className=" text-[#632DFC] text-3xl font-semibold">Hira</span>
          </h1>
          {/* <h1 className=" text-[#632DFC] text-3xl font-semibold">
            &quot;Hira&quot;
          </h1> */}
        </div>
        <h1 className=" text-[#4E4E4E] font-semibold">
          I&apos;m a{" "}
          <span>
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={words}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
        <div className=" w-full md:w-[70%] flex items-center justify-center">
          <p className=" text-left text-sm text-gray-800 font-semibold">
            I am always looking to improve my skills and stay up-to-date with
            the latest best practices in web development. I am excited to
            continue growing as a developer and making meaningful contributions
            to projects and teams.
          </p>
        </div>
        <div className=" flex items-center gap-x-2">
          <button className=" uppercase text-sm font-semibold text-white bg-[#632DFC] px-3 py-1 rounded-md">
            Hire me
          </button>
          <Link
            href={"/portfolio"}
            className=" uppercase text-sm font-semibold text-[#632DFC] hover:text-white hover:bg-[#632DFC]  border border-[#632DFC]  px-3 py-1 rounded-md duration-200"
          >
            projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
