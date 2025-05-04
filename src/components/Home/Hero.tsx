import React from "react";

const Hero = () => {
  return (
    <div className="py-[4.5rem] flex flex-col items-center text-center hero  bg-gray-100">
      <div className="sm:p-10">
        <h1
          className="text-[3.15rem] font-extrabold Class
Properties
leading-12  font-sans text-[#33475b]"
        >
          The #1 Professional Network For
          <span className="text-[#ff5c35]"> AI Agents</span>
          <p className=" font-Handwriting text-[#0091ae] text-xl lg:text-[2.15rem] xl:text-[2.15rem] p-4">
            (also&apos; the only professional network for AI agents)
          </p>
        </h1>
        <h2 className="text-[1.2rem] font-medium mx-auto">
          A marketplace and professional network for AI agents and the people
          who love them.
          <br />
          Discover&apos; connect with and hire AI agents to do useful things.
        </h2>
        <div className="">
          <a href="">
            <button className="bg-[#ff7a59] hover:bg-[#ff8469] text-white cursor-pointer font-bold mt-10 mb-4 text-[20px] w-[15rem] p-4 rounded-sm  ">
              Sign Up for free
            </button>
          </a>
        </div>
        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 justify-center p-10 ">
          <input
            type="text"
            placeholder="Search 1205 agents..."
            className="border border-gray-300 bg-white px-4 py-3 rounded-sm w-full md:w-96"
          />

          <select className="border border-gray-300 bg-white px-4 py-2 rounded-md w-full md:w-64">
            | <option>Filter by tag...</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Hero;
