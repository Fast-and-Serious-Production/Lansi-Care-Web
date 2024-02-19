"use client";
import React from "react";
import SessionAuth from "../../components/SessionAuth";
import Sidebar from "../../components/content/Sidebar";
import Headers from "../../components/content/Headers";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { useSession } from "next-auth/react";
import MainDashboard from "../../components/content/MainDashboard";

export default function InsightPages() {
  const { data: session }: any = useSession();

  return (
    <>
      {!session ? (
        <>
          <section className=" w-full flex justify-center items-center h-screen">
            <Link href="/admin/dashboard/login" className="px-3 rounded-lg text-white bg-darkBlue group py-3 max-w-xl">
              Login untuk melanjutkan
            </Link>
          </section>
        </>
      ) : (
        <div>
          <SessionAuth />
          <div className="flex">
            <Sidebar />

            <div className="max-w-full w-3/4 ml-64 mt-6">
              <Headers name="DASHBOARD" />
              <div className="max-w-lg absolute right-0 top-0 mx-4">
                <p className=" text-base font-medium text-white bg-gray-800 py-4 px-5 rounded-full w-full mt-7 text-center">Logged in! : {session.user?.email}</p>
              </div>
              <MainDashboard />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// InsightPages.requireAuth = true;
