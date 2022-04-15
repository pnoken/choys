import React from "react";
import CardUsers from "../../components/Cards/CardUsers";
import Admin from "../../components/Layout/Admin";

export default function Users() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-1">
          <CardUsers />
        </div>
        <div className="w-full mb-12 px-1">
          {/* <CardTable color="dark" /> */}
        </div>
      </div>
    </>
  );
}

Users.layout = Admin;
