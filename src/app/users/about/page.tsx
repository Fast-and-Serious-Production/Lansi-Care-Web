"use client";
import React from "react";
import image1 from "@/public/X RPL 8_22_Muhammad Keefa Syawal.jpg";
import image2 from "@/public/X RPL 8_26_Naufal Nabil Ramadhan.jpg";
import image3 from "@/public/X RPL 8_30_Raisya Ramadhani Achmad.jpg";
import image4 from "@/public/X RPL 8_31_Rakha Adrian Nur Tanaya.jpg";
import Image from "next/image";
import NavBar from "../component/NavBar";
import InBar from "../component/InBar";
import { useSession } from "next-auth/react";

export default function AboutPage() {
  const { data: session } = useSession();

  return (
    <>
      <div>
        {!session ? <NavBar /> : <InBar />}

        <div className="mt-40 mx-auto">
          <h6 className="text-center m-1 text-xl">About us</h6>
          <h1 className="mb-20 mt-10 text-center font-bold text-5xl mx-80">Lorem ipsum dolor sit amet, consectetur adipisicing.</h1>
        </div>

        <div className="relative mb-20 mt-[400px] w-full h-10 grid grid-cols-4">
          <div className="relative flex justify-center">
            <div className="absolute w-52 -top-64 hover:scale-105 transition-all group">
              <Image src={image1} alt="image" className="rounded-xl group-hover:ring-4 group-hover:ring-slate-300" />
              <p className="text-base font-medium hidden group-hover:block text-center mt-3">Muhammad Keefa Syawal (Hipster)</p>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="absolute w-52 -top-32 hover:scale-105 transition-all group">
              <Image src={image2} alt="image" className="rounded-xl group-hover:ring-4 group-hover:ring-slate-300" />
              <p className="text-base font-medium hidden group-hover:block text-center mt-3">Naufal Nabil Ramadhan (Hacker)</p>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="absolute w-52 -top-64 hover:scale-105 transition-all group">
              <Image src={image3} alt="image" className="rounded-xl group-hover:ring-4 group-hover:ring-slate-300" />
              <p className="text-base font-medium hidden group-hover:block text-center mt-3">Raisya Ramadhani Achmad (Husler)</p>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="absolute -top-32 w-52 hover:scale-105  transition-all group">
              <Image src={image4} alt="image" className="rounded-xl group-hover:ring-4 group-hover:ring-slate-300" />
              <p className="text-base font-medium hidden group-hover:block text-center mt-3">Rakha Ardian Nur Tanaya (Leader)</p>
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
              <p className="text-left flex justify-end mr-20 ml-80">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, eligendi accusamus impedit, sunt excepturi tenetur odio cum et quos iste quaerat sequi molestiae aspernatur, nostrum laborum. Saepe minus mollitia magni tenetur
                necessitatibus excepturi ipsum reprehenderit beatae nesciunt quod inventore odit repellendus eum ut ipsa, placeat odio animi fugiat veniam? Iste, quis culpa fugit vitae natus quod aspernatur, dolorum fuga eaque eos aperiam
                rem et saepe modi perferendis. Blanditiis nesciunt rem qui, tempore, sapiente corrupti nulla vero amet reprehenderit dolor molestias.
              </p>
              <br />
              <p className="text-left flex justify-end mr-20 ml-80">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus esse ipsam animi, necessitatibus voluptates aut? Nobis beatae exercitationem recusandae porro reiciendis veniam ab facilis libero error explicabo
                molestiae aliquam ea nulla maiores, deleniti expedita? Suscipit accusantium quidem ab repellendus pariatur molestias reprehenderit aliquid odio totam in, officiis ex quaerat sit?
              </p>
              <br />
              <p className="text-left flex justify-end mr-20 ml-80">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit quis officia aliquam, molestiae tenetur vel est quos alias, velit eius magni voluptatem debitis labore, autem nobis quae ea nulla voluptas?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
