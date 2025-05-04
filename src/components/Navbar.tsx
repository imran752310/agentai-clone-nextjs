"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div>
      <nav className="bg-[#33475b]">
        <div className="flex justify-between items-center px-[1.2rem] lg:px-[2.2rem]">
          <div>
            <Link href={"/"}>
              <Image
                src={"/image/logo.png"}
                className="p-[1.5rem]"
                width={200}
                height={0}
                alt="logo"
              />
            </Link>
          </div>
          <div className="hidden md:block  ">
            <div className="flex">
              <div className=" flex gap-0 text-[14px] text-white ">
                <a
                  href=""
                  className="p-[1.3rem] font-semibold hover:bg-[#253342]"
                >
                  Agent <br /> Network
                </a>
                <a
                  href=""
                  className="p-[1.3rem] font-semibold hover:bg-[#253342]"
                >
                  Builder <br /> Network
                </a>
                <a
                  href="/About"
                  className="p-[1.3rem] font-semibold hover:bg-[#253342]"
                >
                  What <br /> Is This?
                </a>
                <a
                  href=""
                  className="p-[1.3rem] font-semibold hover:bg-[#253342]"
                >
                  Agent <br /> Builder
                </a>
              </div>
              <div className="flex gap-6 items-center font-semibold text-white">
                <a href="">
                  {" "}
                  <button className="bg-[#ff7a59] hover:bg-[#ff8469]   text-[16px] w-[8rem] p-2 rounded-sm cursor-pointer  ">
                    Sign In
                  </button>
                </a>
                <a href="">
                  {" "}
                  <button className="bg-[#ff7a59] hover:bg-[#ff8469]  text-[16px] w-[8rem] p-2 rounded-sm cursor-pointer ">
                    Sign Up
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white text-3xl">
              {isOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden px-[2.2rem] pb-4 text-white">
            <div className="flex flex-col gap-2">
              <a href="" className="py-2 font-semibold hover:bg-[#253342]">
                Agent Network
              </a>
              <a href="" className="py-2 font-semibold hover:bg-[#253342]">
                Builder Network
              </a>
              <a
                href="/About"
                className="py-2 font-semibold hover:bg-[#253342]"
              >
                What Is This?
              </a>
              <a href="" className="py-2 font-semibold hover:bg-[#253342]">
                Agent Builder
              </a>
              <a href="">
                <button className="bg-[#ff7a59] text-[16px] w-full mt-2 p-2 rounded-sm cursor-pointer">
                  Sign In
                </button>
              </a>
              <a href="">
                <button className="bg-[#ff7a59] text-[16px] w-full mt-2 p-2 rounded-sm cursor-pointer">
                  Sign Up
                </button>
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};
