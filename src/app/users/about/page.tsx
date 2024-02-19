import React from "react";
import image1 from "@/public/X RPL 8_22_Muhammad Keefa Syawal.jpg"
import image2 from "@/public/X RPL 8_26_Naufal Nabil Ramadhan.jpg"
import image3 from "@/public/X RPL 8_30_Raisya Ramadhani Achmad.jpg"
import image4 from "@/public/X RPL 8_31_Rakha Adrian Nur Tanaya.jpg"
import Image from "next/image";

export default function about() {
  return <>
    <section>
      <div className="mt-40 mx-auto">
        <h6 className="text-center m-1 text-xl">About us</h6>
        <h1 className="mb-20 mt-10 text-center font-bold text-5xl mx-80">Lorem ipsum dolor sit amet, consectetur adipisicing.</h1>
      </div>

      <div className="relative mb-20 mt-10 justify-center mx-auto place-items-center max-h-full h-full grid grid-cols-4">
        <div className="relative w-52 pt-20">
        <Image src={image1} alt="image" className="rounded-xl" />
        </div>

        <div className="relative w-52">
        <Image src={image2} alt="image" className="rounded-xl"/>
        </div>

        <div className="relative w-52 pt-20">
        <Image src={image3} alt="image" className="rounded-xl"/>
        </div>

      <div className="relative w-52">
        <Image src={image4} alt="image" className="rounded-xl"/>
      </div>
      </div>

    {/* deskripsi */}
    <div className="relative mx-40 h-full my-40">
      <div className="mt-10 ml-20">
          <div className="">
            <h1 className="font-bold text-4xl flex justify-start">Who</h1>
            <h3 className="break-words font-bold text-4xl text-darkBlue ml-5">are we</h3>
          </div>
          <div>
            <p className="text-left flex justify-end mr-20 ml-80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, eligendi accusamus impedit, sunt excepturi tenetur odio cum et quos iste quaerat sequi molestiae aspernatur, nostrum laborum. Saepe minus mollitia magni tenetur necessitatibus excepturi ipsum reprehenderit beatae nesciunt quod inventore odit repellendus eum ut ipsa, placeat odio animi fugiat veniam? Iste, quis culpa fugit vitae natus quod aspernatur, dolorum fuga eaque eos aperiam rem et saepe modi perferendis. Blanditiis nesciunt rem qui, tempore, sapiente corrupti nulla vero amet reprehenderit dolor molestias.</p>
            <br />
            <p className="text-left flex justify-end mr-20 ml-80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus esse ipsam animi, necessitatibus voluptates aut? Nobis beatae exercitationem recusandae porro reiciendis veniam ab facilis libero error explicabo molestiae aliquam ea nulla maiores, deleniti expedita? Suscipit accusantium quidem ab repellendus pariatur molestias reprehenderit aliquid odio totam in, officiis ex quaerat sit?</p>
            <br />
            <p className="text-left flex justify-end mr-20 ml-80">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit quis officia aliquam, molestiae tenetur vel est quos alias, velit eius magni voluptatem debitis labore, autem nobis quae ea nulla voluptas?</p>
          </div>
      </div>
    </div>
    </section>
  </>;
}
