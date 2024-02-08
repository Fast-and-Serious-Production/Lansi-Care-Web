import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";
import SessionAuth from "../../components/SessionAuth";

export default function DataPages() {
  return (
    <div className=" text-fuchsia-500">
      <SessionAuth />;
    </div>
  );
}

DataPages.requireAuth = true;
