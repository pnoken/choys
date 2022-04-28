import React, { useState, useEffect } from "react";
import { onAuthStateChanged, updateProfile } from "firebase/auth";
import { Notification } from "../Toast/Notification";
import ImageUpload from "./CardImageUpload";
import uploadFile from "../../utils/shared";
import { auth } from "../../firebase-config";

export default function CardSettings() {
  const [user, setUser] = useState([]);
  const [fullName, setFullName] = useState("");
  const [response, setResponse] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const [progress, setProgress] = useState(0);
  const [downloadableURL, setDowloadableURL] = useState("");
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const filePath = selectedFile?.name;

  const updateUser = async () => {
    setLoading(true);

    updateProfile(auth.currentUser, {
      displayName: fullName ? fullName : user?.displayName,
      photoURL: downloadableURL ? downloadableURL : user?.photoURL || "",
    })
      .then(() => {
        setStatus("success");
        setResponse(`Successfully updated profile`);
        setLoading(false);
      })
      .catch((error) => {
        setStatus("error");
        setResponse(error.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files[0]);

    if (selectedFile)
      uploadFile(filePath, selectedFile, setProgress, setDowloadableURL);
  };

  return (
    <>
      {response && <Notification message={response} status={status} />}
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">My account</h6>
            {loading ? (
              <button
                className="bg-blueGray-700 active:bg-blue-600 text-black font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
                disabled
              >
                Updating
              </button>
            ) : (
              <button
                className="bg-blueGray-700 active:bg-blue-600 text-black font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
                onClick={updateUser}
              >
                Update Info
              </button>
            )}
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              User Information
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full px-4">
                <ImageUpload
                  preview={preview}
                  selectedFile={selectedFile}
                  onSelectFile={onSelectFile}
                  photo={user?.photoURL}
                  progress={progress}
                />
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow focus:outline-none w-full ease-linear transition-all duration-150"
                    readOnly
                    defaultValue="CHOYS"
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    readOnly
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow focus:outline-none w-full ease-linear transition-all duration-150"
                    defaultValue={user?.email}
                  />
                </div>
              </div>

              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Dispay Name
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue={user?.displayName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />
          </form>
        </div>
      </div>
    </>
  );
}
