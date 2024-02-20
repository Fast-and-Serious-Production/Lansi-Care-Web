"use client";

import React from "react";
import SigninImage from "@/public/SignInImageSide.png";
import Image from "next/image";

export default function SigninUser() {
  return (
    <>
    <section className="flex flex-1 flex-col min-w-full justify-center lg:px-8 align-middle h-full mt-20 bg-base-50">
        <section className=" max-w-7xl flex justify-around max-h-3xl m-auto w-full h-fit pb-12 pt-5 rounded-3xl shadow-md shadow-slate-600 bg-primary-1000">
          <main>
            <Image src={SigninImage} width={397.22} height={305.61} alt="SignIn Image" />
          </main>
          <main className="max-w-lg w-full">
            <div className="mb-5">
              <h1 className="font-extrabold text-4xl justify-center text-center mt-20 mb-10">Hi User!</h1>
              <label htmlFor="name" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-800 focus:border-black block w-full px-2.5 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Your email"
                required
              />
            </div>
            <div className="mb-5">
              <label htmlFor="password" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-800 focus:border-black block w-full px-2.5 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Your Password"
                required
              />
            </div>
            <div className="mt-24 mb-28">
              <div className="grid grid-cols-2 gap-2 mt-7">
                <button
                  type="button"
                  className="text-black hover:text-white bg-white border-2 border-black focus:outline-none hover:bg-black focus:ring-4 focus:ring-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                >
                  <p className="font-medium text-[14px]">Forgot Password?</p>
                </button>
                <button
                  type="button"
                  className="text-white hover:text-black bg-black border-2 border-black focus:outline-none hover:bg-white focus:ring-4 focus:ring-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                >
                  <p className="font-medium text-[14px]">Login</p>
                </button>
              </div>
            </div>
          </main>
        </section>
      </section>
    </>
  );
}
