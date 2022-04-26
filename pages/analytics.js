import withAuth from "../components/PrivateRoute";
import User from "../components/Layout/User";
import dynamic from "next/dynamic";
import Preloader from "../components/preloader";
import { useState, useEffect } from "react";
import axiosInstance from "../utils/axiosStrava";
import { formatDateTime } from "../utils/shared";
import { useRouter } from "next/router";
import { getAuth } from "firebase/auth";

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
  const router = useRouter();
  useEffect(() => {
    const auth = getAuth();
    const userId = auth?.currentUser.uid;
    console.log("user id", userId);
    let totalDistance = [];
    let timestamp = [];
    const getAthleteActivities = () => {
      axiosInstance
        .get("/athlete/activities")
        .then(function (response) {
          for (let dataObj of response.data) {
            totalDistance.unshift(dataObj.distance);
            timestamp.unshift(formatDateTime(dataObj.start_date));
          }
          setDistance(totalDistance);
          setDate(timestamp);
        })
        .then(() => {
          writeUserData(userId, distance, date);
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    getAthleteActivities();
  }, []);

  //Write strava data to database

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-1">
          {distance && distance.length > 0 ? (
            <StravaCard distance={distance} date={date} />
          ) : (
            <div>
              <h1>Strava Data not available. Please Authenticate</h1>

              <img
                src="/api_providers/btn_strava_connectwith_orange.png"
                alt="authenticated with Strava"
                onClick={() => router.push("/settings")}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

Analytics.layout = withAuth(User);
