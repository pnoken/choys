import React, { useEffect, useState } from "react";
import Chart from "chart.js";

export default function StravaCard({ distance, date }) {
  const currentYear = new Date().getFullYear();
  const [totalDistance, setTotalDistance] = useState(0);
  const [filteredYear, setFilteredYear] = useState(currentYear);
  useEffect(() => {
    getTotalDistance();
    window.myLine = new Chart(document.getElementById("myChart"), {
      type: "line",
      options: {
        maintainAspectRatio: false,
        responsive: true,
      },
      data: {
        labels: date,
        datasets: [
          {
            label: "Distance Covered",
            borderColor: "#4A5568",
            data: distance,
            fill: false,
            pointBackgroundColor: "#4A5568",
            borderWidth: "3",
            pointBorderWidth: "4",
            pointHoverRadius: "6",
            pointHoverBorderWidth: "8",
            pointHoverBorderColor: "rgb(74,85,104,0.2)",
          },
        ],
      },
    });
  });

  const getTotalDistance = () => {
    let totDistance = distance.reduce((prevVal, curVal) => prevVal + curVal);
    setTotalDistance(totDistance);
  };

  const yearChangeHandler = (e) => {
    setFilteredYear(e.target.value);
  };
  return (
    <>
      <div className="flex items-center justify-center py-8 px-4">
        <div>
          <div className="lg:flex w-full justify-between">
            <h3 className="text-gray-600 dark:text-gray-400 leading-5 text-base md:text-xl font-bold">
              Total Distance Covered: {totalDistance.toFixed(2)}m
            </h3>
            <div className="flex items-center justify-between lg:justify-start mt-2 md:mt-4 lg:mt-0">
              <div className="lg:ml-14">
                <div className="bg-gray-100 dark:bg-gray-700 ease-in duration-150 hover:bg-gray-200 pb-2 pt-1 px-3 rounded-sm">
                  <select
                    className="text-xs text-gray-600 dark:text-gray-400 focus:outline-none"
                    value={filteredYear}
                    onChange={yearChangeHandler}
                  >
                    <option className="leading-1">Year</option>
                    <option className="leading-1" value="2022">
                      2022
                    </option>
                    <option className="leading-1" value="2021">
                      2021
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="mt-6">
            <canvas id="myChart" width="1025" height="400" />
          </div>
          <img
            src="/api_providers/api_logo_pwrdBy_strava_horiz_light.png"
            alt="powered by Strava"
          />
        </div>
      </div>
    </>
  );
}
