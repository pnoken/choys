import moment from "moment";

export const formatDateTime = (date) => {
  return moment(date).format("YYYY-MM-DD HH:mm A");
};

export const delay = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
