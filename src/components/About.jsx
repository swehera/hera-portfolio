"use client";

const About = () => {
  return (
    <div className=" min-h-[100vh] flex flex-col items-center gap-y-2 mt-5 mb-4 px-12">
      {/* text info work */}
      <div className="flex flex-col items-center justify-center gap-y-2">
        <p className="uppercase text-[#632DFC] text-sm font-semibold">
          ABOUT ME
        </p>
        <h2 className="text-3xl font-bold text-[#4E4E4E]">
          Lutfor Rahman Hira
        </h2>
      </div>
      {/* about myself */}
      <div className=" w-full bg-white p-4 rounded-md my-3">
        <p className=" text-gray-600 text-xl">
          I am a Full Stack Web Developer with 1.5+ years of experience in
          React. I have a strong foundation in front-end & back-end development
          and I am skilled in creating user-friendly and responsive web
          applications using React and its ecosystem. I have experience working
          on a variety of projects, including building and maintaining single
          page applications, integrating with REST APIs, and implementing
          responsive design principles. I am also proficient in using tools such
          as npm, yarn, pnpm and Git for development and deployment. In addition
          to my technical skills, I am a strong communicator and team player. I
          am able to work effectively with cross-functional teams and am
          comfortable taking on new challenges and learning new technologies as
          needed.
        </p>
      </div>
    </div>
  );
};

export default About;
