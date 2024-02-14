import Link from "next/link";
import React from "react";
import RemovePatient from "./RemovePatient";
import AddDataIcons from "@/public/AddDataIcons.svg";
import Image from "next/image";

enum PasienStatus {
  Registered = "Registered",
  InProgress = "In Progress",
  Verify = "Verify",
  Done = "Done",
}

type patients = {
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

export default async function TableData() {
  try {
    // const data: patients[] = await getData();
    const { patients }: { patients: patients[] } = await getData();
    // console.log("Data dari API:", patients);

    return (
      <>
        <section className="container max-w-7xl w-ful mx-10 mt-7 block">
          <div className=" max-w-2xl">
            <form className="flex items-center">
              <label htmlFor="simple-search" className="sr-only">
                Search
              </label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
                    />
                  </svg>
                </div>
                <input type="text" id="simple-search" className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-mainBlue focus:border-mainBlue block w-full ps-10 p-2.5 " placeholder="Search data" required />
              </div>
              <button type="submit" className="p-2.5 ms-2 text-sm font-medium text-white bg-mainBlue rounded-lg border border-mainBlue hover:bg-sky-400 focus:ring-4 focus:outline-none focus:ring-blue-300 flex">
                <p className=" font-medium mr-2">Search</p>
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </form>
          </div>
          <div>
            <Link
              href={"/admin/dashboard/addPasien"}
              className="text-white flex bg-mainBlue hover:bg-sky-400 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 focus:outline-none absolute right-28 top-36"
            >
              <p className="mr-2">Add</p>
              <Image src={AddDataIcons} alt="Add Icons" width={20} />
            </Link>
          </div>
          <div className="max-w-7xl mt-8 mb-8">
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr className=" bg-mainBlue text-center text-white border-4 border-white">
                    <th scope="col" className="px-6 py-3 border-4 border-white">
                      No
                    </th>
                    <th scope="col" className="px-6 py-3 border-4 border-white">
                      User ID
                    </th>
                    <th scope="col" className="px-6 py-3 border-4 border-white">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3 border-4 border-white">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 border-4 border-white">
                      Terakhir Diubah
                    </th>
                    <th scope="col" className="px-6 py-3 border-4 border-white">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {patients.map((Data, index) => (
                    <tr key={Data._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <td scope="row" className="px-6 py-3 font-medium text-gray-900 text-xs dark:text-white text-center border-4 border-white bg-sky-200">
                        {index + 1}
                      </td>
                      <td className="px-6 py-3 border-4 border-white bg-sky-200 text-xs">{Data.nfcId}</td>
                      <td className="px-6 py-3 border-4 border-white bg-sky-200 font-semibold text-xs">{Data.nama}</td>
                      <td className="px-6 py-3 border-4 border-white bg-sky-200 text-center text-xs">{Data.pasienStatus}</td>
                      <td className="px-6 py-3 border-4 border-white bg-sky-200 text-center text-xs">{Data.updatedAt}</td>

                      <td className="px-6 py-3 border-white flex-1 border-4 bg-sky-200 justify-center">
                        <Link href={`/admin/dashboard/editPasien/${Data._id}`} className="text-white bg-green-400 hover:bg-green-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none ">
                          Edit & View
                        </Link>
                        <RemovePatient _id={Data._id} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </>
    );
  } catch (error) {
    console.log("Error loading data: ", error);
    console.log();
    return <p>Error loading data</p>;
  }
}
