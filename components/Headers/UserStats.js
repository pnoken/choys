import React from "react";
import CardStats from "../Cards/CardStats.js";

export default function UserStats() {
  return (
    <>
      {/* Header */}
      <div className="relative bg-regal-blue md:pt-32 pt-12">
        <div className="mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-1/5 px-1">
                <CardStats
                  statTitle="Users"
                  statTitlePercent="35%"
                  statArrow="up"
                  statPercent="3.48"
                  statDescripiron="Since last month"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                  bgColor="bg-[#9771E7]"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-1/5 px-1">
                <CardStats
                  statTitle="Employees"
                  statTitlePercent="24%"
                  statArrow="down"
                  statPercent="3.48"
                  statDescripiron="Since last week"
                  statIconName="fas fa-chart-pie"
                  bgColor="bg-[#6E45E1]"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-1/5 px-1">
                <CardStats
                  statTitle="Activity"
                  statTitlePercent="92%"
                  statArrow="down"
                  statPercent="1.10"
                  bgColor="bg-[#8F0FF3]"
                />
              </div>
              <div className="w-full lg:w-8/12 xl:w-1/5 px-1">
                <CardStats
                  statTitle="Disabled"
                  statTitlePercent="65%"
                  statArrow="up"
                  statPercent="12"
                  bgColor="bg-[#161395]"
                />
              </div>
              <div className="w-full lg:w-8/12 xl:w-1/5 px-1">
                <CardStats
                  statTitle="Disabled"
                  statTitlePercent="65%"
                  statArrow="up"
                  statPercent="12"
                  bgColor="bg-[#161395]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
