import withAuth from "../components/PrivateRoute";
import User from "../components/Layout/User";
import dynamic from "next/dynamic";
import Preloader from "../components/preloader";
import { useState, useEffect } from "react";
import axiosInstance from "../utils/axiosStrava";
import { formatDateTime } from "../utils/shared";
import { useRouter } from "next/router";

const StravaCard = dynamic(() => import("../components/Cards/StravaStats"), {
  loading: () => (
    <div>
      <Preloader />
    </div>
  ),
});

export default function Analytics() {
  const currentYear = new Date().getFullYear().toString();
  const [distance, setDistance] = useState([]);
  const [date, setDate] = useState([]);
  const [filteredYear, setFilteredYear] = useState(currentYear);
  const [totalDistance, setTotalDistance] = useState(0);
  const router = useRouter();

  const getAthleteActivities = () => {
    let totalDistance = [];
    let timestamp = [];
    axiosInstance
      .get("/athlete/activities")
      .then(function (response) {
        for (let dataObj of filterData(response.data)) {
          totalDistance.unshift(dataObj.distance);
          timestamp.unshift(formatDateTime(dataObj.start_date));
        }
        setDistance(totalDistance);
        setDate(timestamp);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getAthleteActivities();
  }, [filteredYear]);

  //filter data
  const filterData = (stravaData) => {
    const hey = stravaData.filter((data) => {
      let d = new Date(data.start_date).getFullYear().toString();
      return d === filteredYear;
    });

    return hey;
  };
  //Write strava data to database

  const yearChangeHandler = (e) => {
    setFilteredYear(e.target.value);
  };

  const getTotalDistance = () => {
    // if (distance.length === 0) {
    //   return;
    // }
    let totDistance = distance.reduce((prevVal, curVal) => prevVal + curVal);

    setTotalDistance(totDistance);
  };

  return (
    <>
      <div className="flex flex-wrap">
        <div className="lg:flex w-full justify-between">
          <h3 className="text-gray-600 dark:text-gray-400 leading-5 text-base md:text-xl font-bold">
            Total Distance Covered: {totalDistance.toFixed(2)}m
          </h3>
        </div>

        <div className="w-full px-1">
          <div className="bg-gray-100 dark:bg-gray-700 ease-in duration-150 hover:bg-gray-200 pb-2 pt-1 px-3 rounded-sm">
            <select
              className="text-xs text-gray-600 dark:text-gray-400 focus:outline-none"
              value={filteredYear}
              onChange={yearChangeHandler}
            >
              <option className="leading-1" value="2022">
                2022
              </option>
              <option className="leading-1" value="2021">
                2021
              </option>
            </select>
          </div>
        </div>
        <div className="w-full px-1">
          {distance && distance.length > 0 ? (
            <StravaCard
              distance={distance}
              date={date}
              filteredYear={filteredYear}
              setFilteredYear={setFilteredYear}
              getTotalDistance={getTotalDistance}
            />
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
