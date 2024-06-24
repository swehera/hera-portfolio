"use client";
import { delay, motion } from "framer-motion";

const SkillsComponent = () => {
  return (
    <div className=" mt-5 min-h-[80vh]">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-3">
        {/* left part */}
        <div className="  flex flex-col gap-y-2">
          <p className=" text-sm font-semibold text-[#632DFC] uppercase">
            SKILLS
          </p>
          <h5 className=" text-xl font-semibold text-[#4E4E4E]">
            Design Skills
          </h5>
          <div className="overflow-hidden">
            <p className=" text-sm text-[#4E4E4E]">FIGMA</p>
            <span className="  w-full inline-flex bg-black rounded-md h-2 relative">
              <motion.span
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className=" w-[90%] h-full bg-gradient-to-tr from-purple-800 to-pink-400  rounded-md absolute"
              >
                <span className="  inline-flex absolute -top-5 right-0 text-sm font-medium">
                  90%
                </span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-hidden">
            <p className=" text-sm text-[#4E4E4E]">UI & UX</p>
            <span className="  w-full inline-flex bg-black rounded-md h-2 relative">
              <motion.span
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className=" w-[80%] h-full bg-gradient-to-tr from-purple-800 to-pink-400  rounded-md absolute"
              >
                <span className="  inline-flex absolute -top-5 right-0 text-sm font-medium">
                  80%
                </span>
              </motion.span>
            </span>
          </div>
          <h5 className=" text-xl font-semibold text-[#4E4E4E] mt-3">
            Backend Skills
          </h5>
          <div className="overflow-hidden">
            <p className=" text-sm text-[#4E4E4E]">MONGODB</p>
            <span className="  w-full inline-flex bg-black rounded-md h-2 relative">
              <motion.span
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className=" w-[90%] h-full bg-gradient-to-tr from-purple-800 to-pink-400  rounded-md absolute"
              >
                <span className="  inline-flex absolute -top-5 right-0 text-sm font-medium">
                  90%
                </span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-hidden">
            <p className=" text-sm text-[#4E4E4E]">FIREBASE</p>
            <span className="  w-full inline-flex bg-black rounded-md h-2 relative">
              <motion.span
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className=" w-[80%] h-full bg-gradient-to-tr from-purple-800 to-pink-400  rounded-md absolute"
              >
                <span className="  inline-flex absolute -top-5 right-0 text-sm font-medium">
                  80%
                </span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-hidden">
            <p className=" text-sm text-[#4E4E4E]">api</p>
            <span className="  w-full inline-flex bg-black rounded-md h-2 relative">
              <motion.span
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className=" w-[95%] h-full bg-gradient-to-tr from-purple-800 to-pink-400  rounded-md absolute"
              >
                <span className="  inline-flex absolute -top-5 right-0 text-sm font-medium">
                  95%
                </span>
              </motion.span>
            </span>
          </div>
        </div>

        {/* right part */}
        <div className="  flex flex-col gap-y-2">
          <p className=" text-sm font-semibold text-[#632DFC] uppercase">
            SKILLS
          </p>
          <h5 className=" text-xl font-semibold text-[#4E4E4E]">
            Frontend Skill
          </h5>
          <div className="overflow-hidden">
            <p className=" text-sm text-[#4E4E4E] uppercase">html5</p>
            <span className="  w-full inline-flex bg-black rounded-md h-2 relative">
              <motion.span
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className=" w-[90%] h-full bg-gradient-to-tr from-purple-800 to-pink-400  rounded-md absolute"
              >
                <span className="  inline-flex absolute -top-5 right-0 text-sm font-medium">
                  90%
                </span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-hidden">
            <p className=" text-sm text-[#4E4E4E] uppercase">css3</p>
            <span className="  w-full inline-flex bg-black rounded-md h-2 relative">
              <motion.span
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className=" w-[80%] h-full bg-gradient-to-tr from-purple-800 to-pink-400  rounded-md absolute"
              >
                <span className="  inline-flex absolute -top-5 right-0 text-sm font-medium">
                  80%
                </span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-hidden">
            <p className=" text-sm text-[#4E4E4E] uppercase">TAILWINDCSS</p>
            <span className="  w-full inline-flex bg-black rounded-md h-2 relative">
              <motion.span
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className=" w-[80%] h-full bg-gradient-to-tr from-purple-800 to-pink-400  rounded-md absolute"
              >
                <span className="  inline-flex absolute -top-5 right-0 text-sm font-medium">
                  80%
                </span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-hidden">
            <p className=" text-sm text-[#4E4E4E] uppercase">JAVASCRIPT</p>
            <span className="  w-full inline-flex bg-black rounded-md h-2 relative">
              <motion.span
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className=" w-[70%] h-full bg-gradient-to-tr from-purple-800 to-pink-400  rounded-md absolute"
              >
                <span className="  inline-flex absolute -top-5 right-0 text-sm font-medium">
                  70%
                </span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-hidden">
            <p className=" text-sm text-[#4E4E4E] uppercase">react js</p>
            <span className="  w-full inline-flex bg-black rounded-md h-2 relative">
              <motion.span
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className=" w-[80%] h-full bg-gradient-to-tr from-purple-800 to-pink-400  rounded-md absolute"
              >
                <span className="  inline-flex absolute -top-5 right-0 text-sm font-medium">
                  80%
                </span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-hidden">
            <p className=" text-sm text-[#4E4E4E] uppercase">next js</p>
            <span className="  w-full inline-flex bg-black rounded-md h-2 relative">
              <motion.span
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className=" w-[80%] h-full bg-gradient-to-tr from-purple-800 to-pink-400  rounded-md absolute"
              >
                <span className="  inline-flex absolute -top-5 right-0 text-sm font-medium">
                  80%
                </span>
              </motion.span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsComponent;
