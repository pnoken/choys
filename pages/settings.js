import React from "react";
import withAuth from "../components/PrivateRoute";
import Admin from "../components/Layout/Admin";
import CardSettings from "../components/Cards/CardSettings";
import CardAPI from "../components/Cards/CardAPI";

export default function Settings() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-1">
          <CardSettings />
        </div>
        <div className="w-full lg:w-4/12 px-1">
          <CardAPI />
        </div>
      </div>
    </>
  );
}

Settings.layout = withAuth(Admin);
