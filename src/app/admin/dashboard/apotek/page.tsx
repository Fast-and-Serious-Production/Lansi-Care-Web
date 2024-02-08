import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";
import SessionAuth from "../../components/SessionAuth";

export default function ApotekPage() {
  return (
    <div>
      <SessionAuth />;
    </div>
  );
}

ApotekPage.requireAuth = true;
