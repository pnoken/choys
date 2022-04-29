import React, { useEffect } from "react";
import Chart from "chart.js";

export default function StravaCard({ distance, date, getTotalDistance }) {
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

  return (
    <>
      <div className="flex items-center justify-center py-8 px-4">
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
