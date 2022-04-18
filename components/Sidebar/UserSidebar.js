import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import UserDropdown from "../Dropdowns/UserDropdown.js";

export default function UserSidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  const router = useRouter();
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0  md:flex-row md:flex-nowrap shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-24 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <Link href="/">
            <a className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0">
              <img src="brand/choys.svg" alt="choys logo" />
            </a>
          </Link>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              {/* <NotificationDropdown /> */}
            </li>
            <li className="inline-block relative">
              <UserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link href="/">
                    <a className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0">
                      <img src="brand/choys.svg" alt="choys logo" />
                    </a>
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>

            <ul className="md:flex-col md:min-w-full flex flex-col list-none p-4">
              <li className="items-center">
                <Link href="/">
                  <a
                    className={
                      "text-xs flex uppercase py-3 font-bold block " +
                      (router.pathname.indexOf("/") !== -1
                        ? "text-blue-500 hover:text-blue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                  >
                    <img src="sidebar-icons/home.svg" alt="home" />
                    <span className="md:hidden ml-2 text-lg">Home</span>
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/calendar">
                  <a
                    className={
                      "text-xs flex uppercase py-3 font-bold block " +
                      (router.pathname.indexOf("/calendar") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                  >
                    <img src="sidebar-icons/calendar.svg" alt="calendar" />
                    <span className="md:hidden ml-2 text-lg">Calendar</span>
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/benefits">
                  <a
                    className={
                      "text-xs flex uppercase py-3 font-bold block " +
                      (router.pathname.indexOf("/benefits") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                        clipRule="evenodd"
                      />
                      <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
                    </svg>
                    <span className="md:hidden ml-2 text-lg">Benefits</span>
                  </a>
                </Link>
              </li>

              {/* <li className="items-center">
                <Link href="/play">
                  <a
                    className={
                      "text-xs flex uppercase py-3 font-bold block " +
                      (router.pathname.indexOf("/play") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                  >
                    <img src="sidebar-icons/play.svg" alt="play activity" />
                    <span className="md:hidden ml-2 text-lg">Activity</span>
                  </a>
                </Link>
              </li> */}
              <li className="items-center">
                <Link href="/analytics">
                  <a
                    className={
                      "text-xs flex uppercase py-3 font-bold block " +
                      (router.pathname.indexOf("/stats") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                  >
                    <img src="sidebar-icons/stats.svg" alt="stats" />
                    <span className="md:hidden ml-2 text-lg">Analytics</span>
                  </a>
                </Link>
              </li>
              <li className="items-center">
                <Link href="/library">
                  <a
                    className={
                      "text-xs flex uppercase py-3 font-bold block " +
                      (router.pathname.indexOf("/messages") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                      />
                    </svg>
                    <span className="md:hidden ml-2 text-lg">Library</span>
                  </a>
                </Link>
              </li>
              <li className="items-center">
                <Link href="/settings">
                  <a
                    className={
                      "text-xs flex uppercase py-3 font-bold block " +
                      (router.pathname.indexOf("/settings") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                  >
                    <img src="sidebar-icons/settings.svg" alt="settings" />
                    <span className="md:hidden ml-2 text-lg">Settings</span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
