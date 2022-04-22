import React, { useState } from "react";
import Link from "next/link";
import Auth from "../../components/Layout/Auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config.js";
import { useRouter } from "next/router";
import { Notification } from "../../components/Toast/Notification";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");
  const [status, setStatus] = useState("");
  const router = useRouter();
  const login = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      if (user) {
        setStatus("success");
        setResponse(`Successfully logged in as ${user.user.email}`);
        localStorage.setItem("refresh", user.user.refreshToken);
        user.user.getIdTokenResult().then((idToken) => {
          console.log("claims", idToken.claims.role);
          if (idToken.claims.role === "admin") {
            setTimeout(() => router.push("/admin"), 2000);
          } else {
            setTimeout(() => router.push("/"), 2000);
          }
        });
      }
    } catch (err) {
      setStatus("error");
      //prints error message
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
                    Sign in
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
                        Logging In...
                      </button>
                    ) : (
                      <button
                        className="bg-blue-500 text-white active:bg-blue-600 text-sm font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                        type="submit"
                        disabled={!email || !password}
                      >
                        Sign In
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-wrap mt-6 relative">
              <div className="w-1/2">
                <Link href="/auth/forgot-password">
                  <a className="text-blueGray-200">
                    <small>Forgot password? Reset</small>
                  </a>
                </Link>
              </div>
              <div className="w-1/2 text-right">
                <Link href="/auth/signup">
                  <a href="#pablo" className="text-blueGray-200">
                    <small>Create new account</small>
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

Login.layout = Auth;
