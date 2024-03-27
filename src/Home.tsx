import React from "react";

const Home = () => {
  return (
    <main className="bg-[#141414] w-full h-screen flex-grow flex items-center justify-center duration-200 ease-in-out">
      <div className="w-[25dvw] h-[70dvh] bg-[#1F1F1F] rounded-xl flex min-w-[300px] items-center justify-center gap-y-6 sm:gap-y-4 flex-col lg:w-[60dvw]">
        <div className="rounded-full bg-slate-300 w-20 h-20 overflow-clip">
          <img src="/assets/images/avatar-jessica.jpeg" alt="profile-img"></img>
        </div>
        <div className=" text-center flex flex-col gap-y-2">
          <h1 className="font-sans text-white text-2xl sm:text-xl">
            Jessica Randall
          </h1>
          <p className="text-[#C5F82A] font-sans text-sm sm:text-xs">
            London, United Kingodm
          </p>
        </div>
        <h3 className="font-sans text-gray-300 text-center text-base sm:text-sm">
          "Front-end developer and avid reader."
        </h3>
        <div className="flex flex-col gap-y-4 w-full h-[50%] items-center">
          <div className="bg-[#333333] sm:text-sm w-[80%] h-1/5 text-white font-sans font-semibold justify-center items-center flex rounded-xl hover:text-[#333333] hover:bg-[#C5F82A] duration-200 ease-in-out cursor-default">
            GitHub
          </div>
          <div className="bg-[#333333] sm:text-sm w-[80%] h-1/5 text-white font-sans font-semibold justify-center items-center flex rounded-xl hover:text-[#333333] hover:bg-[#C5F82A] duration-200 ease-in-out cursor-default">
            Frontend Mentor
          </div>
          <div className="bg-[#333333] sm:text-sm w-[80%] h-1/5 text-white font-sans font-semibold justify-center items-center flex rounded-xl hover:text-[#333333] hover:bg-[#C5F82A] duration-200 ease-in-out cursor-default">
            LinkedIn
          </div>
          <div className="bg-[#333333] sm:text-sm w-[80%] h-1/5 text-white font-sans font-semibold justify-center items-center flex rounded-xl hover:text-[#333333] hover:bg-[#C5F82A] duration-200 ease-in-out cursor-default">
            Twitter
          </div>
          <div className="bg-[#333333] sm:text-sm w-[80%] h-1/5 text-white font-sans font-semibold justify-center items-center flex rounded-xl hover:text-[#333333] hover:bg-[#C5F82A] duration-200 ease-in-out cursor-default">
            Instagram
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
