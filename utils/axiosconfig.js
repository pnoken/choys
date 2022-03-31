import axios from "axios";
import { useRouter } from "next/router";

const axiosInt = axios.create({
  baseURL: "https://www.strava.com",
  timeout: 10000,
  headers: { client_id: "" },
});

const reqHandler = (req) => {
  req.headers.Authorization = "Bearer ey";
  return req;
};

const resHandler = (res) => {
  const router = useRouter();
  if (res.status === 401) {
    router.push("/auth/login");
  }

  return res;
};

const errorHandler = (error) => {
  return Promise.reject(error);
};

axiosInt.interceptors.request.use(
  (req) => resHandler(req),
  (error) => errorHandler(error)
);

axiosInt.interceptors.response.use(
  (res) => resHandler(res),
  (error) => errorHandler(error)
);

export default axiosInt;
