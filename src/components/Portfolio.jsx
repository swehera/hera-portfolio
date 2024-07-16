"use client";

import { FaEye, FaGithub } from "react-icons/fa";
import ScrollImage from "./ScrollImage";
import Link from "next/link";

const Portfolio = () => {
  const imageUrls = [
    {
      title: "Pharmacy-Management-System",
      imgUrl: "https://i.ibb.co/HzyCRqc/pharmacy-management-system.png",
      view: "https://pharmacy-management-system-hera.vercel.app/",
      code: "https://github.com/swehera/pharmacy-management-system",
    },
    {
      title: "Task-Management-System",
      imgUrl: "https://i.ibb.co/M8KQZfQ/task-management-system.png",
      view: "https://task-manager-hera.vercel.app/",
      code: "https://github.com/swehera/task-manager",
    },

    {
      title: "Beautiful Portfolio Design",
      imgUrl: "https://i.ibb.co/tYSKGp5/hera-01-portfolio.png",
      view: "https://hera-portfolio-01.vercel.app/",
      code: "https://github.com/swehera/hera-portfolio01",
    },
    {
      title: "E-Commerce Dashboard",
      imgUrl: "https://i.ibb.co/27fzrLt/dashboard-design.png",
      view: "https://e-dashboard-hera.vercel.app/",
      code: "https://github.com/swehera/e-com-dashbord",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-y-2 mt-5 mb-4">
      {/* text info work */}
      <div className="flex flex-col items-center justify-center gap-y-2">
        <p className="uppercase text-[#632DFC] text-sm font-semibold">
          projects
        </p>
        <h2 className="text-3xl font-bold text-[#4E4E4E] ">
          Some of my projects
        </h2>
      </div>
      <div>
        {/* project show work */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-3 gap-y-3">
          {imageUrls.map((item, index) => (
            <div key={index} className="py-2 px-4 bg-[#EAEAEA] rounded-md">
              <ScrollImage imageUrl={item.imgUrl} />
              <div className="my-2 flex flex-col items-center gap-y-2">
                <div className=" flex items-center justify-center">
                  <p className=" text-[#632DFC] font-semibold">{item.title}</p>
                </div>
                <Link
                  href={item.view}
                  className="w-full py-1 bg-white hover:border-none hover:bg-[#632DFC] border border-[#632DFC] text-[#632DFC] hover:text-white duration-200 rounded-md flex items-center justify-center gap-x-2"
                >
                  <FaEye />
                  View
                </Link>
                <Link
                  href={item.code}
                  className="w-full py-1 bg-[#632DFC] text-white rounded-md flex items-center justify-center gap-x-2"
                >
                  <FaGithub />
                  Code
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
