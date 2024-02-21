"use client";
import React from "react";
import Profile from "../component/Profile";
import NavBar from "../component/NavBar";
import { useSession } from "next-auth/react";
import InBar from "../component/InBar";
import Link from "next/link";

export default function ProfilePage() {
  const { data: session, status: sessionStatus } = useSession();

  return (
    <>
      {!session ? (
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
      ) : (
        <div className="w-screen h-screen">
          {!session ? <NavBar /> : <InBar />}
          <Profile />
        </div>
      )}
    </>
  );
}
