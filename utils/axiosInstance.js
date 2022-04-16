import axios from "axios";
import { getAuth } from "firebase/auth";

const auth = getAuth();
console.log("auth", auth);
const user = auth?.currentUser;
console.log("current user", user);

const refresh =
  typeof window !== "undefined" ? localStorage.getItem("strava_refresh") : null;

let headers = {};

headers.Authorization = `Bearer ${user?.accessToken}`;

const axiosInstance = axios.create({
  baseURL: "https://us-central1-choys-a2612.cloudfunctions.net/api",
  timeout: 10000,
  headers,
});

const saveToken = (access, refresh) => {
  localStorage.setItem("access", access);
  localStorage.setItem("refresh", refresh);
};

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    //Reject promise if error

    if (error.response.status === 401) {
      return axios
        .post(
          `https://www.strava.com/oauth/token?client_id=80223&client_secret=bf4429450ccce439035180d52b46801d0ef64147&refresh_token=${refresh}&grant_type=refresh_token`
        )
        .then((response) => {
          const { access_token, refresh_token } = response.data;
          saveToken(access_token, refresh_token);
          error.response.config.headers["Authorization"] =
            "Bearer " + access_token;
          return axios(error.response.config);
        })
        .catch((error) => {
          localStorage.removeItem("access");
          localStorage.removeItem("refresh");
          return Promise.reject(error);
        });
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
