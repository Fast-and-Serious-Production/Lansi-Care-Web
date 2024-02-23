"use client";
import React, { useState } from "react";
import NavBar from "../component/NavBar";
import { useSession } from "next-auth/react";
import InBar from "../component/InBar";
import Link from "next/link";
import Imageprofile from "@/public/userdefault.png";
import Image from "next/image";
import ModalEditProfile from "../component/ModalEditProfile";
import { useRouter } from "next/navigation";

interface PatientData {
  _id: number;
  email: string;
  riwayatPenyakit: string;
  pasienStatus: string;
  nama: string;
  NIK: number;
  TTL: string;
  JenisKelamin: string;
  Alamat: string;
  RT: number;
  RW: number;
  KelurahanDesa: string;
  Kecamatan: string;
  Agama: string;
  StatusPerkawinan: boolean;
  Pekerjaan: string;
  Kewarganegaraan: string;
  BerlakuHingga: Date;
}

export const Profile = ({
  _id,
  email,
  riwayatPenyakit,
  pasienStatus,
  nama,
  NIK,
  TTL,
  JenisKelamin,
  Alamat,
  RT,
  RW,
  KelurahanDesa,
  Kecamatan,
  Agama,
  Pekerjaan,
  Kewarganegaraan,
}: {
  _id: number;
  email: string;
  riwayatPenyakit: string;
  pasienStatus: string;
  nama: string;
  NIK: number;
  TTL: string;
  JenisKelamin: string;
  Alamat: string;
  RT: number;
  RW: number;
  KelurahanDesa: string;
  Kecamatan: string;
  Agama: string;
  Pekerjaan: string;
  Kewarganegaraan: string;
}): React.ReactElement => {
  const [newNama, setNewNama] = useState(nama);
  const [newTTL, setNewTTL] = useState(TTL);
  const [newAlamat, setNewAlamat] = useState(Alamat);
  const [newRT, setNewRT] = useState(RT);
  const [newRW, setNewRW] = useState(RW);
  const [newJenisKelamin, setNewJenisKelamin] = useState(JenisKelamin);
  const [newKelurahanDesa, setNewKelurahan_desa] = useState(KelurahanDesa);
  const [newKecamatan, setNewKecamatan] = useState(Kecamatan);
  const [newNIK, setNewNIK] = useState(NIK);
  const [newEmail, setNewEmail] = useState(email);
  const [newRiwayatPenyakit, setNewRiwayatPenyakit] = useState(riwayatPenyakit);
  const [newStatus, setNewStatus] = useState(pasienStatus);
  const [newAgama, setNewAgama] = useState(Agama);
  const [newKewarganegaraan, setNewKewarganegaraan] = useState(Kewarganegaraan);
  const [newPekerjaan, setNewPekerjaan] = useState(Pekerjaan);
  const router = useRouter();
  // const [patients, setPatients] = useState<Pasiens[]>([]);
  // const [selectedPatient, setSelectedPatient] = useState<Pasiens | null>(null);
  const [isMutating, setIsMutating] = useState(false);
  const { data: session, status: sessionStatus } = useSession();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsMutating(true);

    try {
      const res = await fetch(`http://localhost:3000/api/topics/${_id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newNama, newTTL, newAlamat, newRT, newRW, newJenisKelamin, newKelurahanDesa, newKecamatan, newNIK, newEmail, newRiwayatPenyakit, newStatus, newAgama, newKewarganegaraan, newPekerjaan }),
      });

      if (!res.ok) {
        throw new Error("Failed to update Patient");
      }
      router.refresh();
      alert(`Data Uppdated!`);
      router.push("/admin/dashboard/dataPage");
    } catch (error) {
      console.log(error);
    }
  };

  return <section></section>;
};

export default function ProfilePage() {
  const { data: session, status: sessionStatus } = useSession();
  const [modal, setModal] = useState(false);
  const [isMutating, setIsMutating] = useState(false);

  return (
    <>
      {/* {!session ? (
        <>
          {!session ? <NavBar /> : <InBar />}

          <div className="flex flex-1 flex-col min-w-full justify-center lg:px-8 align-middle h-full mt-20">
            <div className="max-w-xl grid grid-cols-1 place-content-center m-auto w-full mt-52 pb-12 pt-5">
              <p className="text-xl text-center ">User is Not Authenticated!</p>
              <div className="block mx-auto w-full max-w-lg ">
                <Link href={"/users/signin"}>
                  <p className="text-black mt-5 w-full text-center px-3 py-2.5 bg-white hover:bg-black hover:text-white focus:ring-4 focus:ring-slate-300 border-2 border-black  rounded-lg text-base font-semibold">Sign In</p>
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : ( */}
      <div className="w-screen h-screen">
        {!session ? <NavBar /> : <InBar />}
        <>
          <div className=" mt-20 bg-base-50">
            <div className="flex flex-1 flex-col max-w-full justify-center lg:px-8 align-middle h-full font-inter bg-base-50">
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
                      <div className="flex justify-between">
                        <div>
                          {!session ? (
                            <div className="text-black text-[32px] font-semibold leading-10 tracking-wider mb-4">Undefined User</div>
                          ) : (
                            <div className="text-black text-[32px] font-semibold leading-10 tracking-wider mb-4">{session.user?.email}</div>
                          )}
                        </div>
                        <button
                          onClick={() => setModal(true)}
                          className="text-black bg-white border-2 border-black hover:bg-black hover:text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 me-2 mb-2 absolute right-0 -top-36 py-2"
                        >
                          Edit Profil
                        </button>
                        {/* <input checked={modal} onChange={handleChange} type="checkbox" className="modal-toggle invisible" /> */}
                        <button type="button" className="text-black bg-white border-2 border-black hover:bg-black hover:text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 me-2 mb-2 absolute right-0 top-5 py-2">
                          See Details
                        </button>
                      </div>

                      <form>
                        <ModalEditProfile isVisible={modal} onClose={() => setModal(false)}>
                          <div className="grid gap-6 md:grid-cols-2">
                            <div>
                              <label htmlFor="nama" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Nama
                              </label>
                              <input
                                type="text"
                                id="nama"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Nama"
                                required
                              />
                            </div>
                            <div>
                              <label htmlFor="NIK" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                NIK
                              </label>
                              <input
                                type="number"
                                id="NIK"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="NIK"
                                required
                              />
                            </div>
                            <div>
                              <label htmlFor="TTL" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                TTL
                              </label>
                              <input
                                type="date"
                                id="TTL"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="TTL"
                                required
                              />
                            </div>
                            <div>
                              <label htmlFor="jeniskelamin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Jenis Kelamin
                              </label>
                              <input
                                type="text"
                                id="jeniskelamin"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Jenis Kelamin"
                                required
                              />
                            </div>
                            <div>
                              <label htmlFor="alamat" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Alamat
                              </label>
                              <input
                                type="text"
                                id="alamat"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Alamat"
                                required
                              />
                            </div>
                            <div>
                              <label htmlFor="RT" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                RT
                              </label>
                              <input
                                type="number"
                                id="RT"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="RT"
                                required
                              />
                            </div>
                            <div>
                              <label htmlFor="RW" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                RW
                              </label>
                              <input
                                type="number"
                                id="RW"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="RW"
                                required
                              />
                            </div>
                            <div>
                              <label htmlFor="kelurahandesa" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Kelurahan/Desa
                              </label>
                              <input
                                type="text"
                                id="kelurahandesa"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Kelurahan/Desa"
                                required
                              />
                            </div>
                            <div>
                              <label htmlFor="kecamatan" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Kecamatan
                              </label>
                              <input
                                type="text"
                                id="kecamatan"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Kecamatan"
                                required
                              />
                            </div>
                            <div>
                              <label htmlFor="agama" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Agama
                              </label>
                              <input
                                type="text"
                                id="agama"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="agama"
                                required
                              />
                            </div>
                            <div>
                              <label htmlFor="pekerjaan" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Pekerjaan
                              </label>
                              <input
                                type="text"
                                id="pekerjaan"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Pekerjaan"
                                required
                              />
                            </div>
                            <div>
                              <label htmlFor="kewarganegaraan" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Kewarganegaraan
                              </label>
                              <input
                                type="text"
                                id="kewarganegaraan"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Kewarganegaraan"
                                required
                              />
                            </div>
                          </div>
                          {!isMutating ? (
                            <button type="button" className="text-white mt-4 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-sky-600 hover:bg-sky-700 focus:ring-sky-800">
                              Edit Profile
                            </button>
                          ) : (
                            <button type="button" className="text-white focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-sky-600 hover:bg-sky-700 focus:ring-sky-800 btn loading">
                              Updating...
                            </button>
                          )}
                        </ModalEditProfile>
                      </form>
                      {/* modal */}
                    </div>
                  </div>
                  <div className=" bg-primary-1000">
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
            </div>
          </div>
        </>
      </div>
      {/* )} */}
    </>
  );
}
