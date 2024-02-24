import React from "react";
import image1 from "@/public/X RPL 8_22_Muhammad Keefa Syawal.jpg";
import image2 from "@/public/X RPL 8_26_Naufal Nabil Ramadhan.jpg";
import image3 from "@/public/X RPL 8_30_Raisya Ramadhani Achmad.jpg";
import image4 from "@/public/X RPL 8_31_Rakha Adrian Nur Tanaya.jpg";
import Image from "next/image";
export default function AboutComponent() {
  return (
    <>
    <section>
      <div className="mt-40 mx-auto text-base-100">
        <h6 className="text-center m-1 text-xl">About us</h6>
        <h1 className="mb-20 mt-10 text-center font-bold text-6xl mx-80">InnoSync</h1>
      </div>

      <div className="relative mb-20 mt-[400px] w-full h-10 grid grid-cols-4">
        <div className="relative flex justify-center">
          <div className="absolute w-52 -top-64 hover:scale-105 transition-all group">
            <Image src={image1} alt="image" className="rounded-[6px] group-hover:ring-4 group-hover:ring-slate-300" />
            <p className="text-base font-medium hidden group-hover:block text-center mt-3">Muhammad Keefa Syawal (Hipster)</p>
          </div>
        </div>
        <div className="relative flex justify-center">
          <div className="absolute w-52 -top-32 hover:scale-105 transition-all group">
            <Image src={image2} alt="image" className="rounded-[6px] group-hover:ring-4 group-hover:ring-slate-300" />
            <p className="text-base font-medium hidden group-hover:block text-center mt-3">Naufal Nabil Ramadhan (Hacker)</p>
          </div>
        </div>
        <div className="relative flex justify-center">
          <div className="absolute w-52 -top-64 hover:scale-105 transition-all group">
            <Image src={image3} alt="image" className="rounded-[6px] group-hover:ring-4 group-hover:ring-slate-300" />
            <p className="text-base font-medium hidden group-hover:block text-center mt-3">Raisya Ramadhani Achmad (Husler)</p>
          </div>
        </div>
        <div className="relative flex justify-center">
          <div className="absolute -top-32 w-52 hover:scale-105  transition-all group">
            <Image src={image4} alt="image" className="rounded-[6px] group-hover:ring-4 group-hover:ring-slate-300" />
            <p className="text-base font-medium hidden group-hover:block text-center mt-3">Rakha Adrian Nur Tanaya (Leader)</p>
          </div>
        </div>
      </div>

      {/* deskripsi */}
      <div className="relative mx-40 h-full my-40">
        <div className="mt-10 ml-20">
          <div className="">
            <h1 className="font-bold text-5xl flex justify-start">Who</h1>
            <h3 className="break-words font-bold text-5xl text-darkBlue ml-5">are we</h3>
          </div>
          <div className="font-medium">
            <p className="text-left flex justify-normal mr-20 ml-80">
            Selamat datang di website resmi LansiCare! Kami adalah tim Lorem yang terdiri dari empat individu berbakat yang terdiri dari Rakha, sebagai ketua kami, memimpin dengan visi yang kuat serta mengarahkan tim untuk terus berkembang. Ada pula hacker kami yaitu Naufal, membawa keahlian teknis yang mendalam serta bertanggung jawab atas program yang ada. Serta ada Raisya, hustler kami, memiki keterampilan komunikasi dan negosiasi yang luar biasa, dan ada pula Keefa, hipster kreatif, menambahkan sentuhan estetika yang unik, sehingga membawa kesan megah kepada tim kami. 
            </p>
            <br />
            <p className="text-left flex justify-normal mr-20 ml-80">
            Kami menyediakan platform untuk memudahkan lansia dalam menjalani check-up kesehatan. Website ini dirancang untuk memberikan bantuan dengan melakukan registrasi check-up secara online sehingga mereka tidak perlu mengantre di tempat. Selain itu, kami juga menyediakan fitur dimana lansia bisa mengecek riwayat kesehatan sehingga mempermudah mereka untuk mengakses informasi kesehatan. Dengan adanya website ini, kami berharap bisa memberikan alternatif atas permasalahan yang ada, sehingga website kami memiliki manfaat bagi lingkungan sekitar.
            </p>
            <br />
            <p className="text-left flex justify-normal mr-20 ml-80">
            Kami bersatu untuk menciptakan solusi luar biasa dan menghadirkan ide-ide kreatif. Terima kasih telah berkunjung ke situs kami.
            </p>
          </div>
        </div>
      </div>
      </section>
    </>
  );
}
