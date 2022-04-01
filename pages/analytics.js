import withAuth from "../components/PrivateRoute";
import Admin from "../components/Layout/Admin";
import { useEffect } from "react";
import axiosInstance from "../utils/axiosconfig";

export default function Analytics() {
  useEffect(() => {
    const getAthleteActivities = async () => {
      axiosInstance
        .get("/athlete/activities")
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    getAthleteActivities();
  });

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-1">{/* <CardSettings /> */}</div>
        <div className="w-full lg:w-4/12 px-1">
          {/* <CardAPI redirectURI={redirectURI} authenticated={authenticated} /> */}
        </div>
      </div>
    </>
  );
}

Analytics.layout = withAuth(Admin);
