"use client";

import { useState } from "react";
import EducationComponent from "./EducationComponent";
import SkillsComponent from "./SkillsComponent";
import ExpreienceComponent from "./ExpreienceComponent";
import CertificatesComponent from "./CertificatesComponent";

const Resume = () => {
  const [education, setEducation] = useState(true);
  const [skills, setSkills] = useState(false);
  const [expreience, setExpreience] = useState(false);
  const [certificates, setCertificates] = useState(false);

  const Education = () => {
    setEducation(true);
    setSkills(false);
    setExpreience(false);
    setCertificates(false);
  };

  const Skills = () => {
    setEducation(false);
    setSkills(true);
    setExpreience(false);
    setCertificates(false);
  };

  const Experience = () => {
    setEducation(false);
    setSkills(false);
    setExpreience(true);
    setCertificates(false);
  };

  const Certificate = () => {
    setEducation(false);
    setSkills(false);
    setExpreience(false);
    setCertificates(true);
  };

  return (
    <div className="flex flex-col items-center gap-y-2 mt-5 mb-4 px-12">
      {/* text info work */}
      <div className="flex flex-col items-center justify-center gap-y-2">
        <p className="uppercase text-[#632DFC] text-sm font-semibold">
          1+ YEARS OF EXPERIENCE
        </p>
        <h2 className="text-3xl font-bold text-[#4E4E4E]">My Resume</h2>
      </div>

      {/* resume work start here */}
      <div className=" w-full  ">
        <div className=" flex flex-col md:flex-row items-center justify-between gap-x-2 gap-y-2">
          <button
            onClick={Education}
            className={` w-full py-1.5 rounded-md bg-[#EAEAEA] ${
              education ? "text-[#632DFC] " : "text-[#4E4E4E] "
            } font-semibold shadow-md`}
          >
            Education
          </button>
          <button
            onClick={Skills}
            className={` w-full py-1.5 rounded-md bg-[#EAEAEA] ${
              skills ? "text-[#632DFC] " : "text-[#4E4E4E] "
            } font-semibold shadow-md`}
          >
            Professional Skills
          </button>
          <button
            onClick={Experience}
            className={` w-full py-1.5 rounded-md bg-[#EAEAEA] ${
              expreience ? "text-[#632DFC] " : "text-[#4E4E4E] "
            } font-semibold shadow-md`}
          >
            Experience
          </button>
          <button
            onClick={Certificate}
            className={` w-full py-1.5 rounded-md bg-[#EAEAEA] ${
              certificates ? "text-[#632DFC] " : "text-[#4E4E4E] "
            } font-semibold shadow-md`}
          >
            My Certificates
          </button>
        </div>
      </div>
      {/* resume work end here */}

      <div className=" w-full">
        {education && <EducationComponent />}
        {skills && <SkillsComponent />}
        {expreience && <ExpreienceComponent />}
        {certificates && <CertificatesComponent />}
      </div>
    </div>
  );
};

export default Resume;
