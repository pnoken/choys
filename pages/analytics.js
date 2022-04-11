import withAuth from "../components/PrivateRoute";
import Admin from "../components/Layout/Admin";
import { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosconfig";

export default function Analytics() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getAthleteActivities = async () => {
      axiosInstance
        .get("/athlete/activities")
        .then(function (response) {
          console.log(response.data);
          setData(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    getAthleteActivities();
  }, []);

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-1">{/* <CardAthleteData /> */}</div>
        <div className="w-full lg:w-4/12 px-1">
          {/* <div>{data.id}</div> */}
          {data.length > 0 ? (
            <div>{data.distance}</div>
          ) : (
            <div>No Data found</div>
          )}
          {/* <div>{data.firstname}</div>
          <div>{data.lastname}</div> */}
          {/* <CardAPI redirectURI={redirectURI} authenticated={authenticated} /> */}
        </div>
      </div>
    </>
  );
}

Analytics.layout = withAuth(Admin);
