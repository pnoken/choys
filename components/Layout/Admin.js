import React from "react";
import AdminNavbar from "../Navbars/AdminNavbar.js";
import Sidebar from "../Sidebar/Sidebar.js";
import UserStats from "../Headers/UserStats.js";

export default function Admin({ children }) {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-16 bg-[#EFF3F9]">
        <AdminNavbar />
        <div className="px-4 md:px-10 mx-auto w-full m-24"></div>
        {/* <UserStats /> */}
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          {children}
          {/* <FooterAdmin /> */}
        </div>
      </div>
    </>
  );
}
