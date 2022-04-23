import { MailIcon, XIcon } from "@heroicons/react/outline";
import { getAuth, sendEmailVerification } from "firebase/auth";
import { Fragment, useState, useEffect } from "react";

const auth = getAuth();
const user = auth.currentUser;
export default function Announcement() {
  // initialize timeLeft with the seconds prop
  const [timeLeft, setTimeLeft] = useState(0);
  const [show, setShow] = useState(true);

  const verifyAcc = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      console.log("Link sent");
      setTimeLeft(60);
    });
  };

  useEffect(() => {
    // exit early when we reach 0
    if (!timeLeft) return;

    // save intervalId to clear the interval when the
    // component re-renders
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
    // add timeLeft as a dependency to re-rerun the effect
    // when we update it
  }, [timeLeft]);

  console.log(timeLeft);
  return (
    <Fragment>
      {user?.emailVerified === "false" && show && (
        <div className="bg-indigo-600">
          <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between flex-wrap">
              <div className="w-0 flex-1 flex items-center">
                <span className="flex p-2 rounded-lg bg-indigo-800">
                  <MailIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
                <p className="ml-3 font-medium text-white truncate">
                  <span className="md:hidden">Kindly verify your email</span>
                  <span className="hidden md:inline">
                    Kindly verify your email address
                  </span>
                </p>
              </div>
              <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
                {timeLeft > 0 ? (
                  <button
                    disabled
                    className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"
                  >
                    Resend verification Link in {timeLeft}
                  </button>
                ) : (
                  <button
                    onClick={verifyAcc}
                    className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"
                  >
                    Send verification Link
                  </button>
                )}
              </div>
              <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                <button
                  type="button"
                  onClick={() => setShow(false)}
                  className="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                >
                  <span className="sr-only">Dismiss</span>
                  <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}
