import React from "react";
import SessionAuth from "../../components/SessionAuth";
import Sidebar from "../../components/content/Sidebar";
import Headers from "../../components/content/Headers";

export default function DataPages() {
  return (
    <div>
      <SessionAuth />;
      <div className="flex">
        <Sidebar />
        <div className="max-w-full w-3/4 ml-64">
          <Headers name="DATA" />
        </div>
      </div>
    </div>
  );
}

DataPages.requireAuth = true;
