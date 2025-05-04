"use client";

import Image from "next/image";
import Heading from "../Helper/Heading";

export const FeatureAgent = [
  {
    id: 1,
    image: "/image/img-01.svg", 
    name: "By @dharmesh",
    credit: "1 credit per task",
    task: "25.2K tasks completed",
    review: "4.28 (2353 reviews)",
  },
  {
    id: 2,
    image: "/image/img-02.png",
    name: "By @dharmesh",
    credit: "1 credit per task",
    task: "25.2K tasks completed",
    review: "4.28 (2353 reviews)",
  },
  {
    id: 3,
    image: "/image/img-03.svg",
    name: "By @dharmesh",
    credit: "1 credit per task",
    task: "25.2K tasks completed",
    review: "4.28 (2353 reviews)",
  },
  {
    id: 4,
    image: "/image/img-04.svg",
    name: "By @dharmesh",
    credit: "1 credit per task",
    task: "25.2K tasks completed",
    review: "4.28 (2353 reviews)",
  },
  {
    id: 5,
    image: "/image/img-2.svg",
    name: "By @dharmesh",
    credit: "1 credit per task",
    task: "25.2K tasks completed",
    review: "4.28 (2353 reviews)",
  },{
    id: 6,
    image: "/image/img-06.svg",
    name: "By @dharmesh",
    credit: "1 credit per task",
    task: "25.2K tasks completed",
    review: "4.28 (2353 reviews)",
  },
  {
    id: 7,
    image: "/image/img-07.svg",
    name: "By @dharmesh",
    credit: "1 credit per task",
    task: "25.2K tasks completed",
    review: "4.28 (2353 reviews)",
  },
  {
    id: 8,
    image: "/image/img-08.svg",
    name: "By @dharmesh",
    credit: "1 credit per task",
    task: "25.2K tasks completed",
    review: "4.28 (2353 reviews)",
  },
];

export default function AgentMarketplace() {
  return (
    <div className="my-20">
      <Heading heading="Featured Agents" />
      <div className="lg:w-[90%] md:w-[80%] w-[100%] mx-auto grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 p-10 bg-white">
        {FeatureAgent.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow hover:shadow-lg border border-gray-200 overflow-hidden text-center"
          >

<div className="h-20 bg-green-200  insert-1 flex items-center justify-center  bg-[url('/image/network-lines.jpg')] opacity-70  bg-center relative ">
            <div className="bg-white rounded-full absolute w-30 h-30 top-6 flex items-center justify-center border border-green-700 ">
              <Image
                src={product.image}
                alt="Agent Icon"
                width={80}
                height={80}
              />
            </div>
          </div>
           
            {/* Card Content */}
            <div className="p-5 mt-16">
              <h3 className="text-lg font-bold text-gray-900">
                Company Research Agent
              </h3>
              <p className="text-gray-500 text-sm">
                <span className="font-medium">{product.name}</span>
              </p>

              <div className="text-gray-600 text-sm mt-3">
                <p>{product.credit}</p>
                <p>{product.task}</p>
              </div>

              {/* Rating Section */}
              <div className="text-gray-700 mt-2 flex items-center justify-center gap-1 text-sm font-medium">
                <span className="text-red-500 text-lg">★</span> {product.review}
              </div>

               {/* Go Button */}
            <button className="mt-4 px-6 py-1 cursor-pointer w-35 border-2 border-[#0091ae] text-[#0091ae] font-medium rounded-full hover:bg-[#0091ae] hover:text-white transition">
              Go
            </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

