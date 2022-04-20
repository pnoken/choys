import axios from "axios";
import { getAuth } from "firebase/auth";

const auth = getAuth();
const user = auth?.currentUser;
console.log("user", user);

// const refresh =
//   typeof window !== "undefined" ? localStorage.getItem("refresh") : null;

let headers = {};

headers.Authorization = `Bearer ${user.accessToken}`;

const axiosInstance = axios.create({
  baseURL: "https://us-central1-choys-a2612.cloudfunctions.net/api",
  timeout: 10000,
  headers,
});

// const saveToken = (access, refresh) => {
//   localStorage.setItem("access", access);
//   localStorage.setItem("refresh", refresh);
// };

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    //Reject promise if error

    if (error.response.status === 401) {
      return Promise.reject(error);
    }
  }
);

axiosInstance.interceptors.request.use(
  (request) => request,
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
