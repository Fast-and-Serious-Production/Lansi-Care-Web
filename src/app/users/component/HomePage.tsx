"use client";

import React from "react";
import Image from "next/image";
import TrackingKesehatan from "@/public/track-kesehatan-contoh.jpg";
import ResepObat from "@/public/obat-contoh.jpg";

export default function Homepage() {
  return (
    <>
    {/* Home Carousel */}
      <section className="text-base-100">
        <div className="bg-base-50 font-inter h-full justify-center align-middle pt-[100px] pb-[30px] mx-auto flex flex-col place-items-center">
          <div className="w-[1367px] h-[500px] mt-[30px] mx-[35] bg-primary-1000 rounded-[10px] shadow-md flex">
            <div className="w-96 h-6 px-10 flex-col justify-start items-start inline-flex mt-[45px]">
              <div className="self-stretch text-neutral-800 text-5xl font-bold leading-normal">Home</div>
            </div>   
          </div>

          {/* Fitur-fitur */}
          <div className="w-[1366.48px] h-[420px] mt-[20px] mx-[35] bg-primary-1000 rounded-[10px] shadow-md">
            <div className="w-96 h-6 px-10 mt-[33px] flex-col justify-start items-start inline-flex">
              <div className="self-stretch text-neutral-800 text-xl font-semibold leading-normal">Fitur-fitur</div>
            </div>

            <div className="relative">
            <div className="w-[86px] h-[22px] pl-2 pr-1 py-0.5 rounded border border-neutral-800 justify-start items-start absolute top-0 right-[45px] inline-flex flex-col">
              <button className="text-neutral-800 text-xs font-normal ">See Details</button>
              <div className="w-3 h-3 relative" />
            </div>

            <div className="mt-5 ml-10 flex space-x-10 grid-cols-2">
              <div className="max-w-sm max-h-sm bg-primary-1000 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                      <Image className="rounded-t-lg" src={TrackingKesehatan} alt="foto" />
                  </a>
                  <div className="p-5">
                      <a href="#">
                          <h5 className="mb-2 text-[16px] font-medium tracking-tight text-base-100 dark:text-white">Track Kesehatan</h5>
                      </a>
                      <p className="mb-3 font-normal text-[12px] text-base-100 dark:text-gray-400">Lacak Kesehatanmu Disini</p>
                  </div>
              </div>

              <div className="max-w-sm max-h-sm bg-primary-1000 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                      <Image className="rounded-t-lg" src={TrackingKesehatan} alt="foto"/>
                  </a>
                  <div className="p-5">
                      <a href="#">
                          <h5 className="mb-2 text-[16px] font-medium tracking-tight text-base-100 dark:text-white">Resep Obat</h5>
                      </a>
                      <p className="mb-3 font-normal text-[12px] text-base-100 dark:text-gray-400">Lihat Resep Obatmu Disini</p>
                  </div>
            </div>
            </div>
            </div>
          </div>

          {/* Komentar */}
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
