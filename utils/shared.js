import moment from "moment";
import { storage } from "../firebase-config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

//On User State Change

export const formatDateTime = (date) => {
  return moment(date).format("YYYY-MM-DD HH:mm A");
};

export const delay = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const uploadFile = (
  fileName,
  selectedFile,
  setProgress,
  setDowloadableURL
) => {
  const storageRef = ref(storage, fileName);
  const uploadTask = uploadBytesResumable(storageRef, selectedFile);
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setProgress(progress);
      switch (snapshot.state) {
        case "paused":
          console.log("Upload is paused");
          break;
        case "running":
          console.log("Upload is running");
          break;
      }
    },
    (error) => {
      console.log(error);
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref)
        .then((downloadURL) => {
          setDowloadableURL(downloadURL);
        })
        .catch((error) => {
          setResponse(error.message);
        });
    }
  );
};
