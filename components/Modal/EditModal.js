import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { PencilIcon } from "@heroicons/react/outline";
import axiosInstance from "../../utils/axiosInstance";

export default function EditProfile({ edit, setEdit, user, onEditUser }) {
  const cancelButtonRef = useRef(null);
  const [userInput, setUserInput] = useState({
    displayName: "",
    email: "",
    password: "",
    role: "",
  });

  const updateUser = (e) => {
    const { displayName, email, password, role } = userInput;
    e.preventDefault();
    axiosInstance
      .patch(`/users/${user.uid}`, {
        displayName: displayName || user.displayName,
        email: email || user.email,
        password: password || user.password,
        role: role || user.role,
      })
      .then(() => {
        onEditUser(userInput);
      })
      .then(() => setEdit(false))
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <Transition.Root show={edit} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={setEdit}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <PencilIcon
                      className="h-6 w-6 text-blue-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <Dialog.Title
                      as="h3"
                      className="text-lg leading-6 font-medium text-gray-900"
                    >
                      Edit account
                    </Dialog.Title>
                    <form action="#" method="POST" onSubmit={updateUser}>
                      <div className="shadow overflow-hidden sm:rounded-md">
                        <div className="px-4 py-5 bg-white sm:p-6">
                          <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                              <label className="block text-sm font-medium text-gray-700">
                                Photo
                              </label>
                              <div className="mt-1 flex items-center">
                                <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                                  {user.photoURL ? (
                                    <img src={user.photoURL} />
                                  ) : (
                                    <svg
                                      className="h-full w-full text-gray-300"
                                      fill="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                  )}
                                </span>
                                <button
                                  type="button"
                                  className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                  Change
                                </button>
                              </div>
                            </div>
                            <div className="col-span-6 sm:col-span-6">
                              <label
                                htmlFor="first-name"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Full Name
                              </label>
                              <input
                                type="text"
                                name="first-name"
                                defaultValue={user.displayName}
                                onChange={(e) =>
                                  setUserInput((prevState) => {
                                    return {
                                      ...prevState,
                                      displayName: e.target.value,
                                    };
                                  })
                                }
                                id="first-name"
                                autoComplete="given-name"
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>

                            <div className="col-span-6 sm:col-span-4">
                              <label
                                htmlFor="email-address"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Email address
                              </label>
                              <input
                                type="text"
                                name="email-address"
                                defaultValue={user.email}
                                onChange={(e) =>
                                  setUserInput((prevState) => {
                                    return {
                                      ...prevState,
                                      email: e.target.value,
                                    };
                                  })
                                }
                                id="email-address"
                                autoComplete="email"
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>

                            <div className="col-span-6 sm:col-span-4">
                              <label
                                htmlFor="email-address"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Password
                              </label>
                              <input
                                type="password"
                                name="password"
                                value={user.password}
                                onChange={(e) =>
                                  setUserInput((prevState) => {
                                    return {
                                      ...prevState,
                                      password: e.target.value,
                                    };
                                  })
                                }
                                id="password"
                                autoComplete="password"
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                              <label
                                htmlFor="country"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Company
                              </label>
                              <select
                                id="country"
                                name="country"
                                autoComplete="country-name"
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              >
                                <option>CHOYS</option>
                                <option>Microsoft</option>
                                <option>Facebook</option>
                              </select>
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                              <label
                                htmlFor="country"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Role
                              </label>
                              <select
                                id="country"
                                name="country"
                                autoComplete="country-name"
                                defaultValue={user.role}
                                onChange={(e) =>
                                  setUserInput((prevState) => {
                                    return {
                                      ...prevState,
                                      role: e.target.value,
                                    };
                                  })
                                }
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              >
                                <option value="admin">Admin</option>
                                <option value="manager">Manager</option>
                                <option value="user">User</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                          <button
                            type="submit"
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            Save
                          </button>
                          <button
                            type="button"
                            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                            onClick={() => setEdit(false)}
                            ref={cancelButtonRef}
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
