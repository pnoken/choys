import React from "react";
import CardActivationRate from "../components/Cards/CardActivationRate.js";
import CardLineChart from "../components/Cards/CardLineChart.js";
import CardTopWellbeingActivities from "../components/Cards/CardTopWellbeingActivities.js";

import Admin from "../layouts/Admin.js";

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardLineChart />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardActivationRate />
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardTopWellbeingActivities />
        </div>
        <div className="w-full xl:w-4/12 px-4"></div>
      </div>
    </>
  );
}

Dashboard.layout = Admin;
