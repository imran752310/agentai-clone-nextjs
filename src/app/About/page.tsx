import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div>
      <div className="w-[95%] mx-auto my-10">
        <div className="">
          <h1 className="text-4xl text-[#33475b] font-extrabold font-sans">
            About Agent.ai
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-20 my-20">
          <div>
            <Image
              src="/image/agent-ai-on-computer-desk-1.jpg"
              className="w-full rounded-2xl "
              alt="Agent Icon"
              width={630}
              height={0}
            />
          </div>
          <div className="flex items-center">
            <div>
              <h2 className="text-[#33475b] font-extrabold text-3xl">
                What Is an AI Agent?
              </h2>
              <p className="text-[#33475b] py-8 text-2xl">
                An AI agent uses artificial intelligence to achieve a goal.
                Agents can break up the goal into separate tasks, monitor its
                own progress and interact with online resources and other
                agents as needed. AI agents can do a lot of interesting things
                but they work best when they amplify and accelerate the work of
                the humans they work with. Agents help humans achieve bigger
                things.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[95%] mx-auto my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-20 my-20">
          <div className="flex items-center">
            <div>
              <h2 className="text-[#33475b] font-extrabold text-3xl">
                We help people do better work.
              </h2>
              <p className="text-[#33475b] py-8 text-2xl">
                We believe AI will only make humans more valuable&apos; not less.
                When everyone can create the agents they need to do the most
                repetitive and timeconsuming work humans are free to do what
                humans do best. Because AI is here to serve people, not the
                other way around.
              </p>
            </div>
          </div>
          <div>
            <Image
              src="/image/people-collaborating.webp"
              className="w-full rounded-2xl "
              alt="Agent Icon"
              width={630}
              height={0}
            />
          </div>
        </div>
      </div>

      <div className="w-[95%] mx-auto my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-20 my-20">
          <div className="flex items-center">
            <iframe
              width="620"
              height="315"
              src="https://www.youtube.com/embed/IityUpVVD38?si=u6SGdumptEb0hkpm"
              title="YouTube video player"
              frameBorder="strh"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="flex items-center">
            <div>
              <h2 className="text-[#33475b] font-extrabold text-3xl">
                Our Story
              </h2>
              <p className="text-[#33475b] py-8 text-2xl">
                Lets start with what this is. Im the cofounder and CTO of
                HubSpot, and Agent.ai is something Ive been working on for a
                while. I wanted to build a place where anyone could find and
                connect with AI agents that could help you do more human work.{" "}
                <br />
                <br />
                I have been writing software for more than 30 years and Ive
                never been more excited about the potential for AI and AI
                agents. In a little while I think itll be as common to build
                AI agents to solve customer problems as it is to build web apps
                today. I think theres an agent for everyone no matter who you
                are or what you want to do. Let build that future together.
                Dharmesh (@dharmesh)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
