"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
export default function Login() {
  const router = useRouter();
  const [error, setError] = useState("");
  // const session = useSession();
  const { data: session, status: sessionStatus } = useSession();

  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.replace("/admin/dashboard/insight");
    }
  }, [sessionStatus, router]);

  const isValidEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    console.log(email, password);
    console.log(sessionStatus);

    if (!isValidEmail(email)) {
      setError("Email is invalid");
      return;
    }

    if (!password || password.length < 8) {
      setError("Password is invalid");
      return;
    }

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError("Invalid email or password");
      if (res?.url) router.replace("/admin");
    } else {
      setError("");
    }
  };

  if (sessionStatus === "loading") {
    return <h1>Loading...</h1>;
  }
  return (
    sessionStatus !== "authenticated" && (
      <>
        <div className="flex flex-1 flex-col min-w-full justify-center lg:px-8 align-middle h-full">
          <div className="bg-gray-800/30 max-w-xl max-h-3xl m-auto w-full h-fit pb-12 pt-5 rounded-lg">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="mt-10 text-start text-3xl font-bold leading-9 tracking-tight text-white font-inter">Login</h2>
              <p className=" mt-4 text-white font-inter text-base">Login for LansiCare admin panel</p>
              <hr className=" fill-white my-5" />
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm font-inter">
              <form onSubmit={handleSubmit}>
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
                    </div>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        placeholder="Password"
                        required
                        className="block w-full rounded-md bg-white/5 py-2.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:shadow-sm outline-none focus:shadow-white focus:ring-white sm:text-sm sm:leading-6 border-2 border-white placeholder:text-white placeholder:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-indigo-700 px-3 py-2.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer focus:ring-4 focus:ring-indigo-600 mb-4"
                    >
                      Login
                    </button>

                    <p className="text-red-600 text-sm mb-4">{error && error}</p>
                    <Link className="text-white text-sm font-inter hover:text-blue-300" href="/admin/dashboard/register">
                      Register to create account
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    )
  );
}
