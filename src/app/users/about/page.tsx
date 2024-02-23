"use client";
import React from "react";

import NavBar from "../component/NavBar";
import InBar from "../component/InBar";
import { useSession } from "next-auth/react";
import AboutComponent from "../component/AboutComponent";

export default function AboutPage() {
  const { data: session } = useSession();

  return (
    <>
      <div>
        {!session ? <NavBar /> : <InBar />}

        <AboutComponent />
      </div>
      </section>
    </>
  );
}
