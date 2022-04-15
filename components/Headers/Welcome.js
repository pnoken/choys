import React from "react";

export default function Welcome({ displayName }) {
  return (
    <>
      {/* Header */}
      <div className="relative bg-regal-blue md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div className="bg-blue-200">
            <h3>Welcome {displayName}</h3>
          </div>
        </div>
      </div>
    </>
  );
}
