"use client";

import React from "react";

export default function Homepage() {
  return (
    <>
      <section>
        <div className="w-96 h-96 px-9 py-7 bg-zinc-100 flex-col justify-start items-center gap-5 inline-flex">
          <div className="w-96 h-96 relative">
            <div className="w-96 h-96 left-[0.41px] top-0 absolute bg-slate-50 rounded-lg shadow" />
            <div className="w-96 h-6 px-10 left-0 top-[45.07px] absolute flex-col justify-start items-start inline-flex">
              <div className="self-stretch text-neutral-800 text-5xl font-bold font-['Roboto'] leading-normal">Home</div>
            </div>
            <div className="w-96 h-80 left-[34.64px] top-[136.07px] absolute bg-zinc-300 rounded-3xl">
              <div className="origin-top-left rotate-180 w-5 h-5 left-[39.12px] top-[163.50px] absolute"></div>
              <div className="w-5 h-5 left-[1248.08px] top-[151.25px] absolute"></div>
              <div className="w-5 h-5 left-[1324.39px] top-[143.50px] absolute"></div>
            </div>
          </div>
          <div className="w-96 h-80 relative">
            <div className="w-96 h-80 left-[0.41px] top-0 absolute bg-slate-50 rounded-lg shadow" />
            <div className="w-96 h-10 pr-11 pt-4 left-0 top-[17.76px] absolute bg-slate-50 justify-start items-center gap-2 inline-flex">
              <div className="w-96 px-10 flex-col justify-start items-start inline-flex">
                <div className="self-stretch text-neutral-800 text-lg font-medium font-['Roboto'] leading-normal">Fitur-fitur</div>
              </div>
              <div className="pl-2 pr-1 py-0.5 rounded border border-neutral-800 justify-start items-center gap-0.5 flex">
                <div className="text-neutral-800 text-xs font-normal font-['Roboto'] leading-none">See Details</div>
                <div className="w-3 h-3 relative" />
              </div>
            </div>
            <div className="w-96 h-60 px-12 left-0 top-[57.76px] absolute bg-slate-50 flex-col justify-center items-center gap-2 inline-flex">
              <div className="w-96 justify-start items-center gap-9 inline-flex">
                <div className="w-96 rounded-md border border-black border-opacity-10 flex-col justify-start items-center inline-flex">
                  <div className="self-stretch h-36 justify-start items-start inline-flex">
                    <div className="w-96 h-36 relative bg-black bg-opacity-5">
                      <div className="w-96 h-4 left-[16px] top-[67px] absolute text-center text-neutral-800 text-xs font-normal font-['Roboto'] leading-none">Feature image</div>
                    </div>
                  </div>
                  <div className="self-stretch h-14 p-2 flex-col justify-start items-start gap-1 flex">
                    <div className="self-stretch text-neutral-800 text-base font-medium font-['Roboto'] leading-normal">Track Kesehatan</div>
                    <div className="self-stretch text-neutral-800 text-xs font-normal font-['Roboto'] leading-none">Beginner Level</div>
                  </div>
                </div>
                <div className="w-96 rounded-md border border-black border-opacity-10 flex-col justify-start items-center inline-flex">
                  <div className="self-stretch h-36 justify-start items-start inline-flex">
                    <div className="w-96 h-36 relative bg-black bg-opacity-5">
                      <div className="w-96 h-4 left-[16px] top-[67px] absolute text-center text-neutral-800 text-xs font-normal font-['Roboto'] leading-none">Feature image</div>
                    </div>
                  </div>
                  <div className="self-stretch h-14 p-2 flex-col justify-start items-start gap-1 flex">
                    <div className="self-stretch text-neutral-800 text-base font-medium font-['Roboto'] leading-normal">Resep Obat</div>
                    <div className="self-stretch text-neutral-800 text-xs font-normal font-['Roboto'] leading-none">Beginner Level</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-96 h-60 relative">
            <div className="w-96 h-60 left-[1.22px] top-0 absolute bg-slate-50 rounded-lg shadow" />
            <div className="w-96 h-10 px-10 pt-4 left-[1px] top-[17.44px] absolute justify-start items-center gap-3 inline-flex">
              <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                <div className="self-stretch text-neutral-800 text-lg font-medium font-['Roboto'] leading-normal">Komentar</div>
              </div>
              <div className="pl-2 pr-1 py-0.5 rounded border border-neutral-800 justify-start items-center gap-0.5 flex">
                <div className="text-neutral-800 text-xs font-normal font-['Roboto'] leading-none">Write a Review</div>
                <div className="w-3 h-3 relative" />
              </div>
            </div>
            <div className="w-96 h-28 px-12 left-0 top-[75.44px] absolute flex-col justify-center items-start gap-2 inline-flex">
              <div className="w-96 justify-start items-start gap-2 inline-flex">
                <div className="w-56 p-3 bg-black bg-opacity-5 rounded-md flex-col justify-center items-center gap-2 inline-flex">
                  <div className="self-stretch justify-start items-center gap-1 inline-flex">
                    <div className="grow shrink basis-0 h-6 justify-start items-center gap-2 flex">
                      <div className="w-6 h-6 relative bg-black bg-opacity-10 rounded-3xl" />
                      <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                        <div className="self-stretch h-4 text-neutral-800 text-xs font-medium font-['Roboto'] leading-none">John Doe</div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-14 text-neutral-800 text-sm font-normal font-['Poppins'] leading-none">Lorem ipsum dolor sit amet</div>
                </div>
                <div className="w-56 p-3 bg-black bg-opacity-5 rounded-md flex-col justify-center items-center gap-2 inline-flex">
                  <div className="self-stretch justify-start items-center gap-1 inline-flex">
                    <div className="grow shrink basis-0 h-6 justify-start items-center gap-2 flex">
                      <div className="w-6 h-6 relative bg-black bg-opacity-10 rounded-3xl" />
                      <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                        <div className="self-stretch h-4 text-neutral-800 text-xs font-medium font-['Roboto'] leading-none">John Doe</div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-14 text-neutral-800 text-sm font-normal font-['Poppins'] leading-none">Lorem ipsum dolor sit amet</div>
                </div>
                <div className="w-56 p-3 bg-black bg-opacity-5 rounded-md flex-col justify-center items-center gap-2 inline-flex">
                  <div className="self-stretch justify-start items-center gap-1 inline-flex">
                    <div className="grow shrink basis-0 h-6 justify-start items-center gap-2 flex">
                      <div className="w-6 h-6 relative bg-black bg-opacity-10 rounded-3xl" />
                      <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                        <div className="self-stretch h-4 text-neutral-800 text-xs font-medium font-['Roboto'] leading-none">John Doe</div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-14 text-neutral-800 text-sm font-normal font-['Poppins'] leading-none">Lorem ipsum dolor sit amet</div>
                </div>
                <div className="w-56 p-3 bg-black bg-opacity-5 rounded-md flex-col justify-center items-center gap-2 inline-flex">
                  <div className="self-stretch justify-start items-center gap-1 inline-flex">
                    <div className="grow shrink basis-0 h-6 justify-start items-center gap-2 flex">
                      <div className="w-6 h-6 relative bg-black bg-opacity-10 rounded-3xl" />
                      <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                        <div className="self-stretch h-4 text-neutral-800 text-xs font-medium font-['Roboto'] leading-none">John Doe</div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-14 text-neutral-800 text-sm font-normal font-['Poppins'] leading-none">Lorem ipsum dolor sit amet</div>
                </div>
                <div className="w-56 p-3 bg-black bg-opacity-5 rounded-md flex-col justify-center items-center gap-2 inline-flex">
                  <div className="self-stretch justify-start items-center gap-1 inline-flex">
                    <div className="grow shrink basis-0 h-6 justify-start items-center gap-2 flex">
                      <div className="w-6 h-6 relative bg-black bg-opacity-10 rounded-3xl" />
                      <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                        <div className="self-stretch h-4 text-neutral-800 text-xs font-medium font-['Roboto'] leading-none">John Doe</div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-14 text-neutral-800 text-sm font-normal font-['Poppins'] leading-none">Lorem ipsum dolor sit amet</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
