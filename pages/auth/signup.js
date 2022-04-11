import React, { useState } from "react";
import Auth from "../../components/Layout/Auth";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../../firebase-config";
import { useRouter } from "next/router";
import { Notification } from "../../components/Toast/Notification";
import Link from "next/link";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");
  const [status, setStatus] = useState("");
  const register = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      if (user) {
        if (user) {
          setStatus("success");
          sendEmailVerification(auth.currentUser);
          setResponse(
            `Successfully signed up as ${user.user.email}. Check your inbox to confirm`
          );
        }
      }
    } catch (err) {
      setStatus("error");
      setResponse(err.message);
    }
    setLoading(false);
  };
  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0">
              {response && <Notification message={response} status={status} />}
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="mb-6">
                  <h6 className="text-blueGray-500 text-sm font-bold">
                    Sign Up
                  </h6>
                </div>

                {/* <hr className="mt-6 border-b-1 border-blueGray-300" /> */}
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form onSubmit={register}>
                  <div className="relative w-full mb-3 border-b border-black py-2">
                    <label
                      className="block text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                      placeholder="Email"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="relative w-full mb-3 border-b border-black py-2">
                    <label
                      className="block text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                      placeholder="Password"
                      required
                      minLength="6"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div>
                    <label class="block text-gray-500 font-bold my-4 flex items-center">
                      <input
                        class="leading-loose text-pink-600 top-0"
                        type="checkbox"
                        required
                      />
                      <span class="ml-2 text-sm py-2 text-gray-600 text-left">
                        Accept the{" "}
                        <a
                          href="#"
                          class="font-semibold text-black border-b-2 border-gray-200 hover:border-gray-500"
                        >
                          Terms and Conditions of Choys{" "}
                        </a>
                        and{" "}
                        <a
                          href="#"
                          class="font-semibold text-black border-b-2 border-gray-200 hover:border-gray-500"
                        >
                          the information data policy.
                        </a>
                      </span>
                    </label>
                  </div>

                  <div className="text-center mt-6">
                    {loading ? (
                      <button
                        type="button"
                        className="bg-blue-300 text-white active:bg-blue-600 text-sm font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                        disabled
                      >
                        Signing Up...
                      </button>
                    ) : (
                      <button
                        className="bg-blue-500 text-white active:bg-blue-600 text-sm font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                        type="submit"
                        disabled={!email || !password}
                      >
                        Sign Up
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-wrap mt-6 relative">
              <div className="w-1/2">
                <small>Already have an account?</small>
              </div>
              <div className="w-1/2 text-right">
                <Link href="/auth/login">
                  <a className="text-blueGray-200">
                    <small>login</small>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Register.layout = Auth;
