import React from "react";
import Chart from "chart.js";

export default function CardActivationRate() {
  React.useEffect(() => {
    const config = {
      type: "pie",
      data: data,
    };
    const data = {
      labels: ["non-activated", "activated"],
      datasets: [
        {
          label: "Activation Rate",
          data: [86, 14],
          backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
          hoverOffset: 4,
        },
      ],
    };
    var ctx = document.getElementById("pie-chart");
    window.myBar = new Chart(ctx, config);
  }, []);

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
        <div className="rounded-t mb-0 px-4 py-3">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h2 className="text-black text-xl font-semibold">
                Activation Rate
              </h2>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          {/* Chart */}
          <div className="relative bg-blue-400 h-350-px">
            <canvas id="pie-chart"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}
