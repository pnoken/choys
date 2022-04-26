import React from "react";
import UserDropdown from "../Dropdowns/UserDropdown.js";
import Nofification from "../Dropdowns/Notification.js";
import Link from "next/link";
import { BellIcon } from "@heroicons/react/outline";
import Announcement from "../Annoucement.js";

export default function Navbar() {
  const [search, setSearch] = React.useState(false);
  const [openNotfication, setOpenNotification] = React.useState(false);
  return (
    <>
      {openNotfication && (
        <Nofification setOpenNotification={setOpenNotification} />
      )}
      {/* Navbar */}
      <Announcement />
      <nav className="absolute left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
        <div className="w-full mx-auto items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
          {/* Brand */}

          <Link href="/dashboard">
            <a className="text-grey-50 text-sm mr-2 hidden lg:inline-block font-semibold">
              Dashboard
            </a>
          </Link>
          <Link href="/habits-reminder">
            <a className="text-grey-50 text-sm mr-2 hidden lg:inline-block font-semibold">
              Habits Reminder
            </a>
          </Link>
          <Link href="/events">
            <a className="text-grey-50 text-sm mr-2 hidden lg:inline-block font-semibold">
              Events
            </a>
          </Link>
          <a className="text-grey-50 text-sm mr-2 hidden lg:inline-block font-semibold">
            <button
              type="button"
              className="ml-auto flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">View notifications</span>
              <BellIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </a>

          {!search && (
            <i
              className="fas fa-search hidden lg:inline-block"
              onClick={() => setSearch(true)}
            ></i>
          )}
          {/* </span> */}
          {search && (
            <form
              // onMouseOut={() => setSearch(false)}
              className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3"
            >
              <div className="relative flex w-full flex-wrap items-stretch">
                <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                  <i className="fas fa-search"></i>
                </span>
                <input
                  type="text"
                  placeholder="Search here..."
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
                />
              </div>
            </form>
          )}

          {/* User */}
          <ul className="flex-col md:flex-row list-none cursor-grab items-center hidden md:flex">
            <UserDropdown />
          </ul>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
}
