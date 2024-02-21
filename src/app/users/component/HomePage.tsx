"use client";

import React from "react";
import Image from "next/image";

export default function Homepage() {
  return (
    <>
      <section>
        <div className="bg-base-50 font-inter h-full justify-center align-middle pt-[100px] pb-[30px] mx-auto flex flex-col place-items-center">
          <div className="w-[1367px] h-[481px] mt-[30px] mx-[35] bg-slate-50 rounded-[10px] shadow-md flex">
            <div className="w-96 h-6 px-10 flex-col justify-start items-start inline-flex mt-[45px]">
              <div className="self-stretch text-neutral-800 text-5xl font-bold leading-normal">Home</div>
            </div>   
          </div>

          <div className="w-[1366.48px] h-[325.04px] mt-[20px] mx-[35] bg-slate-50 rounded-[10px] shadow-md">
          </div>

          <div className="w-[1366.48px] h-[233.31px] mt-[20px] mx-[35] bg-slate-50 rounded-[10px] shadow-md">
          </div>

        </div>
      </section>
    </>
  );
}
