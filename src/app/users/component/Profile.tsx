"use client";

import Image from 'next/image';
import React from 'react'
import Imgaeprofile from "@/public/userdefault.png"

export default function Profile() {
  return (
    <section className="flex flex-1 flex-col min-w-full justify-center lg:px-8 align-middle h-full mt-20 bg-base-50 font-inter">
        <div className=''>
    <div className="w-[1438px] h-[1149px] px-[35px] py-[17px] bg-zinc-100 flex-col justify-start items-start gap-2.5 inline-flex">
  <div className="w-[1417.48px] h-[1085.03px] relative">
    <div className="w-[1370px] h-[711.72px] left-0 top-[0.98px] absolute bg-slate-50 rounded-[10px] shadow" />
    <div className="w-[86px] h-[22px] pl-2 pr-1 py-[3px] left-[1247px] top-[524.41px] absolute rounded border border-black justify-start items-center gap-0.5 inline-flex">
      <div className="text-black text-xs font-normal font-['Roboto'] leading-none">See Details</div>
      <div className="w-3 h-3 relative" />
    </div>
    <div className="w-[1370px] h-[336.86px] left-0 top-[748.17px] absolute bg-slate-50 rounded-[10px] shadow" />
    <div className="w-[1370px] h-[336px] left-0 top-0 absolute bg-gradient-to-r from-blue-200 to-cyan-700 rounded-tl-[10px] rounded-tr-[10px]" />
    <div className="w-[1370px] h-[41.73px] pr-3 pt-4 left-[47.48px] top-[37.05px] absolute justify-start items-center gap-[23px] inline-flex">
      <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
        <div className="self-stretch text-black text-5xl font-bold font-['Roboto'] leading-normal">Profile</div>
      </div>
    </div>
    <div className="w-[300px] h-[313px] left-[47.48px] top-[168.13px] absolute justify-center items-center gap-[60px] inline-flex">
      <Image className="w-[300px] h-[300px] rounded-[150px] border-4 border-slate-50" src={Imgaeprofile} width={300} height={300} alt=''/>
    </div>
    <div className="w-[1346.55px] h-[125.20px] left-[47.48px] top-[515.41px] absolute"><span className="text-black text-[32px] font-semibold font-['Roboto'] leading-10 tracking-wider">Muhammad Keefa Syawal<br/></span><span className="text-black text-xl font-medium font-['Roboto'] leading-10 tracking-wide">NFC ID:<br/>NIK: </span></div>
    <div className="w-[1304px] h-10 pt-4 left-[35px] top-[763px] absolute justify-start items-center gap-3 inline-flex">
      <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
        <div className="self-stretch text-black text-2xl font-medium font-['Roboto'] leading-normal">Riwayat Penyakit</div>
      </div>
      <div className="pl-2 pr-1 py-[3px] rounded border border-black justify-start items-center gap-0.5 flex">
        <div className="text-black text-xs font-normal font-['Roboto'] leading-none">See Details</div>
        <div className="w-3 h-3 relative" />
      </div>
    </div>
    <div className="w-[1284px] h-[247px] left-[43px] top-[821px] absolute flex-col justify-center items-start gap-2 inline-flex">
      <div className="w-[1343px] justify-start items-center gap-2 inline-flex">
        <div className="w-[150px] rounded-md border border-black border-opacity-10 flex-col justify-start items-center inline-flex">
          <div className="self-stretch h-[150px] justify-start items-start inline-flex">
            <div className="w-[150px] h-[150px] px-4 bg-black bg-opacity-5 justify-center items-center flex">
              <div className="w-[118px] h-4 text-center text-black text-[10px] font-normal font-['Roboto'] leading-none">Feature image</div>
            </div>
          </div>
          <div className="self-stretch h-[60px] p-2 flex-col justify-start items-start gap-1 flex">
            <div className="self-stretch text-black text-base font-medium font-['Roboto'] leading-normal">Asma</div>
            <div className="self-stretch text-black text-xs font-normal font-['Roboto'] leading-none">Beginner Level</div>
          </div>
        </div>
        <div className="w-[150px] rounded-md border border-black border-opacity-10 flex-col justify-start items-center inline-flex">
          <div className="self-stretch h-[150px] justify-start items-start inline-flex">
            <div className="w-[150px] h-[150px] px-4 bg-black bg-opacity-5 justify-center items-center flex">
              <div className="w-[118px] h-4 text-center text-black text-[10px] font-normal font-['Roboto'] leading-none">Feature image</div>
            </div>
          </div>
          <div className="self-stretch h-[60px] p-2 flex-col justify-start items-start gap-1 flex">
            <div className="self-stretch text-black text-base font-medium font-['Roboto'] leading-normal">Batuk</div>
            <div className="self-stretch text-black text-xs font-normal font-['Roboto'] leading-none">Beginner Level</div>
          </div>
        </div>
        <div className="w-[150px] rounded-md border border-black border-opacity-10 flex-col justify-start items-center inline-flex">
          <div className="self-stretch h-[150px] justify-start items-start inline-flex">
            <div className="w-[150px] h-[150px] px-4 bg-black bg-opacity-5 justify-center items-center flex">
              <div className="w-[118px] h-4 text-center text-black text-[10px] font-normal font-['Roboto'] leading-none">Feature image</div>
            </div>
          </div>
          <div className="self-stretch h-[60px] p-2 flex-col justify-start items-start gap-1 flex">
            <div className="self-stretch text-black text-base font-medium font-['Roboto'] leading-normal">Pilek</div>
            <div className="self-stretch text-black text-xs font-normal font-['Roboto'] leading-none">Beginner Level</div>
          </div>
        </div>
        <div className="w-[150px] rounded-md border border-black border-opacity-10 flex-col justify-start items-center inline-flex">
          <div className="self-stretch h-[150px] justify-start items-start inline-flex">
            <div className="w-[150px] h-[150px] px-4 bg-black bg-opacity-5 justify-center items-center flex">
              <div className="w-[118px] h-4 text-center text-black text-[10px] font-normal font-['Roboto'] leading-none">Feature image</div>
            </div>
          </div>
          <div className="self-stretch h-[60px] p-2 flex-col justify-start items-start gap-1 flex">
            <div className="self-stretch text-black text-base font-medium font-['Roboto'] leading-normal">Gamon</div>
            <div className="self-stretch text-black text-xs font-normal font-['Roboto'] leading-none">Beginner Level</div>
          </div>
        </div>
        <div className="w-[150px] rounded-md border border-black border-opacity-10 flex-col justify-start items-center inline-flex">
          <div className="self-stretch h-[150px] justify-start items-start inline-flex">
            <div className="w-[150px] h-[150px] px-4 bg-black bg-opacity-5 justify-center items-center flex">
              <div className="w-[118px] h-4 text-center text-black text-[10px] font-normal font-['Roboto'] leading-none">Feature image</div>
            </div>
          </div>
          <div className="self-stretch h-[60px] p-2 flex-col justify-start items-start gap-1 flex">
            <div className="self-stretch text-black text-base font-medium font-['Roboto'] leading-normal">Kangen</div>
            <div className="self-stretch text-black text-xs font-normal font-['Roboto'] leading-none">Beginner Level</div>
          </div>
        </div>
        <div className="w-[150px] rounded-md border border-black border-opacity-10 flex-col justify-start items-center inline-flex">
          <div className="self-stretch h-[150px] justify-start items-start inline-flex">
            <div className="w-[150px] h-[150px] px-4 bg-black bg-opacity-5 justify-center items-center flex">
              <div className="w-[118px] h-4 text-center text-black text-[10px] font-normal font-['Roboto'] leading-none">Feature image</div>
            </div>
          </div>
          <div className="self-stretch h-[60px] p-2 flex-col justify-start items-start gap-1 flex">
            <div className="self-stretch text-black text-base font-medium font-['Roboto'] leading-normal">Coding</div>
            <div className="self-stretch text-black text-xs font-normal font-['Roboto'] leading-none">Beginner Level</div>
          </div>
        </div>
        <div className="w-[150px] rounded-md border border-black border-opacity-10 flex-col justify-start items-center inline-flex">
          <div className="self-stretch h-[150px] justify-start items-start inline-flex">
            <div className="w-[150px] h-[150px] px-4 bg-black bg-opacity-5 justify-center items-center flex">
              <div className="w-[118px] h-4 text-center text-black text-[10px] font-normal font-['Roboto'] leading-none">Feature image</div>
            </div>
          </div>
          <div className="self-stretch h-[60px] p-2 flex-col justify-start items-start gap-1 flex">
            <div className="self-stretch text-black text-base font-medium font-['Roboto'] leading-normal">Coding</div>
            <div className="self-stretch text-black text-xs font-normal font-['Roboto'] leading-none">Beginner Level</div>
          </div>
        </div>
        <div className="w-[150px] rounded-md border border-black border-opacity-10 flex-col justify-start items-center inline-flex">
          <div className="self-stretch h-[150px] justify-start items-start inline-flex">
            <div className="w-[150px] h-[150px] px-4 bg-black bg-opacity-5 justify-center items-center flex">
              <div className="w-[118px] h-4 text-center text-black text-[10px] font-normal font-['Roboto'] leading-none">Feature image</div>
            </div>
          </div>
          <div className="self-stretch h-[60px] p-2 flex-col justify-start items-start gap-1 flex">
            <div className="self-stretch text-black text-base font-medium font-['Roboto'] leading-normal">Coding</div>
            <div className="self-stretch text-black text-xs font-normal font-['Roboto'] leading-none">Beginner Level</div>
          </div>
        </div>
        <div className="w-[150px] rounded-md border border-black border-opacity-10 flex-col justify-start items-center inline-flex">
          <div className="self-stretch h-[150px] justify-start items-start inline-flex">
            <div className="w-[150px] h-[150px] px-4 bg-black bg-opacity-5 justify-center items-center flex">
              <div className="w-[118px] h-4 text-center text-black text-[10px] font-normal font-['Roboto'] leading-none">Feature image</div>
            </div>
          </div>
          <div className="self-stretch h-[60px] p-2 flex-col justify-start items-start gap-1 flex">
            <div className="self-stretch text-black text-base font-medium font-['Roboto'] leading-normal">Coding</div>
            <div className="self-stretch text-black text-xs font-normal font-['Roboto'] leading-none">Beginner Level</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="h-[35px] pl-[9px] justify-end items-center inline-flex">
    <div className="w-[97px] self-stretch px-2 py-[3px] rounded border border-black justify-center items-center gap-0.5 inline-flex">
      <div className="text-black text-xs font-normal font-['Roboto'] leading-none">Edit Profile</div>
      <div className="w-3 h-3 relative" />
    </div>
  </div>
</div>
</div>
    </section>
  );
}
