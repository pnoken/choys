import React, { useState } from "react";
import Link from "next/link";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase-config";
import { Notification } from "../../components/Toast/Notification";
import Auth from "../../components/Layout/Auth";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");
  const [status, setStatus] = useState("");
  const resetPw = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, email).then(() => {
        setStatus("success");
        setResponse("Reset Link successfully sent to your email");
        setEmail("");
      });
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

      <div className="flex justify-center px-6 my-12">
        <div className="w-full xl:w-3/4 lg:w-11/12 flex">
          <div
            className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
            style={{ backgroundImage: "url('/brand/choys.svg')" }}
          ></div>

          <div className="relative flex flex-col min-w-0 break-words lg:w-1/2 mb-6 shadow-lg rounded-lg bg-white border-0">
            <div className="rounded-t mb-0 px-6 py-6">
              <div className="mb-6">
                <h6 className="text-blueGray-500 text-sm font-bold">
                  Forgot Password
                </h6>
              </div>
            </div>
            <form
              onSubmit={resetPw}
              className="px-8 pt-6 pb-8 mb-4 bg-white rounded"
            >
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
              <div className="text-center mt-6">
                {loading ? (
                  <button
                    type="button"
                    className="bg-blue-300 text-white active:bg-blue-600 text-sm font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                    disabled
                  >
                    Sending Reset Link...
                  </button>
                ) : (
                  <button
                    className="bg-blue-500 text-white active:bg-blue-600 text-sm font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                    type="submit"
                    disabled={!email}
                  >
                    Reset Password
                  </button>
                )}
              </div>
            </form>
            <div className="flex flex-wrap mt-6 relative mx-6">
              <div className="w-1/2">
                <Link href="/auth/signup">
                  <a className="text-blueGray-200">
                    <small>Create Account</small>
                  </a>
                </Link>
              </div>
              <div className="w-1/2 text-right">
                <Link href="/auth/login">
                  <a href="#pablo" className="text-blueGray-200">
                    <small>Login</small>
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

ForgotPassword.layout = Auth;
