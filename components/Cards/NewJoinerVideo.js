import React from "react";

export default function NewJoinerVideo() {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-yellow-400">
        <div className="rounded-t mb-0 px-4 py-3">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h2 className="text-white text-xl font-semibold">
                New Joiner Video
              </h2>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          <div className="rounded-full bg-purple-700 p-14">rounded</div>
        </div>
      </div>
    </>
  );
}
