"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Imageprofile from "@/public/userdefault.png";

type Pasien = {
  _id: number;
  nfcId: number;
  email: string;
  riwayatPenyakit: string;
  pasienStatus: string;
  nama: string;
  NIK: number;
  TTL: string;
  JenisKelamin: string;
  _Alamat: string;
  RT: number;
  RW: number;
  Kelurahan_Desa: string;
  Kecamatan: string;
  Agama: string;
  StatusPerkawinan: boolean;
  Pekerjaan: string;
  Kewarganegaraan: string;
  BerlakuHingga: Date;
  updatedAt: string;
};
export const getData = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

export default function Profile() {
  const [patients, setPatients] = useState<Pasien[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { patients }: { patients: Pasien[] } = await getData();
        setPatients(patients);
      } catch (error) {
        console.log("Error loading data: ", error);
      }
    };
    fetchData();
  }, []);
  return (
    <section>
      <div className="flex flex-1 flex-col max-w-full justify-center lg:px-8 align-middle h-full mt-20 font-inter bg-base-50">
        <div className="w-[1430px] h-[1149px] py-[17px] mx-auto justify-center place-items-center items-center inline-flex">
          <div className="w-[1417px] h-[1085px] relative">
            <div className="w-[1370px] h-[711.72px] left-0 top-[0.98px] absolute bg-slate-50 rounded-[10px] shadow">
              <div className="w-[1370px] h-[336px] left-0 top-0 absolute bg-gradient-to-r from-blue-200 to-cyan-700 rounded-tl-[10px] rounded-tr-[10px]" />
              <div className="w-[1370px] h-[41.73px] pr-3 pt-4 left-[47.48px] top-[37.05px] absolute justify-start items-center gap-[23px] inline-flex">
                <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                  <div className="self-stretch text-black text-5xl font-bold leading-normal">Profile</div>
                </div>
              </div>
              <div className="w-[300px] h-[313px] left-[47.48px] top-[168.13px] absolute justify-center items-center gap-[60px] inline-flex">
                <Image src={Imageprofile} className="w-[300px] h-[300px] rounded-[150px] border-4 border-slate-50" alt="Image profile" />
              </div>
              <div className="w-[1346.55px] h-[125.20px] pl-[47.48px] top-[515.41px] relative">
                {patients.map((Data) => (
                  <div key={Data._id} className="flex justify-between">
                    <div className="text-black text-[32px] font-semibold leading-10 tracking-wider mb-4">{Data.nama}</div>
                    <button type="button" className="text-black bg-white border-2 border-black hover:bg-black hover:text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 me-2 mb-2 absolute right-0 -top-36 py-2">
                      Edit Profil
                    </button>
                    <button type="button" className="text-black bg-white border-2 border-black hover:bg-black hover:text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 me-2 mb-2 absolute right-0 top-5 py-2">
                      See Details
                    </button>
                  </div>
                ))}

                <button type="button" className="text-white bg-darkBlue border-2 border-darkBlue hover:bg-white hover:text-black focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">
                  Lengkapi Profil
                </button>

                {/* <div className="text-black text-xl font-medium leading-10 tracking-wide">
                  <p className="text-base">NFC ID: {}</p>
                  <p className="text-base">NIK: </p>
                </div> */}
              </div>
            </div>
            <div className="w-[1304px] h-10 pt-4 left-[35px] top-[763px] absolute justify-start items-center gap-3 inline-flex">
              <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                <div className="self-stretch text-black text-2xl font-medium leading-normal">Riwayat Penyakit</div>
              </div>
              <button className="pl-2 pr-1 py-[3px] rounded border border-black justify-start items-center gap-0.5 flex">
                <div className="text-black text-xs font-medium leading-none">See Details</div>
              </button>
            </div>
            <main className="w-[1284px] h-[247px] left-[43px] top-[821px] absolute flex-col justify-center items-start gap-2 inline-flex">
              <div className="w-[1343px] justify-start items-center gap-2 inline-flex">
                <div className="w-[150px] rounded-md border border-black border-opacity-10 flex-col justify-start items-center inline-flex">
                  <div className="self-stretch h-[150px] justify-start items-start inline-flex">
                    <div className="w-[150px] h-[150px] px-4 bg-black bg-opacity-5 justify-center items-center flex">
                      <div className="w-[118px] h-4 text-center text-black text-[10px] font-medium leading-none">Feature image</div>
                    </div>
                  </div>
                  <div className="self-stretch h-[60px] p-2 flex-col justify-start items-start gap-1 flex">
                    <div className="self-stretch text-black text-base font-medium leading-normal">Asma</div>
                    <div className="self-stretch text-black text-xs font-medium leading-none">Beginner Level</div>
                  </div>
                </div>
                <div className="w-[150px] rounded-md border border-black border-opacity-10 flex-col justify-start items-center inline-flex">
                  <div className="self-stretch h-[150px] justify-start items-start inline-flex">
                    <div className="w-[150px] h-[150px] px-4 bg-black bg-opacity-5 justify-center items-center flex">
                      <div className="w-[118px] h-4 text-center text-black text-[10px] font-medium leading-none">Feature image</div>
                    </div>
                  </div>
                  <div className="self-stretch h-[60px] p-2 flex-col justify-start items-start gap-1 flex">
                    <div className="self-stretch text-black text-base font-medium leading-normal">Batuk</div>
                    <div className="self-stretch text-black text-xs font-medium leading-none">Beginner Level</div>
                  </div>
                </div>
                <div className="w-[150px] rounded-md border border-black border-opacity-10 flex-col justify-start items-center inline-flex">
                  <div className="self-stretch h-[150px] justify-start items-start inline-flex">
                    <div className="w-[150px] h-[150px] px-4 bg-black bg-opacity-5 justify-center items-center flex">
                      <div className="w-[118px] h-4 text-center text-black text-[10px] font-medium leading-none">Feature image</div>
                    </div>
                  </div>
                  <div className="self-stretch h-[60px] p-2 flex-col justify-start items-start gap-1 flex">
                    <div className="self-stretch text-black text-base font-medium leading-normal">Pilek</div>
                    <div className="self-stretch text-black text-xs font-medium leading-none">Beginner Level</div>
                  </div>
                </div>
                <div className="w-[150px] rounded-md border border-black border-opacity-10 flex-col justify-start items-center inline-flex">
                  <div className="self-stretch h-[150px] justify-start items-start inline-flex">
                    <div className="w-[150px] h-[150px] px-4 bg-black bg-opacity-5 justify-center items-center flex">
                      <div className="w-[118px] h-4 text-center text-black text-[10px] font-medium leading-none">Feature image</div>
                    </div>
                  </div>
                  <div className="self-stretch h-[60px] p-2 flex-col justify-start items-start gap-1 flex">
                    <div className="self-stretch text-black text-base font-medium leading-normal">Gamon</div>
                    <div className="self-stretch text-black text-xs font-medium leading-none">Beginner Level</div>
                  </div>
                </div>
                <div className="w-[150px] rounded-md border border-black border-opacity-10 flex-col justify-start items-center inline-flex">
                  <div className="self-stretch h-[150px] justify-start items-start inline-flex">
                    <div className="w-[150px] h-[150px] px-4 bg-black bg-opacity-5 justify-center items-center flex">
                      <div className="w-[118px] h-4 text-center text-black text-[10px] font-medium leading-none">Feature image</div>
                    </div>
                  </div>
                  <div className="self-stretch h-[60px] p-2 flex-col justify-start items-start gap-1 flex">
                    <div className="self-stretch text-black text-base font-medium leading-normal">Kangen</div>
                    <div className="self-stretch text-black text-xs font-medium leading-none">Beginner Level</div>
                  </div>
                </div>
                <div className="w-[150px] rounded-md border border-black border-opacity-10 flex-col justify-start items-center inline-flex">
                  <div className="self-stretch h-[150px] justify-start items-start inline-flex">
                    <div className="w-[150px] h-[150px] px-4 bg-black bg-opacity-5 justify-center items-center flex">
                      <div className="w-[118px] h-4 text-center text-black text-[10px] font-medium leading-none">Feature image</div>
                    </div>
                  </div>
                  <div className="self-stretch h-[60px] p-2 flex-col justify-start items-start gap-1 flex">
                    <div className="self-stretch text-black text-base font-medium leading-normal">Coding</div>
                    <div className="self-stretch text-black text-xs font-medium leading-none">Beginner Level</div>
                  </div>
                </div>
                <div className="w-[150px] rounded-md border border-black border-opacity-10 flex-col justify-start items-center inline-flex">
                  <div className="self-stretch h-[150px] justify-start items-start inline-flex">
                    <div className="w-[150px] h-[150px] px-4 bg-black bg-opacity-5 justify-center items-center flex">
                      <div className="w-[118px] h-4 text-center text-black text-[10px] font-medium leading-none">Feature image</div>
                    </div>
                  </div>
                  <div className="self-stretch h-[60px] p-2 flex-col justify-start items-start gap-1 flex">
                    <div className="self-stretch text-black text-base font-medium leading-normal">Coding</div>
                    <div className="self-stretch text-black text-xs font-medium leading-none">Beginner Level</div>
                  </div>
                </div>
                <div className="w-[150px] rounded-md border border-black border-opacity-10 flex-col justify-start items-center inline-flex">
                  <div className="self-stretch h-[150px] justify-start items-start inline-flex">
                    <div className="w-[150px] h-[150px] px-4 bg-black bg-opacity-5 justify-center items-center flex">
                      <div className="w-[118px] h-4 text-center text-black text-[10px] font-medium leading-none">Feature image</div>
                    </div>
                  </div>
                  <div className="self-stretch h-[60px] p-2 flex-col justify-start items-start gap-1 flex">
                    <div className="self-stretch text-black text-base font-medium leading-normal">Coding</div>
                    <div className="self-stretch text-black text-xs font-medium leading-none">Beginner Level</div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </section>
  );
}
