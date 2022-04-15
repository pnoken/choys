import React from "react";
import AdminNavbar from "../Navbars/AdminNavbar.js";
import Welcome from "../Headers/Welcome.js";
import UserSidebar from "../Sidebar/UserSidebar.js";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase-config";

export default function User({ children }) {
  const [user, setUser] = React.useState("");

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return (
    <>
      <UserSidebar />
      <div className="relative md:ml-16 bg-[#EFF3F9]">
        <AdminNavbar />
        {/* Header */}
        <Welcome displayName={user?.displayName} />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          {children}
          {/* <FooterAdmin /> */}
        </div>
      </div>
    </>
  );
}
