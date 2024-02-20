"use client";

import Link from "next/link";
import React from "react";

export default function AuthBar() {
  return (
    <>
      <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <Link href={"/users/signup"} className="block py-2 px-3  group">
          <svg width="18" className=" block mx-auto" height="19" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.19737 2.8289C5.8748 2.8289 4.80264 3.90106 4.80264 5.22363C4.80264 6.54621 5.8748 7.61837 7.19737 7.61837C8.51995 7.61837 9.59211 6.54621 9.59211 5.22363C9.59211 3.90106 8.51995 2.8289 7.19737 2.8289ZM3.69737 5.22363C3.69737 3.29064 5.26438 1.72363 7.19737 1.72363C9.13037 1.72363 10.6974 3.29064 10.6974 5.22363C10.6974 7.15663 9.13037 8.72363 7.19737 8.72363C5.26438 8.72363 3.69737 7.15663 3.69737 5.22363Z"
              className=" fill-black group-hover:fill-Navbar-Hover"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.6974 2.27626C10.6974 1.97105 10.9448 1.72363 11.25 1.72363L14.1974 1.72363C14.5026 1.72363 14.75 1.97105 14.75 2.27626C14.75 2.58147 14.5026 2.8289 14.1974 2.8289L11.25 2.8289C10.9448 2.8289 10.6974 2.58147 10.6974 2.27626Z"
              className=" fill-black group-hover:fill-Navbar-Hover"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.7237 4.30273C12.4185 4.30273 12.1711 4.05531 12.1711 3.7501L12.1711 0.802734C12.1711 0.497524 12.4185 0.250103 12.7237 0.250103C13.0289 0.250103 13.2763 0.497524 13.2763 0.802734L13.2763 3.7501C13.2763 4.05531 13.0289 4.30273 12.7237 4.30273Z"
              className=" fill-black group-hover:fill-Navbar-Hover"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.08292 11.6567C3.08931 10.6083 4.71708 9.82886 7.19737 9.82886C9.67766 9.82886 11.3054 10.6083 12.3118 11.6567C13.3048 12.691 13.6447 13.9381 13.6447 14.8025C13.6447 15.1078 13.3973 15.3552 13.0921 15.3552H1.30263C0.997422 15.3552 0.75 15.1078 0.75 14.8025C0.75 13.9381 1.08996 12.691 2.08292 11.6567ZM1.91361 14.2499H12.4811C12.3692 13.6911 12.0834 13.0147 11.5145 12.4221C10.7525 11.6283 9.43287 10.9341 7.19737 10.9341C4.96187 10.9341 3.64227 11.6283 2.88024 12.4221C2.31135 13.0147 2.02552 13.6911 1.91361 14.2499Z"
              className=" fill-black group-hover:fill-Navbar-Hover"
            />
          </svg>
          <p className="text-gray-900 text-[12px] rounded hover:bg-gray-100 md:hover:bg-transparent group-hover:md:text-Navbar-Hover md:p-0 group-hover:md:dark:text-Navbar-Hover dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
            Sign Up
          </p>
        </Link>
        <Link href={"/users/signin"} className="block py-2 px-3  group">
          <svg width="18" className=" block mx-auto" height="19" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.75 8.15614C0.75 7.85875 0.991077 7.61768 1.28846 7.61768H10.6218C10.9192 7.61768 11.1603 7.85875 11.1603 8.15614C11.1603 8.45352 10.9192 8.6946 10.6218 8.6946H1.28846C0.991077 8.6946 0.75 8.45352 0.75 8.15614Z"
              className=" fill-black group-hover:fill-Navbar-Hover"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.36924 4.18579C7.57953 3.97551 7.92046 3.97551 8.13074 4.18579L11.6697 7.72476C11.908 7.96308 11.908 8.34948 11.6697 8.5878L8.13074 12.1268C7.92046 12.3371 7.57953 12.3371 7.36924 12.1268C7.15896 11.9165 7.15896 11.5756 7.36924 11.3653L10.5782 8.15628L7.36924 4.94729C7.15896 4.73701 7.15896 4.39607 7.36924 4.18579Z"
              className=" fill-black group-hover:fill-Navbar-Hover"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.3227 1.45521C10.3227 1.15783 10.5638 0.916748 10.8612 0.916748H14.1398C14.4768 0.916748 14.7501 1.18997 14.7501 1.527V14.7851C14.7501 15.1222 14.4768 15.3954 14.1398 15.3954H10.3825C10.0851 15.3954 9.84407 15.1543 9.84407 14.8569C9.84407 14.5595 10.0851 14.3185 10.3825 14.3185H13.6731V1.99367H10.8612C10.5638 1.99367 10.3227 1.75259 10.3227 1.45521Z"
              className=" fill-black group-hover:fill-Navbar-Hover"
            />
          </svg>
          <p className="text-gray-900 text-[12px] rounded hover:bg-gray-100 md:hover:bg-transparent group-hover:md:text-Navbar-Hover md:p-0 group-hover:md:dark:text-Navbar-Hover dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
            Sign In
          </p>
        </Link>
      </div>
    </>
  );
}
