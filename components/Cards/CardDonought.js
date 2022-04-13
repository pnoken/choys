import React, { useEffect } from "react";
import Chart from "chart.js";

export default function CardDonought({}) {
  useEffect(() => {
    window.myLine = new Chart(document.getElementById("myChart"), {
      type: "doughnut",
      options: {
        maintainAspectRatio: false,
        responsive: true,
      },
      data: {
        labels: ["Physical", "Social", "Financial", "Mental"],
        datasets: [
          {
            label: "My First Dataset",
            data: [10, 10, 20, 60],
            backgroundColor: [
              "rgb(133, 105, 241)",
              "rgb(164, 101, 241)",
              "rgb(101, 143, 241)",
              "rgb(101, 143, 30)",
            ],
            hoverOffset: 4,
          },
        ],
      },
    });
  });
  return (
    <>
      <div className="flex items-center justify-center py-8 px-4">
        <div className="w-11/12 lg:w-2/3">
          <div className="flex flex-col justify-between h-full">
            <div>
              <div className="lg:flex w-full justify-between">
                <h3 className="text-gray-600 dark:text-gray-400 leading-5 text-base md:text-xl font-bold">
                  My Wellbeing
                </h3>
              </div>
              <div className="flex items-end mt-6">
                <div className="flex items-center md:ml-4 ml-1"></div>
              </div>
            </div>
            <div className="mt-6">
              <canvas id="myChart" width="1025" height="400" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
