"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import RemovePatient from "./RemovePatient";
import AddDataIcons from "@/public/AddDataIcons.svg";
import Image from "next/image";
// Import InputSearch if it's available
import InputSearch from "../utilities/InputSearch";

enum PasienStatus {
  Registered = "Registered",
  InProgress = "In Progress",
  Verify = "Verify",
  Done = "Done",
}

type Patient = {
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

export default function TableData() {
  const [searchInput, setSearchInput] = useState<string>("");
  const [patients, setPatients] = useState<Patient[]>([]);
  const [filteredPatients, setFilteredPatients] = useState<Patient[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { patients }: { patients: Patient[] } = await getData();
        setPatients(patients);
        setFilteredPatients(patients);
      } catch (error) {
        console.log("Error loading data: ", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Filter patients based on searchInput
    const filtered = patients.filter((patient) => patient.nfcId?.toString().includes(searchInput) || patient.nama?.toString().includes(searchInput));
    setFilteredPatients(filtered);
  }, [searchInput, patients]);

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  return (
    <>
      <section className="container max-w-7xl w-full mx-10 mt-7 block">
        <div className="max-w-2xl">
          {/* Pass the search input state and change handler to InputSearch */}
          <InputSearch searchInput={searchInput} handleSearchInputChange={handleSearchInputChange} />
        </div>
        <div>
          <Link href={"/admin/dashboard/addPasien"} className="text-white flex bg-mainBlue hover:bg-sky-400 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 focus:outline-none absolute right-28 top-36">
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
                {filteredPatients.map((Data, index) => (
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
}
