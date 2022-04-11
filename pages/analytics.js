import withAuth from "../components/PrivateRoute";
import Admin from "../components/Layout/Admin";
import { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosconfig";
import StravaCard from "../components/Cards/StravaStats";

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
        <div className="w-full px-1">
          {data && data.length > 0 ? (
            data.map((stravadata) => {
              const {
                distance,
                average_speed,
                average_heartrate,
                location_country,
              } = stravadata;
              return (
                <StravaCard
                  distance={distance}
                  average_speed={average_speed}
                  average_heartrate={average_heartrate}
                  location_country={location_country}
                />
              );
            })
          ) : (
            <div>No Data found</div>
          )}
        </div>
        <div className="w-full lg:w-4/12 px-1"></div>
      </div>
    </>
  );
}

Analytics.layout = withAuth(Admin);
