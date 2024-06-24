"use client";

const EducationComponent = () => {
  return (
    <div className=" flex items-center justify-center mt-5 py-5">
      <div className=" w-full md:w-[80%] h-[300px]  flex items-center  gap-x-5">
        <span className=" h-full px-[1.5px] bg-slate-500 ml-24 hidden md:block" />

        <div className=" flex flex-col  gap-y-2">
          <div>
            <p className="text-sm text-[#632DFC] font-semibold">2016-2023</p>
            <h3 className=" text-xl font-semibold text-[#4E4E4E]">
              Education Qualification
            </h3>
          </div>
          <div className=" flex flex-col  gap-y-[2px] mt-1">
            <h6 className=" text-[#717171] text-xl font-normal relative">
              Diploma-in-Engineering
            </h6>
            <div className=" p-2 rounded-full bg-[#632DFC] absolute left-[457px] mt-2 animate-pulse animate-infinite hidden md:block" />
            <p className=" text-[#717171] text-sm font-semibold">
              Munshiganj Polytechnic Institute (2018-2022)
            </p>
            <p className=" text-sm font-semibold text-[#632DFC]">3.43 / 4</p>
            <p className=" text-sm text-[#717171] font-semibold">
              I completed my diploma from Munshiganj Polytechnic Institute
              (2018-2022) in CSE Department
            </p>
          </div>
          <div className=" flex flex-col  gap-y-[2px] mt-1">
            <h6 className=" text-[#717171] text-xl font-normal relative">
              S.S.C (Science)
            </h6>
            <div className=" p-2 rounded-full bg-[#632DFC] absolute left-[457px] mt-2 animate-pulse animate-infinite hidden md:block" />
            <p className=" text-[#717171] text-sm font-semibold">
              Ma Memorial Model Academy (2016-2018)
            </p>
            <p className=" text-sm font-semibold text-[#632DFC]">4.39 / 5</p>
            <p className=" text-sm text-[#717171] font-semibold">
              I completed my S.S.C from Ma Memorial Model Academy school
              (2018-2022)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationComponent;
