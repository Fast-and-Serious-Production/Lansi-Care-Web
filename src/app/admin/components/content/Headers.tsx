"use client";

import React from "react";

export default function Headers(state: any) {
  return (
    <>
      <section>
        <div className=" ml-9">
          <h5 className=" text-xl font-bold text-cyanBlue font-inter">Admin Panel</h5>
          <h1 className=" text-4xl font-bold text-black font-inter mt-6">{state.name}</h1>
        </div>
      </section>
    </>
  );
}
