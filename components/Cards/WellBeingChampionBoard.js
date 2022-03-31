import React from "react";

export default function WellbeingChampionBoard() {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-purple-700">
        <div className="rounded-t mb-0 px-4 py-3">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex">
              <img src="/champion-board.svg" alt="prize" />
              <h2 className="text-white text-xl font-semibold">
                Wellbeing Champion Board
              </h2>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          {/* Chart */}
          <div className="relative flex h-350-px text-white">
            <div>
              <img
                className="rounded-full w-300 mx-2"
                src="champion-board/user1.svg"
                alt="pic"
              />

              <div className="text-center p-2">Alex</div>
            </div>
            <div>
              <img
                className="rounded-full w-300 mx-2"
                src="champion-board/user1.svg"
                alt="pic"
              />
              <div className="text-center p-2">Alex</div>
            </div>
            <div>
              <img
                className="rounded-full w-300 mx-2"
                src="champion-board/user1.svg"
                alt="pic"
              />
              <div className="text-center p-2">Alex</div>
            </div>
            <div>
              <img
                className="rounded-full w-300 mx-2"
                src="champion-board/user1.svg"
                alt="pic"
              />
              <div className="text-center p-2">Alex</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
