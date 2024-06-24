"use client";
import { Typewriter } from "react-simple-typewriter";
import { FaCode } from "react-icons/fa";
const HomePage = () => {
  const words = [
    "Mern stack developer",
    "Frontend developer",
    "Backend developer",
    "Full stack developer",
  ];
  return (
    <div className=" h-[100vh] md:min-h-[80vh] flex items-center justify-center">
      <div className=" flex flex-col items-center gap-y-3 ">
        <FaCode className="animate-bounce animate-infinite animate-ease-in text-6xl text-[#949494]" />
        <h1 className=" font-semibold text-3xl text-[#4E4E4E]">
          Hey Buddy, I am 
          <span className=" text-[#632DFC]">&quot;Hira&quot;</span>
        </h1>
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
        <div className=" flex items-center gap-x-2">
          <button className=" uppercase text-sm font-semibold text-white bg-[#632DFC] px-3 py-1 rounded-md">
            Hire me
          </button>
          <button className=" uppercase text-sm font-semibold text-[#632DFC] hover:text-white hover:bg-[#632DFC]  border border-[#632DFC]  px-3 py-1 rounded-md duration-200">
            projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
