import React from "react";
import Chart from "chart.js";

export default function CardKeyWords() {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-purple-700">
        <div className="rounded-t mb-0 px-4 py-3">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h2 className="text-white text-xl font-semibold">
                Key Words in their minds
              </h2>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          {/* Chart */}
          <div className="relative h-350-px">
            <div className="rounded-full w-200 bg-yellow-700 p-6 mx-2"></div>
            <div className="rounded-full w-200 bg-blue-700 p-6 mx-2"></div>
            <div className="rounded-full w-200 bg-red-700 p-6 mx-2"></div>
          </div>
        </div>
      </div>
    </>
  );
}
