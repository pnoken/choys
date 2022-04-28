import axiosInstance from "./axiosInstance";

const GET = (url) => {
  return axiosInstance.get(url).catch((error) => {
    if (error.response) {
      return error.response.data;
    } else if (error.request) {
      console.log(`Error from Request: ${error.request}`);
    } else {
      console.log(`General Error ${error.message}`);
    }
  });
};

export { GET };
