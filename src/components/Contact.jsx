"use client";

import { contactImage } from "@/images";
import Image from "next/image";

const Contact = () => {
  return (
    <div className=" min-h-[100vh] flex flex-col items-center gap-y-2 mt-5 mb-4 px-12">
      {/* text info work */}
      <div className="flex flex-col items-center justify-center gap-y-2">
        <p className="uppercase text-[#632DFC] text-sm font-semibold">
          CONTACT
        </p>
        <h2 className="text-3xl font-bold text-[#4E4E4E]">Contact With Me</h2>
      </div>

      <div className=" w-full flex flex-col md:flex-row justify-between gap-3">
        <div className=" w-full md:w-[30%] bg-white p-4 rounded-md">
          <div className=" w-full rounded-md group overflow-hidden">
            <Image
              src={contactImage}
              width={200}
              height={200}
              alt="contact-image"
              className="w-full rounded-md group-hover:scale-110 duration-300"
            />
          </div>
          <div className=" my-2">
            <p className=" text-xl font-bold text-gray-600">Lutfor Rahman</p>
            <p className=" text-sm font-bold text-[#632DFC]">
              Full Stack Devoloper
            </p>
          </div>
          <div>
            <p className=" text-[#632DFC]">
              Phone:{" "}
              <span className=" text-gray-600 font-semibold">
                +8801843471410
              </span>
            </p>
            <p className=" text-[#632DFC]">
              Email:{" "}
              <span className=" text-gray-600 font-semibold">
                devlutfor@gmail.com
              </span>
            </p>
          </div>
        </div>
        <div className=" w-full md:w-[70%] bg-white p-6 rounded-md">
          <div className=" flex flex-col gap-y-2">
            <div>
              <label className=" text-sm font-semibold text-gray-600">
                Name:
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className=" w-full py-1 px-3 rounded-md outline-none border border-gray-500"
              />
            </div>
            <div>
              <label className=" text-sm font-semibold text-gray-600">
                Phone
              </label>
              <input
                type="number"
                placeholder="Enter your number"
                className=" w-full py-1 px-3 rounded-md outline-none border border-gray-500"
              />
            </div>
            <div>
              <label className=" text-sm font-semibold text-gray-600">
                Subject
              </label>
              <input
                type="text"
                placeholder="Enter your subject"
                className=" w-full py-1 px-3 rounded-md outline-none border border-gray-500"
              />
            </div>
            <div>
              <label className=" text-sm font-semibold text-gray-600">
                YOUR MESSAGE
              </label>
              <textarea
                type="text"
                placeholder="Enter your message"
                className=" w-full py-1 px-3 rounded-md outline-none border border-gray-500 h-20"
              />
            </div>

            {/* submited button here */}
            <div>
              <button className=" bg-[#632DFC] w-full py-1 rounded-md text-white">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
