"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import React from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  return (
    <>
      <div className="flex flex-1 flex-col min-w-full justify-center lg:px-8 align-middle h-full">
        <div className="bg-gray-800/30 max-w-xl max-h-3xl m-auto w-full h-fit pb-12 pt-5 rounded-lg">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-start text-3xl font-bold leading-9 tracking-tight text-white font-inter">Login</h2>
            <p className=" mt-4 text-white font-inter text-base">Login for LansiCare admin panel</p>
            <hr className=" fill-white my-5" />
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm font-inter">
            <div className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                    className="block w-full rounded-md bg-white/5 py-2.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:shadow-sm outline-none focus:shadow-white focus:ring-white sm:text-sm sm:leading-6 border-2 border-white placeholder:text-white placeholder:text-sm"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                    Password
                  </label>
                  {/* <div className="text-sm">
                    <div onClick={() => router.push("/admin/dashboard/forgot-password")} className="cursor-pointer font-semibold text-indigo-400 hover:text-indigo-300">
                      Forgot password?
                    </div>
                  </div> */}
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                    className="block w-full rounded-md bg-white/5 py-2.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:shadow-sm outline-none focus:shadow-white focus:ring-white sm:text-sm sm:leading-6 border-2 border-white placeholder:text-white placeholder:text-sm"
                  />
                </div>
              </div>
              <div className="flex items-start mb-5">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    required
                  />
                </div>
                <label htmlFor="remember" className="ms-2 text-sm font-medium text-white">
                  I agree with <span className=" font-bold">Tearms and Condition </span>
                </label>
              </div>

              <div>
                <button
                  onClick={() => signIn("credentials", { email, password, redirect: true, callbackUrl: "/admin/dashboard/insight" })}
                  disabled={!email || !password}
                  className="flex w-full justify-center rounded-md bg-indigo-700 px-3 py-2.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer focus:ring-4 focus:ring-indigo-600"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
