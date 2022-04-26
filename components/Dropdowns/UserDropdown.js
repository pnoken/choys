import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
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
  const userNavigation = [
    { name: "Logged in as:", href: "#loggedinas" },
    { name: user?.email, href: "#email" },
    { name: "Add Organization", href: "/settings" },
    { name: "Settings", href: "/settings" },
    { name: "Support", href: "/support" },
    { name: "Releases", href: "/releases" },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <>
      <Menu as="div" className="ml-3 relative">
        <div>
          <Menu.Button className="max-w-xs bg-gray-200 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-200 focus:ring-white">
            <span className="sr-only">Open user menu</span>
            <div className="h-8 w-8 rounded-full">
              {user?.displayName?.substring(1, 0)}
            </div>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            {userNavigation.map((item, i) => (
              <Menu.Item key={i}>
                {({ active }) => (
                  <Link href={item.href}>
                    <a
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700"
                      )}
                    >
                      {item.name}
                    </a>
                  </Link>
                )}
              </Menu.Item>
            ))}
            <button
              onClick={logout}
              className={classNames("block px-4 py-2 text-sm text-gray-700")}
            >
              Signout
            </button>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};

export default UserDropdown;
