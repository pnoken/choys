import React, { useState } from "react";
import Link from "next/link";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase-config";
import { useRouter } from "next/router";
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

      <div className="flex justify-center px-6 my-12">
        <div className="w-full xl:w-3/4 lg:w-11/12 flex">
          <div
            className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
            style={{ backgroundImage: "url('/brand/choys.svg')" }}
          ></div>

          <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
            <div className="px-8 mb-4 text-center">
              <h3 className="pt-4 mb-2 text-2xl">Forgot Your Password?</h3>
              <p className="mb-4 text-sm text-gray-700">
                We get it, stuff happens. Just enter your email address below
                and we'll send you a link to reset your password!
              </p>
            </div>
            <form
              onSubmit={resetPw}
              className="px-8 pt-6 pb-8 mb-4 bg-white rounded"
            >
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Email Address..."
                />
              </div>
              <div className="mb-6 text-center">
                {loading ? (
                  <button
                    className="w-full px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline"
                    type="submit"
                    disabled
                  >
                    Resetting Password...
                  </button>
                ) : (
                  <button
                    className="w-full px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Reset Password
                  </button>
                )}
              </div>
              <hr className="mb-6 border-t" />
              <div className="text-center">
                <Link href={"/auth/signup"}>
                  <a className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800">
                    Create an Account!
                  </a>
                </Link>
              </div>
              <div className="text-center">
                <Link href={"/auth/login"}>
                  <a className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800">
                    Already have an account? Login!
                  </a>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

ForgotPassword.layout = Auth;
