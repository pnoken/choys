import withAuth from "../components/PrivateRoute";
import Admin from "../components/Layout/Admin";
import dynamic from "next/dynamic";
import Preloader from "../components/preloader";
import { useState, useEffect } from "react";
import axiosInstance from "../utils/axiosconfig";
import { formatDateTime } from "../utils/shared";

const StravaCard = dynamic(() => import("../components/Cards/StravaStats"), {
  loading: () => (
    <div>
      <Preloader />
    </div>
  ),
});

export default function Analytics() {
  const [distance, setDistance] = useState([]);
  const [date, setDate] = useState([]);
  useEffect(() => {
    let totalDistance = [];
    let timestamp = [];
    const getAthleteActivities = () => {
      axiosInstance
        .get("/athlete/activities")
        .then(function (response) {
          for (let dataObj of response.data) {
            totalDistance.push(dataObj.distance);
            timestamp.push(formatDateTime(dataObj.start_date));
          }
          setDistance(totalDistance);
          setDate(timestamp);
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
          {distance && distance.length > 0 && (
            <StravaCard
              distance={distance}
              date={date}
              // average_speed={average_speed}
              // average_heartrate={average_heartrate}
              // location_country={location_country}
            />
          )}
        </div>
        <div className="w-full lg:w-4/12 px-1"></div>
      </div>
    </>
  );
}

Analytics.layout = withAuth(Admin);
