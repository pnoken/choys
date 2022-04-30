import React, { useEffect } from "react";
import Chart from "chart.js";

export default function UserStats() {
  useEffect(() => {
    const chartOptions = {
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      tooltips: {
        enabled: false,
      },
      elements: {
        point: {
          radius: 0,
        },
      },
      scales: {
        xAxes: [
          {
            gridLines: false,
            scaleLabel: false,
            ticks: {
              display: false,
            },
          },
        ],
        yAxes: [
          {
            gridLines: false,
            scaleLabel: false,
            ticks: {
              display: false,
              suggestedMin: 0,
              suggestedMax: 10,
            },
          },
        ],
      },
    };
    window.myLine = new Chart(document.getElementById("chart1"), {
      type: "line",
      data: {
        labels: [1, 2, 1, 3, 5, 4, 7],
        datasets: [
          {
            backgroundColor: "rgba(101, 116, 205, 0.1)",
            borderColor: "rgba(101, 116, 205, 0.8)",
            borderWidth: 2,
            data: [1, 2, 1, 3, 5, 4, 7],
          },
        ],
      },
      options: chartOptions,
    });

    window.myLine = new Chart(document.getElementById("chart2"), {
      type: "line",
      data: {
        labels: [2, 3, 2, 9, 7, 7, 4],
        datasets: [
          {
            backgroundColor: "rgba(246, 109, 155, 0.1)",
            borderColor: "rgba(246, 109, 155, 0.8)",
            borderWidth: 2,
            data: [2, 3, 2, 9, 7, 7, 4],
          },
        ],
      },
      options: chartOptions,
    });

    window.myLine = new Chart(document.getElementById("chart3"), {
      type: "line",
      data: {
        labels: [2, 5, 1, 3, 2, 6, 7],
        datasets: [
          {
            backgroundColor: "rgba(246, 153, 63, 0.1)",
            borderColor: "rgba(246, 153, 63, 0.8)",
            borderWidth: 2,
            data: [2, 5, 1, 3, 2, 6, 7],
          },
        ],
      },
      options: chartOptions,
    });
  });
  return (
    <div className="relative bg-regal-blue md:pt-32 pb-12 pt-12">
      <div className="px-4 md:px-10 mx-auto w-full">
        <div className="-mx-2 md:flex">
          <div className="w-full md:w-1/3 px-2">
            <div className="rounded-lg shadow-sm mb-4">
              <div className="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden">
                <div className="px-3 pt-8 pb-10 text-center relative z-10">
                  <h4 className="text-sm uppercase text-gray-500 leading-tight">
                    Users
                  </h4>
                  <h3 className="text-3xl text-gray-700 font-semibold leading-tight my-3">
                    3,682
                  </h3>
                  <p className="text-xs text-green-500 leading-tight">
                    ▲ 57.1%
                  </p>
                </div>
                <div className="absolute bottom-0 inset-x-0">
                  <canvas id="chart1" height="70"></canvas>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-2">
            <div className="rounded-lg shadow-sm mb-4">
              <div className="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden">
                <div className="px-3 pt-8 pb-10 text-center relative z-10">
                  <h4 className="text-sm uppercase text-gray-500 leading-tight">
                    Subscribers
                  </h4>
                  <h3 className="text-3xl text-gray-700 font-semibold leading-tight my-3">
                    11,427
                  </h3>
                  <p className="text-xs text-red-500 leading-tight">▼ 42.8%</p>
                </div>
                <div className="absolute bottom-0 inset-x-0">
                  <canvas id="chart2" height="70"></canvas>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-2">
            <div className="rounded-lg shadow-sm mb-4">
              <div className="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden">
                <div className="px-3 pt-8 pb-10 text-center relative z-10">
                  <h4 className="text-sm uppercase text-gray-500 leading-tight">
                    Comments
                  </h4>
                  <h3 className="text-3xl text-gray-700 font-semibold leading-tight my-3">
                    8,028
                  </h3>
                  <p className="text-xs text-green-500 leading-tight">▲ 8.2%</p>
                </div>
                <div className="absolute bottom-0 inset-x-0">
                  <canvas id="chart3" height="70"></canvas>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
