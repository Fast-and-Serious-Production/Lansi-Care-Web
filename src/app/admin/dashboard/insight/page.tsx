import React from "react";
import SessionAuth from "../../components/SessionAuth";
import Sidebar from "../../components/content/Sidebar";
import Headers from "../../components/content/Headers";

export default function InsightPages() {
  return (
    <div>
      <SessionAuth />
      <div className="flex">
        <Sidebar />
        <div className="max-w-full w-3/4 ml-64">
          <Headers name="DASHBOARD" />
        </div>
      </div>
    </div>
  );
}

InsightPages.requireAuth = true;
