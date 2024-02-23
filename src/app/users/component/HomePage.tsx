"use client";

import React from "react";
import Image from "next/image";

export default function Homepage() {
  return (
    <>
      <section className="text-base-100">
        <div className="bg-base-50 font-inter h-full justify-center align-middle pt-[100px] pb-[30px] mx-auto flex flex-col place-items-center">
          <div className="w-[1367px] h-[481px] mt-[30px] mx-[35] bg-primary-1000 rounded-[10px] shadow-md flex">
            <div className="w-96 h-6 px-10 flex-col justify-start items-start inline-flex mt-[45px]">
              <div className="self-stretch text-neutral-800 text-5xl font-bold leading-normal">Home</div>
            </div>   
          </div>

          <div className="w-[1366.48px] h-[325.04px] mt-[20px] mx-[35] bg-primary-1000 rounded-[10px] shadow-md">
            <div className="w-96 h-6 px-10 mt-[33px] flex-col justify-start items-start inline-flex">
              <div className="self-stretch text-neutral-800 text-xl font-semibold leading-normal">Fitur-fitur</div>
            </div>
            <div className="relative">
            <div className="w-[86px] h-[22px] pl-2 pr-1 py-0.5 rounded border border-neutral-800 justify-start items-start absolute top-0 right-[45px] inline-flex flex-col">
              <button className="text-neutral-800 text-xs font-normal ">See Details</button>
              <div className="w-3 h-3 relative" />
            </div>
            </div>
          </div>

          <div className="w-[1366.48px] h-[233.31px] mt-[20px] mx-[35] bg-primary-1000 rounded-[10px] shadow-md">
            <div className="w-96 h-6 px-10 mt-[33px] flex-col justify-start items-start inline-flex">
              <div className="self-stretch text-neutral-800 text-xl font-semibold leading-normal">Komentar</div>
            </div>

            <div className="relative">
            <div className="w-[105px] h-[22px] pl-2 pr-1 py-0.5 rounded border border-neutral-800 justify-start items-start absolute top-0 right-[45px] inline-flex flex-col">
              <button className="text-neutral-800 text-xs font-normal ">Write a Review</button>
              <div className="w-3 h-3 relative" />
            </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
