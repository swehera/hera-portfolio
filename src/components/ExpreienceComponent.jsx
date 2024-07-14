import React from "react";

const ExpreienceComponent = () => {
  return (
    <div className=" min-h-[100vh] py-3 px-1 md:px-6">
      <div className=" flex items-center justify-center">
        <div className=" w-full md:w-[60%] px-2 md:px-4 py-3 border border-[#4E4E4E] rounded-md">
          <p className=" text-[#632DFC] text-sm font-semibold">2022-2023</p>
          <h6 className=" text-xl font-semibold text-[#4E4E4E] py-2">
            Job Experience
          </h6>
          <div className=" flex flex-col gap-y-3">
            <div className=" px-6">
              <p className=" text-xl font-normal text-[#4E4E4E]">
                Assistant Manager
              </p>
              <p className=" text-sm text-[#4E4E4E] font-bold">
                Islam Navigation(2023-2024)
              </p>
              <p className="text-sm text-[#632DFC] font-bold">1 years</p>
              <p className="text-sm text-[#4E4E4E] font-bold">
                I worked as an assistant manager and computer operator at Islam
                Navigation it&apos;s a ship company
              </p>
            </div>
            <div className=" px-6">
              <p className=" text-xl font-normal text-[#4E4E4E]">Freelancer</p>
              <p className=" text-sm text-[#4E4E4E] font-bold">
                Fiverr, Freelancer.com, Upwork (2022-2023)
              </p>
              <p className="text-sm text-[#632DFC] font-bold">1 years</p>
              <p className="text-sm text-[#4E4E4E] font-bold">
                I worked as an freelancer at diffrent type of freelance website
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpreienceComponent;
