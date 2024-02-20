"use client";

import React from "react";
import SignupImage from "@/public/SignUpImageSide.png";
import Image from "next/image";

export default function SignUpUser() {
  return (
    <>
      <section className="flex flex-1 flex-col min-w-full justify-center lg:px-8 align-middle h-full mt-20">
        <section className=" max-w-7xl flex justify-around max-h-3xl m-auto w-full h-fit pb-12 pt-5 rounded-2xl shadow-sm shadow-slate-600">
          <main>
            <Image src={SignupImage} width={397.22} height={305.61} alt="SignUp Image" />
          </main>
          <main className="max-w-lg w-full">
            <div className="mb-5">
              <label htmlFor="name" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-800 focus:border-black block w-full px-2.5 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Your Name"
                required
              />
            </div>
            <div className="mb-5">
              <label htmlFor="email" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-800 focus:border-black block w-full px-2.5 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Your Email"
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
            <div>
              <button
                type="submit"
                className="text-white bg-black focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 max-w-full"
              >
                <p>Sign Up</p>
              </button>
              <p className="mt-8 text-base text-black font-semibold text-center ">Or Sign Up With</p>
              <div className="grid grid-cols-2 gap-2 mt-7">
                <button
                  type="button"
                  className="text-black hover:text-white bg-white border border-gray-300 focus:outline-none hover:bg-black focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                >
                  {/* image */}
                  <p className="font-medium text-[14px]">Google</p>
                </button>
                <button
                  type="button"
                  className="text-black hover:text-white bg-white border border-gray-300 focus:outline-none hover:bg-black focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                >
                  {/* image */}
                  <p className="font-medium text-[14px]">Facebook</p>
                </button>
              </div>
              <p className="text-[18px] font-semibold text-center mt-9">Already have an account?</p>
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
                  <p className="font-medium text-[14px]">Sign In</p>
                </button>
              </div>
            </div>
          </main>
        </section>
      </section>
    </>
  );
}
