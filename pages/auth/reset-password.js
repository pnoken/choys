import React, { useState } from "react";
import Link from "next/link";
import Auth from "../../components/Layout/Auth";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase-config";
import { useRouter } from "next/router";
import { Notification } from "../../components/Toast/Notification";

export default function Login() {
  const [email, setEmail] = useState("");
  const [cEmail, setCEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");
  const [status, setStatus] = useState("");
  const router = useRouter();
  const login = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const user = await sendPasswordResetEmail(auth, email);
      if (user) {
        console.log(user);
        setStatus("success");
        setResponse(`Reset Link sent to ${user}`);
      }
    } catch (err) {
      console.log(err.message);
      setStatus("error");
      setResponse(err.message);
    }
    setLoading(false);
  };
  return (
    <>
      {response && <Notification message={response} status={status} />}
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="mb-6">
                  <h6 className="text-blueGray-500 text-sm font-bold">
                    Reset Password
                  </h6>
                </div>

                {/* <hr className="mt-6 border-b-1 border-blueGray-300" /> */}
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form onSubmit={login}>
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
                      Confirm Email Address
                    </label>
                    <input
                      type="email"
                      className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                      placeholder="Email"
                      required
                      onChange={(e) => setCEmail(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span className="ml-2 text-sm font-semibold text-blueGray-600">
                        Remember me
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
                        Resetting Password...
                      </button>
                    ) : (
                      <button
                        className="bg-blue-500 text-white active:bg-blue-600 text-sm font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                        type="submit"
                        disabled={!email || !cEmail}
                      >
                        Resett Password
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Login.layout = Auth;
