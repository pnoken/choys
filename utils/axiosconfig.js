import axios from "axios";
import { useRouter } from "next/router";

const axiosInt = axios.create({
  baseURL: "https://www.strava.com/api",
  timeout: 10000,
});

// const access = localStorage.getItem("access_token")

const reqHandler = (req) => {
  req.headers.Authorization = `Bearer ${localStorage?.access}`;
  return req;
};

const resHandler = async (res) => {
  const router = useRouter();
  if (res.status === 401) {
    // const access = await refreshToken();
    router.push("/auth/login");
  }

  return res;
};

const errorHandler = (error) => {
  return Promise.reject(error);
};

axiosInt.interceptors.request.use(
  (req) => reqHandler(req),
  (error) => errorHandler(error)
);

axiosInt.interceptors.response.use(
  (res) => resHandler(res),
  (error) => errorHandler(error)
);

export default axiosInt;
