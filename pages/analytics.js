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
  const currentMonth = new Date().getMonth().toString();
  const [distance, setDistance] = useState([]);
  const [date, setDate] = useState([]);
  const [filteredYear, setFilteredYear] = useState(currentYear);
  const [filteredMonth, setFilteredMonth] = useState(currentMonth);
  const [totalDistance, setTotalDistance] = useState(0);
  const [noAuth, setNoAuth] = useState(false);
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
        if (error.response) {
          console.log(error.response.data.message);
          console.log(error.response.status);
          if (error.response.status >= 400) {
            setNoAuth(true);
          }
          console.log(error.response.headers);
        }
      });
  };

  const months = [
    { key: "0", month: "Jan" },
    { key: "1", month: "Feb" },
    { key: "2", month: "Mar" },
    { key: "3", month: "Apr" },
  ];

  useEffect(() => {
    getAthleteActivities();
  }, [filteredYear]);

  //filter data
  const filterData = (stravaData) => {
    const hey = stravaData.filter((data) => {
      let y = new Date(data.start_date).getFullYear().toString();
      let m = new Date(data.start_date).getMonth().toString();
      console.log("m", m);
      return y === filteredYear;
    });

    return hey;
  };
  //Write strava data to database

  const yearChangeHandler = (e) => {
    setFilteredYear(e.target.value);
  };

  const monthChangeHandler = (e) => {
    setFilteredMonth(e.target.value);
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
        <div className="relative bg-regal-blue md:pt-32 pb-12 pt-12">
          <div className="px-4 md:px-10 mx-auto w-full">
            {!noAuth && (
              <div className="flex items-center justify-between py-8 px-4">
                <h3 className="text-gray-600 dark:text-gray-400 leading-5 text-base md:text-xl font-bold">
                  Total Distance Covered: {totalDistance.toFixed(2)}m
                </h3>
                <div className="bg-gray-100 dark:bg-gray-700 ease-in duration-150 hover:bg-gray-200 pb-2 pt-1 px-3 rounded-sm">
                  <label>Month</label>
                  <select
                    className="text-xs text-gray-600 dark:text-gray-400 focus:outline-none"
                    value={filteredMonth}
                    onChange={monthChangeHandler}
                  >
                    {months.map((month) => {
                      <option
                        key={month.key}
                        className="leading-1"
                        value={month.key}
                      >
                        {month.month}
                      </option>;
                    })}
                  </select>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 ease-in duration-150 hover:bg-gray-200 pb-2 pt-1 px-3 rounded-sm">
                  <label>Year</label>
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
            )}
          </div>
        </div>

        <div className="w-full px-1">
          {distance && distance.length > 0 ? (
            <StravaCard
              distance={distance}
              date={date}
              getTotalDistance={getTotalDistance}
            />
          ) : noAuth ? (
            <div className="flex items-center justify-between py-8 px-4">
              <h1>Strava Data not available. Please Authenticate</h1>

              <img
                src="/api_providers/btn_strava_connectwith_orange.png"
                alt="authenticated with Strava"
                onClick={() => router.push("/settings")}
              />
            </div>
          ) : (
            <div>No data found for year {filteredYear}</div>
          )}
        </div>
      </div>
    </>
  );
}

Analytics.layout = withAuth(User);
