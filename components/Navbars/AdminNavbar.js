import React from "react";
import UserDropdown from "../Dropdowns/UserDropdown.js";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase-config";

export default function Navbar() {
  const [user, setUser] = React.useState("");

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
        <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
          {/* Brand */}
          <a
            className="text-grey-50 text-sm mr-2 hidden lg:inline-block font-semibold"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
          >
            Dashboard
          </a>
          <a
            className="text-grey-50 text-sm mr-2 hidden lg:inline-block font-semibold"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
          >
            Habits Reminder
          </a>
          <a
            className="text-grey-50 text-sm mr-2 hidden lg:inline-block font-semibold"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
          >
            Events
          </a>
          <a
            className="text-grey-50 text-sm mr-2 hidden lg:inline-block font-semibold"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
          >
            <img src="admin-nav/notification.svg" alt="notification" />
          </a>
          <a
            className="text-grey-50 text-sm mr-2 hidden lg:inline-block font-semibold"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
          >
            <img src="admin-nav/search.svg" alt="search" />
          </a>

          {/* User */}
          <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
            <UserDropdown user={user.email} />
          </ul>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
}
