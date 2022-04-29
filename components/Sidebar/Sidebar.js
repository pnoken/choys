import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import UserDropdown from "../Dropdowns/UserDropdown.js";

export default function Sidebar() {
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
              <img src="/brand/choys.svg" alt="choys logo" />
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
                      <img src="/brand/choys.svg" alt="choys logo" />
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
                <Link href="/admin">
                  <a
                    className={
                      "text-xs flex uppercase py-3 font-bold block " +
                      (router.pathname.indexOf("/admin/index") !== -1
                        ? "text-blue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                  >
                    <img src="/sidebar-icons/home.svg" alt="home" />
                    <span className="md:hidden ml-2 text-lg">Home</span>
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/admin/calendar">
                  <a
                    className={
                      "text-xs flex uppercase py-3 font-bold block " +
                      (router.pathname.indexOf("/admin/events") !== -1
                        ? "text-blue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                  >
                    <img src="/sidebar-icons/calendar.svg" alt="calendar" />
                    <span className="md:hidden ml-2 text-lg">Events</span>
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/admin/users">
                  <a
                    className={
                      "text-xs flex uppercase py-3 font-bold block " +
                      (router.pathname.indexOf("/admin/users") !== -1
                        ? "text-blue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                  >
                    <img src="/sidebar-icons/users.svg" alt="users" />
                    <span className="md:hidden ml-2 text-lg">Users</span>
                  </a>
                </Link>
              </li>
              {/* <li className="items-center">
                <Link href="/messages">
                  <a
                    className={
                      "text-xs flex uppercase py-3 font-bold block " +
                      (router.pathname.indexOf("/messages") !== -1
                        ? "text-blue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                  >
                    <img src="sidebar-icons/message.svg" alt="messages" />
                    <span className="md:hidden ml-2 text-lg">Messages</span>
                  </a>
                </Link>
              </li> */}
              {/* <li className="items-center">
                <Link href="/play">
                  <a
                    className={
                      "text-xs flex uppercase py-3 font-bold block " +
                      (router.pathname.indexOf("/play") !== -1
                        ? "text-blue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                  >
                    <img src="sidebar-icons/play.svg" alt="play activity" />
                    <span className="md:hidden ml-2 text-lg">Activity</span>
                  </a>
                </Link>
              </li> */}
              {/* <li className="items-center">
                <Link href="/analytics">
                  <a
                    className={
                      "text-xs flex uppercase py-3 font-bold block " +
                      (router.pathname.indexOf("/stats") !== -1
                        ? "text-blue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                  >
                    <img src="sidebar-icons/stats.svg" alt="stats" />
                    <span className="md:hidden ml-2 text-lg">Analytics</span>
                  </a>
                </Link>
              </li> */}
              {/* <li className="items-center">
                <Link href="/admin/settings">
                  <a
                    className={
                      "text-xs flex uppercase py-3 font-bold block " +
                      (router.pathname.indexOf("/admin/settings") !== -1
                        ? "text-blue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                  >
                    <img src="/sidebar-icons/settings.svg" alt="settings" />
                    <span className="md:hidden ml-2 text-lg">Settings</span>
                  </a>
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
