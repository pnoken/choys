import React, { useState } from "react";
import { createPopper } from "@popperjs/core";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase-config";
import Link from "next/link";
import { onAuthStateChanged } from "firebase/auth";

const UserDropdown = ({}) => {
  const [user, setUser] = React.useState("");
  const logout = async () => {
    await signOut(auth);
  };

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
      <a
        className="text-blueGray-500"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <div className="items-center flex">
          <span className="w-12 h-12 text-sm text-black bg-blue-200 inline-flex items-center justify-center rounded-full">
            {/* <img
              alt="..."
              className="w-full rounded-full align-middle border-none shadow-lg"
              src="/user/team-1-800x800.jpg"
            /> */}
            <span>{user?.displayName?.substring(1, 0)}</span>
          </span>
        </div>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <div className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">
          <p>Logged in as:</p>
          {user?.email}
        </div>
        <div className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">
          Organization:
          <Link href="/settings">
            <a className="text-blue-700">
              <p>Add Organization</p>
            </a>
          </Link>
        </div>
        <Link href="/settings">
          <a
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 hover:text-blue-700"
            }
          >
            My Account
          </a>
        </Link>
        <Link href="/support">
          <a
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 hover:text-blue-700"
            }
          >
            Support
          </a>
        </Link>
        <Link href="/releases">
          <a
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 hover:text-blue-700"
            }
          >
            Release Notes
          </a>
        </Link>
        <div className="h-0 my-2 border border-solid border-blueGray-100" />

        <button
          onClick={logout}
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 hover:text-blue-700"
          }
        >
          Signout
        </button>
      </div>
    </>
  );
};

export default UserDropdown;
