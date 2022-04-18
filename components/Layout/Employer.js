import React from "react";
import AdminNavbar from "../Navbars/AdminNavbar.js";
import EmployerSidebar from "../Sidebar/Employer";
import HeaderStats from "../Headers/HeaderStats.js";

export default function Admin({ children }) {
  return (
    <>
      <EmployerSidebar />
      <div className="relative md:ml-16 bg-[#EFF3F9]">
        <AdminNavbar />
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          {children}
          {/* <FooterAdmin /> */}
        </div>
      </div>
    </>
  );
}
