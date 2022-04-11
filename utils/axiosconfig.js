import axios from "axios";
import { useRouter } from "next/router";

const refresh =
  typeof window !== "undefined" ? localStorage.getItem("refresh") : null;
const access =
  typeof window !== "undefined" ? localStorage.getItem("access") : null;

let headers = {};
headers.Authorization = `Bearer ${access}`;

const axiosInstance = axios.create({
  baseURL: "https://www.strava.com/api/v3",
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
          const router = useRouter();
          // destroyToken();
          router.push("/auth/login");
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
